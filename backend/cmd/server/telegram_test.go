package main

import (
	"bytes"
	"context"
	"encoding/json"
	"io"
	"net/http"
	"net/http/httptest"
	"os"
	"path/filepath"
	"strings"
	"testing"
	"time"
	"unicode/utf16"

	"github.com/google/uuid"
	"github.com/jackc/pgx/v5/pgxpool"
)

func TestTelegramParts(t *testing.T) {
	l := lead{FullName: "Synthetic Name", Email: "test@example.invalid", Phone: "+123", City: "Test city", Treatment: "implant", Message: strings.Repeat("😀", 2500), PanoramicXrayURL: "https://example.invalid/xray.pdf", Xray: &uploadedXray{}}
	parts := telegramParts("lead-id", l)
	var joined strings.Builder
	for _, p := range parts {
		if p.kind == "text" {
			if len(utf16.Encode([]rune(p.body))) > 4096 {
				t.Fatal("oversized message")
			}
			if !strings.HasPrefix(p.body, "Lead lead-id — part ") {
				t.Fatal("missing lead correlation")
			}
			if strings.Count(p.body, "lead-id") != 1 {
				t.Fatal("duplicate lead ID")
			}
			joined.WriteString(strings.SplitN(p.body, "\n\n", 2)[1])
		}
	}
	for _, value := range []string{l.FullName, l.Email, l.Phone, l.City, l.Treatment, l.Message, l.PanoramicXrayURL} {
		if !strings.Contains(joined.String(), value) {
			t.Fatal("missing field")
		}
	}
	if parts[len(parts)-1].kind != "document" {
		t.Fatal("missing attachment")
	}
	if len(telegramParts("id", lead{})) != 1 {
		t.Fatal("unexpected empty attachment")
	}
}

func TestTelegramMessageSpacing(t *testing.T) {
	parts := telegramParts("test-id", lead{FullName: "Test Name", Email: "test@example.invalid", Message: "Please contact me."})
	want := "Lead test-id — part 1\n\nNew contact form lead\n\nName: Test Name\nEmail: test@example.invalid\nPhone: \nCity: \nTreatment: \nMessage: Please contact me.\nPanoramic X-ray link: \n"
	if len(parts) != 1 || parts[0].body != want {
		t.Fatalf("unexpected message: %+v", parts)
	}
}

func TestTelegramSend(t *testing.T) {
	for _, tc := range []struct {
		name               string
		status             int
		reply, state, code string
	}{
		{"success", 200, `{"ok":true,"result":{"message_id":123}}`, "sent", ""},
		{"limited", 429, `{"ok":false,"error_code":429,"parameters":{"retry_after":90}}`, "pending", "rate_limit"},
		{"upstream", 503, `unavailable`, "pending", "upstream"},
		{"credentials", 401, `{"ok":false,"description":"secret"}`, "failed", "rejected"},
		{"invalid", 200, `not json`, "pending", "invalid_response"},
		{"api error", 200, `{"ok":false,"error_code":400}`, "failed", "rejected"},
	} {
		t.Run(tc.name, func(t *testing.T) {
			srv := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
				var data map[string]any
				if r.URL.Path != "/botdummy/sendMessage" {
					t.Error("wrong endpoint")
				}
				if err := json.NewDecoder(r.Body).Decode(&data); err != nil {
					t.Error(err)
				}
				if data["chat_id"] != "-123" || data["text"] != "<plain text>" || data["parse_mode"] != nil {
					t.Error("wrong text request")
				}
				w.WriteHeader(tc.status)
				_, _ = io.WriteString(w, tc.reply)
			}))
			defer srv.Close()
			worker := telegramWorker{token: "dummy", baseURL: srv.URL, client: srv.Client()}
			got := worker.send(context.Background(), "-123", "<plain text>", nil)
			if got.state != tc.state || got.code != tc.code {
				t.Fatalf("result: %+v", got)
			}
			if tc.name == "limited" && got.retry != 90*time.Second {
				t.Fatal("retry_after ignored")
			}
		})
	}
}

func TestTelegramDocument(t *testing.T) {
	original := []byte("%PDF-1.7 synthetic file")
	srv := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if r.URL.Path != "/botdummy/sendDocument" {
			t.Error("not sent as document")
		}
		if err := r.ParseMultipartForm(1024); err != nil {
			t.Error(err)
			return
		}
		defer r.MultipartForm.RemoveAll()
		file, header, err := r.FormFile("document")
		if err != nil {
			t.Error(err)
			return
		}
		defer file.Close()
		data, _ := io.ReadAll(file)
		if !bytes.Equal(data, original) || header.Filename != "scan.pdf" || header.Header.Get("Content-Type") != "application/pdf" || r.FormValue("chat_id") != "-123" {
			t.Error("attachment changed")
		}
		_, _ = io.WriteString(w, `{"ok":true,"result":{"message_id":456}}`)
	}))
	defer srv.Close()
	worker := telegramWorker{token: "dummy", baseURL: srv.URL, client: srv.Client()}
	got := worker.send(context.Background(), "-123", "lead reference", &uploadedXray{Filename: "scan.pdf", MediaType: "application/pdf", Data: original})
	if got.state != "sent" || got.messageID != "456" {
		t.Fatalf("result: %+v", got)
	}
}

func TestTelegramNetworkFailure(t *testing.T) {
	srv := httptest.NewServer(http.NotFoundHandler())
	srv.Close()
	worker := telegramWorker{token: "dummy", baseURL: srv.URL, client: &http.Client{Timeout: time.Second}}
	if got := worker.send(context.Background(), "-123", "test", nil); got.state != "pending" || got.code != "network" {
		t.Fatal(got)
	}
}

func TestTelegramPostgres(t *testing.T) {
	dsn := os.Getenv("TEST_DATABASE_URL")
	if dsn == "" {
		t.Skip("set TEST_DATABASE_URL to a disposable PostgreSQL database")
	}
	ctx, cancel := context.WithTimeout(context.Background(), 40*time.Second)
	defer cancel()
	admin, err := pgxpool.New(ctx, dsn)
	if err != nil {
		t.Fatal(err)
	}
	defer admin.Close()
	schema := "telegram_test_" + strings.ReplaceAll(uuid.NewString(), "-", "")
	if _, err = admin.Exec(ctx, "CREATE SCHEMA "+schema); err != nil {
		t.Fatal(err)
	}
	defer admin.Exec(context.Background(), "DROP SCHEMA "+schema+" CASCADE")
	config := admin.Config()
	config.ConnConfig.RuntimeParams["search_path"] = schema + ",public"
	pool, err := pgxpool.NewWithConfig(ctx, config)
	if err != nil {
		t.Fatal(err)
	}
	defer pool.Close()
	apply := func(path string) {
		t.Helper()
		sql, e := os.ReadFile(filepath.Join("../../../db", path))
		if e != nil {
			t.Fatal(e)
		}
		if _, e = pool.Exec(ctx, string(sql)); e != nil {
			t.Fatal(e)
		}
	}
	apply("init.sql")
	store := postgresStore{pool}
	if err = store.Save(ctx, lead{FullName: "Historical", Email: "old@example.invalid"}); err != nil {
		t.Fatal(err)
	}
	apply("migrations/003_telegram_outbox.sql")
	var count int
	if err = pool.QueryRow(ctx, "SELECT count(*) FROM telegram_jobs").Scan(&count); err != nil || count != 0 {
		t.Fatalf("historical job: %d %v", count, err)
	}
	original := []byte("%PDF-1.7 synthetic")
	if err = store.Save(ctx, lead{FullName: "New", Email: "new@example.invalid", Message: "All details", Xray: &uploadedXray{Filename: "scan.pdf", MediaType: "application/pdf", Data: original}}); err != nil {
		t.Fatal(err)
	}
	if err = store.Save(ctx, lead{FullName: "Rollback", Email: "rollback@example.invalid", PanoramicXrayURL: strings.Repeat("x", 2049)}); err == nil {
		t.Fatal("expected rollback")
	}
	if err = pool.QueryRow(ctx, "SELECT count(*) FROM telegram_jobs").Scan(&count); err != nil || count != 1 {
		t.Fatalf("atomic queue: %d %v", count, err)
	}
	requests := 0
	srv := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		requests++
		if requests == 1 {
			w.WriteHeader(429)
			_, _ = io.WriteString(w, `{"ok":false,"error_code":429,"parameters":{"retry_after":2}}`)
			return
		}
		if strings.HasSuffix(r.URL.Path, "sendDocument") {
			if e := r.ParseMultipartForm(1024); e != nil {
				t.Error(e)
				return
			}
			defer r.MultipartForm.RemoveAll()
			if r.FormValue("chat_id") != "-123" {
				t.Error("queued recipient changed")
			}
			f, _, e := r.FormFile("document")
			if e != nil {
				t.Error(e)
				return
			}
			defer f.Close()
			data, _ := io.ReadAll(f)
			if !bytes.Equal(data, original) {
				t.Error("wrong stored bytes")
			}
		} else {
			var payload map[string]any
			if e := json.NewDecoder(r.Body).Decode(&payload); e != nil {
				t.Error(e)
			}
			if payload["chat_id"] != "-123" || !strings.Contains(payload["text"].(string), "All details") {
				t.Error("missing lead content or wrong recipient")
			}
		}
		_, _ = io.WriteString(w, `{"ok":true,"result":{"message_id":77}}`)
	}))
	defer srv.Close()
	worker := telegramWorker{pool: pool, token: "dummy", chat: "-123", baseURL: srv.URL, client: srv.Client()}
	if err = worker.plan(ctx); err != nil {
		t.Fatal(err)
	}
	if err = worker.plan(ctx); err != nil {
		t.Fatal(err)
	} // planning must not duplicate parts
	if err = worker.deliver(ctx); err != nil {
		t.Fatal(err)
	}
	if err = worker.deliver(ctx); err != nil {
		t.Fatal(err)
	}
	if requests != 1 {
		t.Fatal("ignored cooldown")
	}
	if _, err = pool.Exec(ctx, "UPDATE telegram_cooldowns SET until_at=now()-interval '1 second'; UPDATE telegram_deliveries SET next_attempt=now()-interval '1 second'"); err != nil {
		t.Fatal(err)
	}
	// A new worker instance resumes durable state after an outage/restart.
	worker = telegramWorker{pool: pool, token: "dummy", chat: "-999", baseURL: srv.URL, client: srv.Client()} // queued recipient remains bound to the original group
	for range 3 {
		if err = worker.deliver(ctx); err != nil {
			t.Fatal(err)
		}
	}
	if requests != 3 {
		t.Fatalf("requests %d", requests)
	}
	if err = pool.QueryRow(ctx, "SELECT count(*) FROM telegram_deliveries WHERE state='sent'").Scan(&count); err != nil || count != 2 {
		t.Fatalf("sent %d %v", count, err)
	}

	// A permanent Telegram failure never rejects a form submission and blocks
	// later parts of only that lead, rather than retrying a bad request forever.
	rejections := 0
	rejected := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		rejections++
		w.WriteHeader(http.StatusForbidden)
		_, _ = io.WriteString(w, `{"ok":false,"error_code":403}`)
	}))
	defer rejected.Close()
	worker.baseURL, worker.client = rejected.URL, rejected.Client()
	response := post(t, store, `{"full_name":"Synthetic rejected","email":"rejected@example.invalid","message":"`+strings.Repeat("a", 5000)+`"}`)
	if response.Code != http.StatusCreated {
		t.Fatalf("form failed: %d", response.Code)
	}
	if err = worker.plan(ctx); err != nil {
		t.Fatal(err)
	}
	for range 2 {
		if err = worker.deliver(ctx); err != nil {
			t.Fatal(err)
		}
	}
	if rejections != 1 {
		t.Fatal("permanent error retried or later part sent")
	}
	if err = pool.QueryRow(ctx, "SELECT count(*) FROM telegram_deliveries WHERE state='failed'").Scan(&count); err != nil || count != 1 {
		t.Fatalf("failed %d %v", count, err)
	}
}
