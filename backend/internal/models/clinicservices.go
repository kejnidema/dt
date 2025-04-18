package models

type ClinicServices struct {
	ClinicServiceID int     `json:"clinic_service_id"`
	ClinicID        int     `json:"clinic_id"`
	ServiceID       int     `json:"service_id"`
	Price           float32 `json:"price"`
	Currency        string  `json:"currency"`
}
