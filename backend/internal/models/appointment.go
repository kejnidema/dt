package models

import "time"

type Appointment struct {
	AppointmentID   int       `json:"appointment_id"`
	PatientID       int       `json:"patient_id"`
	ClinicID        int       `json:"clinic_id"`
	ServiceID       int       `json:"service_id"`
	AppointmentDate time.Time `json:"appointment_date"`
	AppointmentTime time.Time `json:"appointment_time"`
	Notes           string    `json:"notes"`
	Status          string    `json:"status"`
	CreatedAt       time.Time `json:"created_at"`
}
