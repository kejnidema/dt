package models

import "time"

type Testimonial struct {
	ID          string    `json:"id"`
	PatientName string    `json:"patient_name,omitempty"`
	Rating      int       `json:"rating"`
	CommentDE   string    `json:"comment_de,omitempty"`
	CommentEN   string    `json:"comment_en,omitempty"`
	PatientFlag string    `json:"patient_flag,omitempty"`
	Treatment   string    `json:"treatment,omitempty"`
	DaysAgo     int       `json:"days_ago,omitempty"`
	Featured    bool      `json:"-"`
	Active      bool      `json:"-"`
	CreatedAt   time.Time `json:"-"`
}
