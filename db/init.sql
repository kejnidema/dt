\c dt;

-- Treatments (E-Max, Zirconia, Porcelain, etc.)
CREATE TABLE treatments (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug            TEXT NOT NULL UNIQUE,
    name_de         TEXT NOT NULL,
    name_en         TEXT NOT NULL,
    description_de  TEXT,
    description_en  TEXT,
    material        TEXT,
    duration_days   INT DEFAULT 0,
    lifespan_years  INT DEFAULT 0,
    advantages      JSONB DEFAULT '[]',
    pricing         JSONB,
    sort_order      INT DEFAULT 0,
    active          BOOLEAN DEFAULT TRUE,
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    updated_at      TIMESTAMPTZ DEFAULT NOW()
);

-- Before/After gallery cases
CREATE TABLE gallery_cases (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    treatment_type  TEXT NOT NULL,
    before_image    TEXT NOT NULL,
    after_image     TEXT NOT NULL,
    patient_flag    TEXT,
    teeth_count     INT DEFAULT 0,
    days_in_tirana  INT DEFAULT 0,
    savings_eur     INT DEFAULT 0,
    sort_order      INT DEFAULT 0,
    active          BOOLEAN DEFAULT TRUE,
    created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- Pricing: German city reference prices
CREATE TABLE pricing_cities (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    city_name       TEXT NOT NULL,
    price_per_tooth INT NOT NULL,
    sort_order      INT DEFAULT 0
);

-- Pricing: Albania (Tirana) material prices
CREATE TABLE pricing_materials (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    key             TEXT NOT NULL UNIQUE,
    name_de         TEXT NOT NULL,
    name_en         TEXT NOT NULL,
    price_per_tooth INT NOT NULL,
    sort_order      INT DEFAULT 0
);

-- Testimonials / reviews
CREATE TABLE testimonials (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    patient_name    TEXT,
    rating          INT CHECK (rating BETWEEN 1 AND 5),
    comment_de      TEXT,
    comment_en      TEXT,
    patient_flag    TEXT,
    treatment       TEXT,
    days_ago        INT,
    featured        BOOLEAN DEFAULT FALSE,
    active          BOOLEAN DEFAULT TRUE,
    created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- Doctor profiles
CREATE TABLE doctors (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    first_name      TEXT NOT NULL,
    last_name       TEXT NOT NULL,
    specialization  TEXT,
    biography_de    TEXT,
    biography_en    TEXT,
    image_url       TEXT,
    languages       JSONB DEFAULT '[]',
    credentials     JSONB DEFAULT '[]',
    is_lead         BOOLEAN DEFAULT FALSE,
    sort_order      INT DEFAULT 0,
    active          BOOLEAN DEFAULT TRUE,
    created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- Consultation requests (from contact form)
CREATE TABLE consultations (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name       TEXT NOT NULL,
    email           TEXT NOT NULL,
    phone           TEXT NOT NULL,
    city            TEXT,
    treatment       TEXT,
    message         TEXT,
    status          TEXT DEFAULT 'new',
    created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_gallery_treatment ON gallery_cases(treatment_type);
CREATE INDEX idx_testimonials_featured ON testimonials(featured) WHERE featured;
CREATE INDEX idx_consultations_status ON consultations(status);
