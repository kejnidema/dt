package api

import (
	"net/http"

	"github.com/go-chi/chi/v5"
	"veneer-clinic/internal/db"
	"veneer-clinic/pkg"
)

type TreatmentHandler struct {
	repo *db.TreatmentRepo
}

func NewTreatmentHandler(repo *db.TreatmentRepo) *TreatmentHandler {
	return &TreatmentHandler{repo: repo}
}

func (h *TreatmentHandler) List(w http.ResponseWriter, r *http.Request) {
	treatments, err := h.repo.List(r.Context())
	if err != nil {
		pkg.Error(w, http.StatusInternalServerError, "failed to fetch treatments")
		return
	}
	pkg.JSON(w, http.StatusOK, treatments)
}

func (h *TreatmentHandler) GetBySlug(w http.ResponseWriter, r *http.Request) {
	slug := chi.URLParam(r, "slug")
	if slug == "" {
		pkg.Error(w, http.StatusBadRequest, "slug is required")
		return
	}

	treatment, err := h.repo.GetBySlug(r.Context(), slug)
	if err != nil {
		pkg.Error(w, http.StatusNotFound, "treatment not found")
		return
	}
	pkg.JSON(w, http.StatusOK, treatment)
}
