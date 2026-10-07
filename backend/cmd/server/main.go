package main

import (
	"context"
	"encoding/json"
	"errors"
	"io"
	"log"
	"net/http"
	"net/mail"
	"net/url"
	"os"
	"strings"
	"time"

	"github.com/google/uuid"
	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgxpool"
)

type lead struct {
	FullName         string `json:"full_name"`
	Email            string `json:"email"`
	Phone            string `json:"phone"`
	City             string `json:"city"`
	Treatment        string `json:"treatment"`
	Message          string `json:"message"`
	PanoramicXrayURL string `json:"panoramic_xray_url"`
}

type leadStore interface {
	Save(context.Context, lead) error
}

type postgresStore struct{ pool *pgxpool.Pool }

func (s postgresStore) Save(ctx context.Context, l lead) error {
	tx, err := s.pool.BeginTx(ctx, pgx.TxOptions{})
	if err != nil {
		return err
	}
	defer tx.Rollback(ctx)
	var id uuid.UUID
	err = tx.QueryRow(ctx, `INSERT INTO leads (full_name, email, phone, city, treatment, message)
		VALUES ($1, $2, $3, $4, $5, $6) RETURNING id`,
		l.FullName, l.Email, l.Phone, l.City, l.Treatment, l.Message).Scan(&id)
	if err != nil {
		return err
	}
	if l.PanoramicXrayURL != "" {
		_, err = tx.Exec(ctx, `INSERT INTO lead_xrays (lead_id, url) VALUES ($1, $2)`, id, l.PanoramicXrayURL)
		if err != nil {
			return err
		}
	}
	return tx.Commit(ctx)
}

func writeJSON(w http.ResponseWriter, status int, body any) {
	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	w.Header().Set("Cache-Control", "no-store")
	w.WriteHeader(status)
	_ = json.NewEncoder(w).Encode(body)
}

func handler(store leadStore) http.Handler {
	mux := http.NewServeMux()
	mux.HandleFunc("POST /api/leads", func(w http.ResponseWriter, r *http.Request) {
		// JSON is not a cross-site simple request. No CORS middleware is installed.
		if r.Header.Get("Content-Type") != "application/json" {
			writeJSON(w, http.StatusUnsupportedMediaType, map[string]string{"error": "expected application/json"})
			return
		}
		if r.ContentLength > 16*1024 {
			writeJSON(w, http.StatusRequestEntityTooLarge, map[string]string{"error": "request too large"})
			return
		}
		dec := json.NewDecoder(http.MaxBytesReader(w, r.Body, 16*1024))
		dec.DisallowUnknownFields()
		var l lead
		if err := dec.Decode(&l); err != nil {
			writeJSON(w, http.StatusBadRequest, map[string]string{"error": "invalid request"})
			return
		}
		if err := dec.Decode(new(any)); !errors.Is(err, io.EOF) {
			writeJSON(w, http.StatusBadRequest, map[string]string{"error": "invalid request"})
			return
		}
		l.FullName = strings.TrimSpace(l.FullName)
		l.Email = strings.TrimSpace(l.Email)
		l.Phone = strings.TrimSpace(l.Phone)
		l.City = strings.TrimSpace(l.City)
		l.Treatment = strings.TrimSpace(l.Treatment)
		l.Message = strings.TrimSpace(l.Message)
		l.PanoramicXrayURL = strings.TrimSpace(l.PanoramicXrayURL)
		if !valid(l) {
			writeJSON(w, http.StatusBadRequest, map[string]string{"error": "invalid form fields"})
			return
		}
		ctx, cancel := context.WithTimeout(r.Context(), 5*time.Second)
		defer cancel()
		if err := store.Save(ctx, l); err != nil {
			log.Printf("lead insert failed: %T", err) // never log lead data, SQL or URL
			writeJSON(w, http.StatusServiceUnavailable, map[string]string{"error": "could not save request; please try again"})
			return
		}
		writeJSON(w, http.StatusCreated, map[string]string{"status": "saved"})
	})
	return mux
}

func valid(l lead) bool {
	if len(l.FullName) < 1 || len(l.FullName) > 150 || len(l.Email) > 254 || len(l.Phone) > 50 || len(l.City) > 120 || len(l.Treatment) > 120 || len(l.Message) > 5000 {
		return false
	}
	addr, err := mail.ParseAddress(l.Email)
	if err != nil || addr.Address != l.Email || len(l.Email) < 3 {
		return false
	}
	if l.PanoramicXrayURL == "" {
		return true
	}
	if len(l.PanoramicXrayURL) > 2048 {
		return false
	}
	u, err := url.Parse(l.PanoramicXrayURL)
	return err == nil && u.Scheme == "https" && u.Hostname() != "" && u.User == nil && u.Fragment == "" && u.Port() == ""
}

func main() {
	dsn := os.Getenv("DATABASE_URL")
	if dsn == "" {
		log.Fatal("DATABASE_URL is required")
	}
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	pool, err := pgxpool.New(ctx, dsn)
	if err != nil {
		log.Fatal("invalid database configuration")
	}
	defer pool.Close()
	if err := pool.Ping(ctx); err != nil {
		log.Fatal("database unavailable")
	}
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	srv := &http.Server{
		Addr:              ":" + port,
		Handler:           handler(postgresStore{pool}),
		ReadHeaderTimeout: 5 * time.Second,
		ReadTimeout:       10 * time.Second,
		WriteTimeout:      10 * time.Second,
		IdleTimeout:       60 * time.Second,
	}
	log.Fatal(srv.ListenAndServe())
}
