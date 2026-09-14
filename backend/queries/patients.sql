-- name: UpsertPatientByEmail :one
INSERT INTO patients (
    full_name,
    email,
    phone,
    country,
    city
)
VALUES (
    $1,
    $2,
    $3,
    $4,
    $5
)
ON CONFLICT (email) DO UPDATE SET
    full_name = EXCLUDED.full_name,
    phone = EXCLUDED.phone,
    country = EXCLUDED.country,
    city = EXCLUDED.city
RETURNING
    id,
    full_name,
    email,
    phone,
    country,
    city,
    created_at,
    updated_at;

-- name: GetPatientByID :one
SELECT
    id,
    full_name,
    email,
    phone,
    country,
    city,
    created_at,
    updated_at
FROM patients
WHERE id = $1;

-- name: GetPatientByEmail :one
SELECT
    id,
    full_name,
    email,
    phone,
    country,
    city,
    created_at,
    updated_at
FROM patients
WHERE email = $1;
