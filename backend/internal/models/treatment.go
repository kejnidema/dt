package models

import "time"

type Treatment struct {
	ID            string             `json:"id"`
	Slug          string             `json:"slug"`
	NameDE        string             `json:"name_de"`
	NameEN        string             `json:"name_en"`
	DescriptionDE string             `json:"description_de,omitempty"`
	DescriptionEN string             `json:"description_en,omitempty"`
	Material      string             `json:"material,omitempty"`
	DurationDays  int                `json:"duration_days"`
	LifespanYears int                `json:"lifespan_years"`
	Advantages    []TreatmentAdvantage `json:"advantages"`
	Pricing       TreatmentPricing   `json:"pricing"`
	SortOrder     int                `json:"-"`
	Active        bool               `json:"-"`
	CreatedAt     time.Time          `json:"-"`
	UpdatedAt     time.Time          `json:"-"`
}

type TreatmentAdvantage struct {
	IconDE  string `json:"icon_de"`
	TitleDE string `json:"title_de"`
	TitleEN string `json:"title_en"`
	DescDE  string `json:"desc_de"`
	DescEN  string `json:"desc_en"`
}

type TreatmentPricing struct {
	AlbaniaPerTooth    int            `json:"albania_per_tooth_eur"`
	GermanyAvgPerTooth int            `json:"germany_avg_per_tooth_eur"`
	PackagePrices      []PackagePrice `json:"package_prices"`
}

type PackagePrice struct {
	NameDE    string `json:"name_de"`
	NameEN    string `json:"name_en"`
	Teeth     int    `json:"teeth_count"`
	Price     int    `json:"price_eur"`
}
