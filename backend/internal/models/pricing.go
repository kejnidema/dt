package models

type PricingConfig struct {
	GermanCities []CityPricing   `json:"german_cities"`
	Materials    []MaterialPrice `json:"materials"`
}

type CityPricing struct {
	ID            string `json:"-"`
	CityName      string `json:"name"`
	PricePerTooth int    `json:"price_eur_per_tooth"`
	SortOrder     int    `json:"-"`
}

type MaterialPrice struct {
	ID            string `json:"-"`
	Key           string `json:"key"`
	NameDE        string `json:"name_de"`
	NameEN        string `json:"name_en"`
	PricePerTooth int    `json:"price_eur_per_tooth"`
	SortOrder     int    `json:"-"`
}
