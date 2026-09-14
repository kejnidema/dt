CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- People/leads. Treatment-specific requests live in consultations.
CREATE TABLE patients (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    country TEXT,
    city TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT patients_email_not_blank CHECK (length(trim(email)) > 0),
    CONSTRAINT patients_phone_not_blank CHECK (length(trim(phone)) > 0),
    CONSTRAINT patients_email_unique UNIQUE (email)
);

-- Consultation requests from contact/landing-page forms.
CREATE TABLE consultations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    patient_id UUID REFERENCES patients (id) ON DELETE SET NULL,
    treatment_id UUID REFERENCES treatments (id) ON DELETE SET NULL,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    country TEXT,
    city TEXT,
    message TEXT,
    panoramic_xray_url TEXT,
    status TEXT NOT NULL DEFAULT 'new' CHECK (
        status IN ('new', 'contacted', 'qualified', 'booked', 'closed', 'spam')
    ),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT consultations_email_not_blank CHECK (length(trim(email)) > 0),
    CONSTRAINT consultations_phone_not_blank CHECK (length(trim(phone)) > 0)
);


-- Testimonials/reviews.
CREATE TABLE testimonials (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    patient_id UUID REFERENCES patients (id) ON DELETE SET NULL,
    treatment_id UUID REFERENCES treatments (id) ON DELETE SET NULL,
    patient_name TEXT,
    rating INT NOT NULL CHECK (rating BETWEEN 1 AND 5),
    comment_en TEXT,
    patient_flag TEXT,
    days_ago INT CHECK (days_ago IS NULL OR days_ago >= 0),
    consent_given BOOLEAN NOT NULL DEFAULT FALSE,
    consent_given_at TIMESTAMPTZ,
    anonymized BOOLEAN NOT NULL DEFAULT TRUE,
    featured BOOLEAN NOT NULL DEFAULT FALSE,
    active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT testimonials_consent_timestamp CHECK (
        (consent_given = FALSE AND consent_given_at IS NULL)
        OR (consent_given = TRUE AND consent_given_at IS NOT NULL)
    )
);

