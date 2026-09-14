-- Seed data from static/info.md only.

INSERT INTO doctors (
    first_name,
    last_name,
    specialization,
    credentials
)
SELECT
    'Besim',
    'Skënderi',
    'cirurgic maskalio-faciale',
    '["dentist", "msc stomatology"]'::jsonb
WHERE NOT EXISTS (
    SELECT 1
    FROM doctors
    WHERE first_name = 'Besim'
      AND last_name = 'Skënderi'
);
