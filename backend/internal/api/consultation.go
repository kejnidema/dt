package api

import (
	"encoding/json"
	"io"
	"net/http"

	"veneer-clinic/internal/db"
	"veneer-clinic/internal/models"
	"veneer-clinic/pkg"
)

type ConsultationHandler struct {
	repo *db.ConsultationRepo
}

func NewConsultationHandler(repo *db.ConsultationRepo) *ConsultationHandler {
	return &ConsultationHandler{repo: repo}
}

func (h *ConsultationHandler) Create(w http.ResponseWriter, r *http.Request) {
	body, err := io.ReadAll(io.LimitReader(r.Body, 16*1024)) // 16KB max
	if err != nil {
		pkg.Error(w, http.StatusBadRequest, "failed to read request body")
		return
	}

	var req models.ConsultationRequest
	if err := json.Unmarshal(body, &req); err != nil {
		pkg.Error(w, http.StatusBadRequest, "invalid JSON")
		return
	}

	// Inline validation
	if req.FullName == "" || req.Email == "" || req.Phone == "" {
		pkg.Error(w, http.StatusBadRequest, "full_name, email, and phone are required")
		return
	}

	consultation, err := h.repo.Create(r.Context(), &req)
	if err != nil {
		pkg.Error(w, http.StatusInternalServerError, "failed to submit consultation")
		return
	}

	pkg.JSON(w, http.StatusCreated, consultation)
}
