package handlers

import (
	"context"
	"encoding/json"
	"net/http"

	"dentaltourism/internal/database"
	"dentaltourism/internal/models"
)

type ClinicServiceHandler struct {
	DB *database.DB
}

func (h *ClinicHandler) GetClinicsServices(w http.ResponseWriter, r *http.Request) {
	rows, err := h.DB.Query(context.Background(), "SELECT clinic_service_id, clinic_id, service_id, price, currency FROM clinic_services")
	if err != nil {
		http.Error(w, "Failed to fetch clinic services", http.StatusInternalServerError)
		return
	}
	defer rows.Close()

	var clinicsservices []models.ClinicServices
	for rows.Next() {
		var clinicservice models.ClinicServices
		if err := rows.Scan(
			&clinicservice.ClinicServiceID,
			&clinicservice.ClinicID,
			&clinicservice.ServiceID,
			&clinicservice.Price,
			&clinicservice.Currency,
		); err != nil {
			http.Error(w, "Failed to scan clinic service", http.StatusInternalServerError)
			return
		}
		clinicsservices = append(clinicsservices, clinicservice)
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(clinicsservices)
}
