-- name: ListActiveTestimonials :many
SELECT
    id,
    patient_id,
    treatment_id,
    patient_name,
    rating,
    comment_en,
    patient_flag,
    days_ago,
    consent_given,
    consent_given_at,
    anonymized,
    featured,
    active,
    created_at,
    updated_at
FROM testimonials
WHERE active = TRUE
ORDER BY featured DESC, created_at DESC;

-- name: ListFeaturedTestimonials :many
SELECT
    id,
    patient_id,
    treatment_id,
    patient_name,
    rating,
    comment_en,
    patient_flag,
    days_ago,
    consent_given,
    consent_given_at,
    anonymized,
    featured,
    active,
    created_at,
    updated_at
FROM testimonials
WHERE active = TRUE
  AND featured = TRUE
ORDER BY created_at DESC;
