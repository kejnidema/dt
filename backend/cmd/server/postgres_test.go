package main

import (
	"context"
	"os"
	"strings"
	"testing"
	"time"

	"github.com/jackc/pgx/v5/pgxpool"
)

// Integration test uses a disposable DB created from db/init.sql. Never point
// TEST_DATABASE_URL at a production database; this test inserts sample records.
func TestPostgresSave(t *testing.T) {
	dsn := os.Getenv("TEST_DATABASE_URL")
	if dsn == "" {
		t.Skip("set TEST_DATABASE_URL for database integration test")
	}
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	pool, err := pgxpool.New(ctx, dsn)
	if err != nil {
		t.Fatal(err)
	}
	defer pool.Close()
	store := postgresStore{pool}
	if err := store.Save(ctx, lead{FullName: "Test Lead", Email: "test@example.invalid", Message: "test"}); err != nil {
		t.Fatal(err)
	}
	if err := store.Save(ctx, lead{FullName: "Test Lead 2", Email: "test2@example.invalid", PanoramicXrayURL: "https://example.invalid/scan.pdf"}); err != nil {
		t.Fatal(err)
	}
	var leads, xrays int
	err = pool.QueryRow(ctx, `SELECT count(*) FROM leads WHERE email IN ('test@example.invalid','test2@example.invalid')`).Scan(&leads)
	if err != nil {
		t.Fatal(err)
	}
	err = pool.QueryRow(ctx, `SELECT count(*) FROM lead_xrays x JOIN leads l ON x.lead_id = l.id WHERE l.email = 'test2@example.invalid' AND x.url = 'https://example.invalid/scan.pdf'`).Scan(&xrays)
	if err != nil {
		t.Fatal(err)
	}
	if leads < 2 || xrays < 1 {
		t.Fatalf("got leads=%d xrays=%d", leads, xrays)
	}
	// A failed X-ray insert must not leave an orphan lead behind.
	if err := store.Save(ctx, lead{FullName: "Rollback Test", Email: "rollback@example.invalid", PanoramicXrayURL: strings.Repeat("a", 2049)}); err == nil {
		t.Fatal("expected URL length constraint to fail")
	}
	var orphanCount int
	if err := pool.QueryRow(ctx, `SELECT count(*) FROM leads WHERE email = 'rollback@example.invalid'`).Scan(&orphanCount); err != nil {
		t.Fatal(err)
	}
	if orphanCount != 0 {
		t.Fatal("transaction left orphan lead")
	}
}
