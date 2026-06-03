package db

import (
	"context"
	"encoding/json"
	"fmt"

	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgxpool"
	"veneer-clinic/internal/models"
)

type TreatmentRepo struct {
	pool *pgxpool.Pool
}

func NewTreatmentRepo(pool *pgxpool.Pool) *TreatmentRepo {
	return &TreatmentRepo{pool: pool}
}

func (r *TreatmentRepo) List(ctx context.Context) ([]models.Treatment, error) {
	query := `SELECT id, slug, name_de, name_en, description_de, description_en,
		material, duration_days, lifespan_years, advantages, pricing, sort_order
		FROM treatments WHERE active = true ORDER BY sort_order`

	rows, err := r.pool.Query(ctx, query)
	if err != nil {
		return nil, fmt.Errorf("query treatments: %w", err)
	}
	defer rows.Close()

	var treatments []models.Treatment
	for rows.Next() {
		t, err := scanTreatment(rows)
		if err != nil {
			return nil, fmt.Errorf("scan treatment: %w", err)
		}
		treatments = append(treatments, *t)
	}
	if err = rows.Err(); err != nil {
		return nil, fmt.Errorf("iterate treatments: %w", err)
	}
	return treatments, nil
}

func (r *TreatmentRepo) GetBySlug(ctx context.Context, slug string) (*models.Treatment, error) {
	query := `SELECT id, slug, name_de, name_en, description_de, description_en,
		material, duration_days, lifespan_years, advantages, pricing, sort_order
		FROM treatments WHERE slug = $1 AND active = true`

	row := r.pool.QueryRow(ctx, query, slug)
	t, err := scanTreatmentRow(row)
	if err != nil {
		return nil, fmt.Errorf("get treatment %q: %w", slug, err)
	}
	return t, nil
}

func scanTreatmentRow(row pgx.Row) (*models.Treatment, error) {
	var t models.Treatment
	var advantagesJSON, pricingJSON []byte

	err := row.Scan(
		&t.ID, &t.Slug, &t.NameDE, &t.NameEN,
		&t.DescriptionDE, &t.DescriptionEN,
		&t.Material, &t.DurationDays, &t.LifespanYears,
		&advantagesJSON, &pricingJSON, &t.SortOrder,
	)
	if err != nil {
		return nil, err
	}

	if err := json.Unmarshal(advantagesJSON, &t.Advantages); err != nil {
		return nil, fmt.Errorf("unmarshal advantages: %w", err)
	}
	if err := json.Unmarshal(pricingJSON, &t.Pricing); err != nil {
		return nil, fmt.Errorf("unmarshal pricing: %w", err)
	}
	return &t, nil
}

func scanTreatment(rows pgx.Rows) (*models.Treatment, error) {
	if !rows.Next() {
		return nil, pgx.ErrNoRows
	}
	return scanTreatmentRow(rows)
}
