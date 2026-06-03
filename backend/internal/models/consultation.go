package models

import "time"

type ConsultationRequest struct {
	FullName  string `json:"full_name"`
	Email     string `json:"email"`
	Phone     string `json:"phone"`
	City      string `json:"city,omitempty"`
	Treatment string `json:"treatment,omitempty"`
	Message   string `json:"message,omitempty"`
}

type Consultation struct {
	ID        string    `json:"id"`
	FullName  string    `json:"full_name"`
	Email     string    `json:"email"`
	Phone     string    `json:"phone"`
	City      string    `json:"city,omitempty"`
	Treatment string    `json:"treatment,omitempty"`
	Message   string    `json:"message,omitempty"`
	Status    string    `json:"status"`
	CreatedAt time.Time `json:"created_at"`
}
