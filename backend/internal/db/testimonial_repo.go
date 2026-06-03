package db

import (
	"context"
	"fmt"

	"github.com/jackc/pgx/v5/pgxpool"
	"veneer-clinic/internal/models"
)

type TestimonialRepo struct {
	pool *pgxpool.Pool
}

func NewTestimonialRepo(pool *pgxpool.Pool) *TestimonialRepo {
	return &TestimonialRepo{pool: pool}
}

func (r *TestimonialRepo) List(ctx context.Context) ([]models.Testimonial, error) {
	query := `SELECT id, patient_name, rating, comment_de, comment_en,
		patient_flag, treatment, days_ago, featured
		FROM testimonials WHERE active = true ORDER BY featured DESC, created_at DESC`

	rows, err := r.pool.Query(ctx, query)
	if err != nil {
		return nil, fmt.Errorf("query testimonials: %w", err)
	}
	defer rows.Close()

	var list []models.Testimonial
	for rows.Next() {
		var t models.Testimonial
		err := rows.Scan(
			&t.ID, &t.PatientName, &t.Rating, &t.CommentDE, &t.CommentEN,
			&t.PatientFlag, &t.Treatment, &t.DaysAgo, &t.Featured,
		)
		if err != nil {
			return nil, fmt.Errorf("scan testimonial: %w", err)
		}
		list = append(list, t)
	}
	if err = rows.Err(); err != nil {
		return nil, fmt.Errorf("iterate testimonials: %w", err)
	}
	return list, nil
}
