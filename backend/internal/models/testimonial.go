package models

import "time"

type Testimonial struct {
	TestimoialID       int       `json:"testimonial_id"`
	PatientName        string    `json:"patient_name"`
	ClinicID           int       `json:"clinic_id"`
	Rating             int       `json:"rating"`
	TestimonialComment string    `json:"testimonial_comment"`
	CreatedAt          time.Time `json:"created_at"`
	IsApproved         bool      `json:"is_approved"`
}
