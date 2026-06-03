package db

import (
	"context"
	"encoding/json"
	"fmt"

	"github.com/jackc/pgx/v5/pgxpool"
	"veneer-clinic/internal/models"
)

type DoctorRepo struct {
	pool *pgxpool.Pool
}

func NewDoctorRepo(pool *pgxpool.Pool) *DoctorRepo {
	return &DoctorRepo{pool: pool}
}

func (r *DoctorRepo) List(ctx context.Context) ([]models.Doctor, error) {
	query := `SELECT id, first_name, last_name, specialization, biography_de, biography_en,
		image_url, languages, credentials, is_lead, sort_order
		FROM doctors WHERE active = true ORDER BY sort_order`

	rows, err := r.pool.Query(ctx, query)
	if err != nil {
		return nil, fmt.Errorf("query doctors: %w", err)
	}
	defer rows.Close()

	var doctors []models.Doctor
	for rows.Next() {
		var d models.Doctor
		var languagesJSON, credentialsJSON []byte
		err := rows.Scan(
			&d.ID, &d.FirstName, &d.LastName, &d.Specialization,
			&d.BiographyDE, &d.BiographyEN, &d.ImageURL,
			&languagesJSON, &credentialsJSON, &d.IsLead, &d.SortOrder,
		)
		if err != nil {
			return nil, fmt.Errorf("scan doctor: %w", err)
		}
		if err := json.Unmarshal(languagesJSON, &d.Languages); err != nil {
			return nil, fmt.Errorf("unmarshal languages: %w", err)
		}
		if err := json.Unmarshal(credentialsJSON, &d.Credentials); err != nil {
			return nil, fmt.Errorf("unmarshal credentials: %w", err)
		}
		doctors = append(doctors, d)
	}
	if err = rows.Err(); err != nil {
		return nil, fmt.Errorf("iterate doctors: %w", err)
	}
	return doctors, nil
}
