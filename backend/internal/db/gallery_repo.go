package db

import (
	"context"
	"fmt"

	"github.com/jackc/pgx/v5/pgxpool"
	"veneer-clinic/internal/models"
)

type GalleryRepo struct {
	pool *pgxpool.Pool
}

func NewGalleryRepo(pool *pgxpool.Pool) *GalleryRepo {
	return &GalleryRepo{pool: pool}
}

func (r *GalleryRepo) List(ctx context.Context, treatmentType string) ([]models.GalleryCase, error) {
	query := `SELECT id, treatment_type, before_image, after_image,
		patient_flag, teeth_count, days_in_tirana, savings_eur, sort_order
		FROM gallery_cases WHERE active = true`

	args := []any{}
	if treatmentType != "" {
		query += ` AND treatment_type = $1`
		args = append(args, treatmentType)
	}
	query += ` ORDER BY sort_order`

	rows, err := r.pool.Query(ctx, query, args...)
	if err != nil {
		return nil, fmt.Errorf("query gallery cases: %w", err)
	}
	defer rows.Close()

	var cases []models.GalleryCase
	for rows.Next() {
		var c models.GalleryCase
		err := rows.Scan(
			&c.ID, &c.TreatmentType, &c.BeforeImage, &c.AfterImage,
			&c.PatientFlag, &c.TeethCount, &c.DaysInTirana, &c.SavingsEUR, &c.SortOrder,
		)
		if err != nil {
			return nil, fmt.Errorf("scan gallery case: %w", err)
		}
		cases = append(cases, c)
	}
	if err = rows.Err(); err != nil {
		return nil, fmt.Errorf("iterate gallery cases: %w", err)
	}
	return cases, nil
}
