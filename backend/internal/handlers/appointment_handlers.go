package handlers

import (
	"context"
	"encoding/json"
	"net/http"

	"dentaltourism/internal/database"
	"dentaltourism/internal/models"
)

type AppointmentHandler struct {
	DB *database.DB
}

func (h *AppointmentHandler) GetAppointments(w http.ResponseWriter, r *http.Request) {
	rows, err := h.DB.Query(context.Background(), "SELECT appointment_id, patient_id, clinic_id, service_id, appointment_date, appointment_time, notes, status, created_at FROM appointments")
	if err != nil {
		http.Error(w, "Failed to fetch appointments", http.StatusInternalServerError)
		return
	}
	defer rows.Close()

	var appointments []models.Appointment
	for rows.Next() {
		var appointment models.Appointment
		if err := rows.Scan(
			&appointment.AppointmentID,
			&appointment.PatientID,
			&appointment.ClinicID,
			&appointment.ServiceID,
			&appointment.AppointmentDate,
			&appointment.AppointmentTime,
			&appointment.Notes,
			&appointment.Status,
			&appointment.Notes,
			&appointment.Status,
			&appointment.CreatedAt,
		); err != nil {
			http.Error(w, "Failed to scan appointment", http.StatusInternalServerError)
			return
		}
		appointments = append(appointments, appointment)
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(appointments)
}
