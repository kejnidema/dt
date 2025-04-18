package models

type Clinic struct {
	ClinicID    int     `json:"clinic_id"`
	ClinicName  string  `json:"clinic_name"`
	Address     string  `json:"address"`
	City        string  `json:"city"`
	Country     string  `json:"country"`
	PhoneNumber string  `json:"phone_number"`
	Email       string  `json:"email"`
	Website     string  `json:"website"`
	Description string  `json:"description"`
	ImageURL    string  `json:"image_url"`
	Latitude    float64 `json:"latitude"`
	Longitude   float64 `json:"longitude"`
}
