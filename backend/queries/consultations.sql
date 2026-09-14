-- name: CreateConsultation :one
INSERT INTO consultations (
    patient_id,
    treatment_id,
    full_name,
    email,
    phone,
    country,
    city,
    message,
    panoramic_xray_url,
    status
)
VALUES (
    $1,
    $2,
    $3,
    $4,
    $5,
    $6,
    $7,
    $8,
    $9,
    COALESCE(sqlc.narg(status), 'new')
)
RETURNING
    id,
    patient_id,
    treatment_id,
    full_name,
    email,
    phone,
    country,
    city,
    message,
    panoramic_xray_url,
    status,
    created_at,
    updated_at;

-- name: ListConsultationsByStatus :many
SELECT
    id,
    patient_id,
    treatment_id,
    full_name,
    email,
    phone,
    country,
    city,
    message,
    panoramic_xray_url,
    status,
    created_at,
    updated_at
FROM consultations
WHERE status = $1
ORDER BY created_at DESC;

-- name: UpdateConsultationStatus :one
UPDATE consultations
SET status = $2
WHERE id = $1
RETURNING
    id,
    patient_id,
    treatment_id,
    full_name,
    email,
    phone,
    country,
    city,
    message,
    panoramic_xray_url,
    status,
    created_at,
    updated_at;
