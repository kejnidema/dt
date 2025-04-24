package handlers

import (
	"context"
	"encoding/json"
	"net/http"

	"dentaltourism/internal/database"
	"dentaltourism/internal/models"
)

type DoctorHandler struct {
	DB *database.DB
}

func (h *ClinicHandler) GetDoctors(w http.ResponseWriter, r *http.Request) {
	rows, err := h.DB.Query(context.Background(), "SELECT doctor_id, first_name, last_name, email, phone_number, created_at FROM doctors")
	if err != nil {
		http.Error(w, "Failed to fetch doctors", http.StatusInternalServerError)
		return
	}
	defer rows.Close()

	var doctors []models.Doctor
	for rows.Next() {
		var doctor models.Doctor
		if err := rows.Scan(
			&doctor.DoctorID,
			&doctor.FirstName,
			&doctor.LastName,
			&doctor.Email,
			&doctor.PhoneNumber,
			&doctor.CreatedAt,
		); err != nil {
			http.Error(w, "Failed to scan doctor", http.StatusInternalServerError)
			return
		}
		doctors = append(doctors, doctor)
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(doctors)
}
