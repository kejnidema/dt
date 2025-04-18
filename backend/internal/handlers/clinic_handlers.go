package handlers

import (
	"context"
	"encoding/json"
	"net/http"

	"dentaltourism/internal/database"
	"dentaltourism/internal/models"
)

type ClinicHandler struct {
	DB *database.DB
}

func (h *ClinicHandler) GetClinics(w http.ResponseWriter, r *http.Request) {
	rows, err := h.DB.Query(context.Background(), "SELECT clinic_id, name, address, city, country FROM clinics")
	if err != nil {
		http.Error(w, "Failed to fetch clinics", http.StatusInternalServerError)
		return
	}
	defer rows.Close()

	var clinics []models.Clinic
	for rows.Next() {
		var clinic models.Clinic
		if err := rows.Scan(
			&clinic.ClinicID,
			&clinic.ClinicName,
			&clinic.Address,
			&clinic.City,
			&clinic.Country,
		); err != nil {
			http.Error(w, "Failed to scan clinic", http.StatusInternalServerError)
			return
		}
		clinics = append(clinics, clinic)
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(clinics)
}
