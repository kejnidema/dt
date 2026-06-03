package models

import "time"

type Doctor struct {
	ID             string    `json:"id"`
	FirstName      string    `json:"first_name"`
	LastName       string    `json:"last_name"`
	Specialization string    `json:"specialization,omitempty"`
	BiographyDE    string    `json:"biography_de,omitempty"`
	BiographyEN    string    `json:"biography_en,omitempty"`
	ImageURL       string    `json:"image_url,omitempty"`
	Languages      []string  `json:"languages"`
	Credentials    []Cred    `json:"credentials"`
	IsLead         bool      `json:"is_lead"`
	SortOrder      int       `json:"-"`
	Active         bool      `json:"-"`
	CreatedAt      time.Time `json:"-"`
}

type Cred struct {
	Title       string `json:"title"`
	Institution string `json:"institution"`
	Year        int    `json:"year"`
}
