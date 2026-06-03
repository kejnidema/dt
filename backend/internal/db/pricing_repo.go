package db

import (
	"context"
	"fmt"

	"github.com/jackc/pgx/v5/pgxpool"
	"veneer-clinic/internal/models"
)

type PricingRepo struct {
	pool *pgxpool.Pool
}

func NewPricingRepo(pool *pgxpool.Pool) *PricingRepo {
	return &PricingRepo{pool: pool}
}

func (r *PricingRepo) GetConfig(ctx context.Context) (*models.PricingConfig, error) {
	config := &models.PricingConfig{}

	// German cities
	citiesQuery := `SELECT id, city_name, price_per_tooth, sort_order FROM pricing_cities ORDER BY sort_order`
	cityRows, err := r.pool.Query(ctx, citiesQuery)
	if err != nil {
		return nil, fmt.Errorf("query pricing cities: %w", err)
	}
	for cityRows.Next() {
		var c models.CityPricing
		if err := cityRows.Scan(&c.ID, &c.CityName, &c.PricePerTooth, &c.SortOrder); err != nil {
			return nil, fmt.Errorf("scan city: %w", err)
		}
		config.GermanCities = append(config.GermanCities, c)
	}
	cityRows.Close()
	if err = cityRows.Err(); err != nil {
		return nil, fmt.Errorf("iterate cities: %w", err)
	}

	// Materials
	matQuery := `SELECT id, key, name_de, name_en, price_per_tooth, sort_order FROM pricing_materials ORDER BY sort_order`
	matRows, err := r.pool.Query(ctx, matQuery)
	if err != nil {
		return nil, fmt.Errorf("query pricing materials: %w", err)
	}
	for matRows.Next() {
		var m models.MaterialPrice
		if err := matRows.Scan(&m.ID, &m.Key, &m.NameDE, &m.NameEN, &m.PricePerTooth, &m.SortOrder); err != nil {
			return nil, fmt.Errorf("scan material: %w", err)
		}
		config.Materials = append(config.Materials, m)
	}
	matRows.Close()
	if err = matRows.Err(); err != nil {
		return nil, fmt.Errorf("iterate materials: %w", err)
	}

	return config, nil
}
