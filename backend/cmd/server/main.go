package main

import (
	"context"
	"errors"
	"net/http"
	"os"
	"strings"
	"time"

	"veneer-clinic/internal/db"

	"github.com/google/uuid"
	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgtype"
	"github.com/jackc/pgx/v5/pgxpool"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

type server struct {
	queries *db.Queries
}

type consultationRequest struct {
	TreatmentID      string `json:"treatment_id"`
	FullName         string `json:"full_name"`
	Email            string `json:"email"`
	Phone            string `json:"phone"`
	Country          string `json:"country"`
	City             string `json:"city"`
	Message          string `json:"message"`
	PanoramicXrayURL string `json:"panoramic_xray_url"`
}

type updateConsultationStatusRequest struct {
	Status string `json:"status"`
}

func main() {
	time.Local = time.UTC

	ctx := context.Background()
	databaseURL := env("DATABASE_URL", "postgres://dt:dentaltourism@localhost:5432/dt?sslmode=disable")

	pool, err := pgxpool.New(ctx, databaseURL)
	if err != nil {
		panic(err)
	}
	defer pool.Close()

	if err := pool.Ping(ctx); err != nil {
		panic(err)
	}

	s := &server{queries: db.New(pool)}
	e := echo.New()
	e.HideBanner = true
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())
	e.Use(middleware.CORS())

	e.GET("/health", s.health)

	api := e.Group("/api")
	api.GET("/health", s.health)
	api.GET("/testimonials", s.listTestimonials)
	api.GET("/testimonials/featured", s.listFeaturedTestimonials)
	api.POST("/consultation", s.createConsultation)
	api.POST("/consultations", s.createConsultation)
	api.GET("/consultations", s.listConsultations)
	api.PATCH("/consultations/:id/status", s.updateConsultationStatus)

	port := env("PORT", "8080")
	if err := e.Start(":" + port); err != nil && !errors.Is(err, http.ErrServerClosed) {
		panic(err)
	}
}

func (s *server) health(c echo.Context) error {
	return c.JSON(http.StatusOK, map[string]string{"status": "ok"})
}

func (s *server) listTestimonials(c echo.Context) error {
	items, err := s.queries.ListActiveTestimonials(c.Request().Context())
	return jsonOrError(c, items, err)
}

func (s *server) listFeaturedTestimonials(c echo.Context) error {
	items, err := s.queries.ListFeaturedTestimonials(c.Request().Context())
	return jsonOrError(c, items, err)
}

func (s *server) createConsultation(c echo.Context) error {
	var req consultationRequest
	if err := c.Bind(&req); err != nil {
		return c.JSON(http.StatusBadRequest, map[string]string{"error": "invalid request body"})
	}

	req.FullName = strings.TrimSpace(req.FullName)
	req.Email = strings.TrimSpace(req.Email)
	req.Phone = strings.TrimSpace(req.Phone)
	if req.FullName == "" || req.Email == "" || req.Phone == "" {
		return c.JSON(http.StatusBadRequest, map[string]string{"error": "full_name, email and phone are required"})
	}

	ctx := c.Request().Context()
	patient, err := s.queries.UpsertPatientByEmail(ctx, db.UpsertPatientByEmailParams{
		FullName: req.FullName,
		Email:    req.Email,
		Phone:    req.Phone,
		Country:  text(req.Country),
		City:     text(req.City),
	})
	if err != nil {
		return err
	}

	item, err := s.queries.CreateConsultation(ctx, db.CreateConsultationParams{
		PatientID:        uuidValue(patient.ID),
		TreatmentID:      nullableUUID(req.TreatmentID),
		FullName:         req.FullName,
		Email:            req.Email,
		Phone:            req.Phone,
		Country:          text(req.Country),
		City:             text(req.City),
		Message:          text(req.Message),
		PanoramicXrayUrl: text(req.PanoramicXrayURL),
		Status:           nil,
	})
	return jsonOrErrorWithStatus(c, item, err, http.StatusCreated)
}

func (s *server) listConsultations(c echo.Context) error {
	status := strings.TrimSpace(c.QueryParam("status"))
	if status == "" {
		status = "new"
	}

	items, err := s.queries.ListConsultationsByStatus(c.Request().Context(), status)
	return jsonOrError(c, items, err)
}

func (s *server) updateConsultationStatus(c echo.Context) error {
	id, err := uuid.Parse(strings.TrimSpace(c.Param("id")))
	if err != nil {
		return c.JSON(http.StatusBadRequest, map[string]string{"error": "invalid consultation id"})
	}

	var req updateConsultationStatusRequest
	if err := c.Bind(&req); err != nil {
		return c.JSON(http.StatusBadRequest, map[string]string{"error": "invalid request body"})
	}
	req.Status = strings.TrimSpace(req.Status)
	if req.Status == "" {
		return c.JSON(http.StatusBadRequest, map[string]string{"error": "status is required"})
	}

	item, err := s.queries.UpdateConsultationStatus(c.Request().Context(), db.UpdateConsultationStatusParams{
		ID:     id,
		Status: req.Status,
	})
	return jsonOrError(c, item, err)
}

func jsonOrError(c echo.Context, v any, err error) error {
	return jsonOrErrorWithStatus(c, v, err, http.StatusOK)
}

func jsonOrErrorWithStatus(c echo.Context, v any, err error, status int) error {
	if err == nil {
		return c.JSON(status, v)
	}
	if errors.Is(err, pgx.ErrNoRows) {
		return c.JSON(http.StatusNotFound, map[string]string{"error": "not found"})
	}
	return err
}

func text(value string) pgtype.Text {
	value = strings.TrimSpace(value)
	return pgtype.Text{String: value, Valid: value != ""}
}

func uuidValue(id uuid.UUID) pgtype.UUID {
	return pgtype.UUID{Bytes: id, Valid: true}
}

func nullableUUID(value string) pgtype.UUID {
	value = strings.TrimSpace(value)
	if value == "" {
		return pgtype.UUID{}
	}
	id, err := uuid.Parse(value)
	if err != nil {
		return pgtype.UUID{}
	}
	return uuidValue(id)
}

func env(key, fallback string) string {
	value := strings.TrimSpace(os.Getenv(key))
	if value == "" {
		return fallback
	}
	return value
}
