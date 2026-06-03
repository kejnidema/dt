package api

import (
	"net/http"

	"veneer-clinic/internal/db"
	"veneer-clinic/pkg"
)

type DoctorHandler struct {
	repo *db.DoctorRepo
}

func NewDoctorHandler(repo *db.DoctorRepo) *DoctorHandler {
	return &DoctorHandler{repo: repo}
}

func (h *DoctorHandler) List(w http.ResponseWriter, r *http.Request) {
	doctors, err := h.repo.List(r.Context())
	if err != nil {
		pkg.Error(w, http.StatusInternalServerError, "failed to fetch doctors")
		return
	}
	pkg.JSON(w, http.StatusOK, doctors)
}
