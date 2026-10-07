-- For existing lead_xrays tables from T2 only. Back up the database first.
-- Apply with psql -v ON_ERROR_STOP=1 in a maintenance window before deploying
-- the upload-capable backend. Do not run on the old consultations schema.
BEGIN;
ALTER TABLE lead_xrays ALTER COLUMN url DROP NOT NULL;
ALTER TABLE lead_xrays ADD COLUMN IF NOT EXISTS filename TEXT;
ALTER TABLE lead_xrays ADD COLUMN IF NOT EXISTS media_type TEXT;
ALTER TABLE lead_xrays ADD COLUMN IF NOT EXISTS data BYTEA;
DO $$ BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'lead_xrays_source' AND conrelid = 'lead_xrays'::regclass) THEN
        ALTER TABLE lead_xrays ADD CONSTRAINT lead_xrays_source CHECK (
            (url IS NOT NULL AND filename IS NULL AND media_type IS NULL AND data IS NULL)
            OR (url IS NULL AND filename IS NOT NULL AND media_type IS NOT NULL AND data IS NOT NULL)
        );
    END IF;
END $$;
COMMIT;
