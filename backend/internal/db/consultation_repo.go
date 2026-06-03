package db

import (
	"context"
	"fmt"

	"github.com/jackc/pgx/v5/pgxpool"
	"veneer-clinic/internal/models"
)

type ConsultationRepo struct {
	pool *pgxpool.Pool
}

func NewConsultationRepo(pool *pgxpool.Pool) *ConsultationRepo {
	return &ConsultationRepo{pool: pool}
}

func (r *ConsultationRepo) Create(ctx context.Context, req *models.ConsultationRequest) (*models.Consultation, error) {
	query := `INSERT INTO consultations (full_name, email, phone, city, treatment, message, status)
		VALUES ($1, $2, $3, $4, $5, $6, 'new')
		RETURNING id, full_name, email, phone, city, treatment, message, status, created_at`

	var c models.Consultation
	err := r.pool.QueryRow(ctx, query,
		req.FullName, req.Email, req.Phone, req.City, req.Treatment, req.Message,
	).Scan(
		&c.ID, &c.FullName, &c.Email, &c.Phone, &c.City, &c.Treatment, &c.Message, &c.Status, &c.CreatedAt,
	)
	if err != nil {
		return nil, fmt.Errorf("create consultation: %w", err)
	}
	return &c, nil
}
