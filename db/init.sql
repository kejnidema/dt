-- Fresh installations only. Back up existing databases before migrating; do not
-- apply this file over an existing schema expecting it to remove old tables.
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name TEXT NOT NULL CHECK (length(full_name) BETWEEN 1 AND 150),
    email TEXT NOT NULL CHECK (length(email) BETWEEN 3 AND 254),
    phone TEXT NOT NULL DEFAULT '' CHECK (length(phone) <= 50),
    city TEXT NOT NULL DEFAULT '' CHECK (length(city) <= 120),
    treatment TEXT NOT NULL DEFAULT '' CHECK (length(treatment) <= 120),
    message TEXT NOT NULL DEFAULT '' CHECK (length(message) <= 5000),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Optional reference to an externally hosted image/document. Never fetch this URL
-- on the server; avoid duplicating sensitive patient imagery in this database.
CREATE TABLE lead_xrays (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    lead_id UUID NOT NULL UNIQUE REFERENCES leads(id) ON DELETE CASCADE,
    url TEXT NOT NULL CHECK (length(url) BETWEEN 1 AND 2048),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
