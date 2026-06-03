export interface CityPricing {
  name: string;
  price_eur_per_tooth: number;
}

export interface MaterialPrice {
  key: string;
  name_de: string;
  name_en: string;
  price_eur_per_tooth: number;
}

export interface PricingConfig {
  german_cities: CityPricing[];
  materials: MaterialPrice[];
}
