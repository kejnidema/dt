package api

import (
	"net/http"

	"veneer-clinic/internal/db"
	"veneer-clinic/pkg"
)

type GalleryHandler struct {
	repo *db.GalleryRepo
}

func NewGalleryHandler(repo *db.GalleryRepo) *GalleryHandler {
	return &GalleryHandler{repo: repo}
}

func (h *GalleryHandler) List(w http.ResponseWriter, r *http.Request) {
	treatmentType := r.URL.Query().Get("type")
	cases, err := h.repo.List(r.Context(), treatmentType)
	if err != nil {
		pkg.Error(w, http.StatusInternalServerError, "failed to fetch gallery cases")
		return
	}
	pkg.JSON(w, http.StatusOK, cases)
}
