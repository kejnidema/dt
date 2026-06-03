export interface TreatmentAdvantage {
  icon_de: string;
  title_de: string;
  title_en: string;
  desc_de: string;
  desc_en: string;
}

export interface PackagePrice {
  name_de: string;
  name_en: string;
  teeth_count: number;
  price_eur: number;
}

export interface TreatmentPricing {
  albania_per_tooth_eur: number;
  germany_avg_per_tooth_eur: number;
  package_prices: PackagePrice[];
}

export interface Treatment {
  id: string;
  slug: string;
  name_de: string;
  name_en: string;
  description_de?: string;
  description_en?: string;
  material?: string;
  duration_days: number;
  lifespan_years: number;
  advantages: TreatmentAdvantage[];
  pricing: TreatmentPricing;
}
