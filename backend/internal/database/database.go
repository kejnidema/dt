package database

import (
	"context"
	"fmt"
	"log"

	"github.com/jackc/pgx/v5/pgxpool"
)

// DB holds the pgx connection pool.
type DB struct {
	*pgxpool.Pool
}

// Connect establishes a connection pool to the PostgreSQL database using pgxpool.
func Connect(ctx context.Context, dbURL string) (*DB, error) {
	poolConfig, err := pgxpool.ParseConfig(dbURL)
	if err != nil {
		return nil, fmt.Errorf("failed to parse database URL: %w", err)
	}

	pool, err := pgxpool.NewWithConfig(ctx, poolConfig)
	if err != nil {
		return nil, fmt.Errorf("failed to create connection pool: %w", err)
	}

	err = pool.Ping(ctx)
	if err != nil {
		return nil, fmt.Errorf("failed to ping database: %w", err)
	}

	log.Println("Successfully created connection pool using pgxpool")
	return &DB{pool}, nil
}

// QueryRowContext executes a single row query from the pool.
func (db *DB) QueryRowContext(ctx context.Context, query string, args ...any) pgxpool.Row {
	return db.QueryRow(ctx, query, args...)
}

// QueryContext executes a query that can return multiple rows from the pool.
func (db *DB) QueryContext(ctx context.Context, query string, args ...any) (pgxpool.Rows, error) {
	return db.Query(ctx, query, args...)
}

// ExecContext executes a command without returning any rows.
func (db *DB) ExecContext(ctx context.Context, query string, args ...any) error {
	_, err := db.Exec(ctx, query, args...)
	return err
}
