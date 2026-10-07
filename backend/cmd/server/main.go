package main

import (
	"context"
	"encoding/json"
	"errors"
	"io"
	"log"
	"mime"
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
	FullName         string        `json:"full_name"`
	Email            string        `json:"email"`
	Phone            string        `json:"phone"`
	City             string        `json:"city"`
	Treatment        string        `json:"treatment"`
	Message          string        `json:"message"`
	PanoramicXrayURL string        `json:"panoramic_xray_url"`
	Xray             *uploadedXray `json:"-"`
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
	if l.Xray != nil {
		_, err = tx.Exec(ctx, `INSERT INTO lead_xrays (lead_id, filename, media_type, data) VALUES ($1, $2, $3, $4)`, id, l.Xray.Filename, l.Xray.MediaType, l.Xray.Data)
		if err != nil {
			return err
		}
	} else if l.PanoramicXrayURL != "" {
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
		mediaType, _, err := mime.ParseMediaType(r.Header.Get("Content-Type"))
		if err != nil || (mediaType != "application/json" && mediaType != "multipart/form-data") {
			writeJSON(w, http.StatusUnsupportedMediaType, map[string]string{"error": "expected JSON or multipart form"})
			return
		}
		limit := int64(16 * 1024)
		if mediaType == "multipart/form-data" {
			limit = maxUploadSize + 32*1024
		}
		if r.ContentLength > limit {
			writeJSON(w, http.StatusRequestEntityTooLarge, map[string]string{"error": "request too large"})
			return
		}
		r.Body = http.MaxBytesReader(w, r.Body, limit)
		var l lead
		if mediaType == "multipart/form-data" {
			l, err = parseLeadMultipart(r)
		} else {
			dec := json.NewDecoder(r.Body)
			dec.DisallowUnknownFields()
			if err = dec.Decode(&l); err == nil {
				if err = dec.Decode(new(any)); errors.Is(err, io.EOF) {
					err = nil
				} else if err == nil {
					err = errors.New("trailing data")
				}
			}
		}
		if err != nil {
			var tooLarge *http.MaxBytesError
			status := http.StatusBadRequest
			if errors.As(err, &tooLarge) || errors.Is(err, errFileTooLarge) {
				status = http.StatusRequestEntityTooLarge
			}
			writeJSON(w, status, map[string]string{"error": "invalid request or file"})
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
		ctx, cancel := context.WithTimeout(r.Context(), 20*time.Second)
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
	if l.Xray != nil && l.PanoramicXrayURL != "" {
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
		ReadTimeout:       90 * time.Second,
		WriteTimeout:      90 * time.Second,
		IdleTimeout:       60 * time.Second,
	}
	log.Fatal(srv.ListenAndServe())
}
