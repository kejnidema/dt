package handlers

import (
	"context"
	"encoding/json"
	"net/http"

	"dentaltourism/internal/database"
	"dentaltourism/internal/models"
)

type TestimonialHandler struct {
	DB *database.DB
}

func (h *ClinicHandler) GetTestimonials(w http.ResponseWriter, r *http.Request) {
	rows, err := h.DB.Query(context.Background(), "SELECT testimonial_id, patient_name, clinic_id, rating, testimonial_comment, created_at, is_approved FROM testimonials")
	if err != nil {
		http.Error(w, "Failed to fetch testimonials", http.StatusInternalServerError)
		return
	}
	defer rows.Close()

	var testimonials []models.Testimonial
	for rows.Next() {
		var testimonial models.Testimonial
		if err := rows.Scan(
			&testimonial.TestimoialID,
			&testimonial.PatientName,
			&testimonial.ClinicID,
			&testimonial.Rating,
			&testimonial.TestimonialComment,
			&testimonial.CreatedAt,
			&testimonial.IsApproved,
		); err != nil {
			http.Error(w, "Failed to scan testimonial", http.StatusInternalServerError)
			return
		}
		testimonials = append(testimonials, testimonial)
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(testimonials)
}
