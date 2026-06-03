package models

import "time"

type GalleryCase struct {
	ID            string    `json:"id"`
	TreatmentType string    `json:"treatment_type"`
	BeforeImage   string    `json:"before_image"`
	AfterImage    string    `json:"after_image"`
	PatientFlag   string    `json:"patient_flag,omitempty"`
	TeethCount    int       `json:"teeth_count"`
	DaysInTirana  int       `json:"days_in_tirana"`
	SavingsEUR    int       `json:"savings_eur"`
	SortOrder     int       `json:"-"`
	Active        bool      `json:"-"`
	CreatedAt     time.Time `json:"-"`
}
