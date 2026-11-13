-- Apply once after the upload schema; back up before applying.
-- Preserves existing leads and X-rays; queues only newly inserted leads.
BEGIN;

CREATE TABLE telegram_jobs (
    lead_id UUID PRIMARY KEY REFERENCES leads(id) ON DELETE CASCADE,
    recipient TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE TABLE telegram_deliveries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    lead_id UUID NOT NULL REFERENCES telegram_jobs(lead_id) ON DELETE CASCADE,
    part INTEGER NOT NULL,
    field TEXT NOT NULL,
    body TEXT NOT NULL,
    kind TEXT NOT NULL CHECK (kind IN ('text','document')),
    state TEXT NOT NULL DEFAULT 'pending' CHECK (state IN ('pending','sending','sent','failed','uncertain')),
    attempts INTEGER NOT NULL DEFAULT 0,
    next_attempt TIMESTAMPTZ NOT NULL DEFAULT now(),
    message_id TEXT,
    last_error TEXT NOT NULL DEFAULT '',
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    UNIQUE (lead_id, part)
);
CREATE INDEX telegram_due ON telegram_deliveries(next_attempt) WHERE state='pending';
CREATE TABLE telegram_cooldowns (
    recipient TEXT PRIMARY KEY,
    until_at TIMESTAMPTZ NOT NULL
);
CREATE FUNCTION queue_telegram_lead() RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
    INSERT INTO telegram_jobs(lead_id) VALUES (NEW.id);
    RETURN NEW;
END;
$$;
CREATE TRIGGER queue_telegram_lead AFTER INSERT ON leads FOR EACH ROW EXECUTE FUNCTION queue_telegram_lead();
COMMIT;
