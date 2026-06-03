package api

import (
	"net/http"

	"veneer-clinic/internal/db"
	"veneer-clinic/pkg"
)

type TestimonialHandler struct {
	repo *db.TestimonialRepo
}

func NewTestimonialHandler(repo *db.TestimonialRepo) *TestimonialHandler {
	return &TestimonialHandler{repo: repo}
}

func (h *TestimonialHandler) List(w http.ResponseWriter, r *http.Request) {
	testimonials, err := h.repo.List(r.Context())
	if err != nil {
		pkg.Error(w, http.StatusInternalServerError, "failed to fetch testimonials")
		return
	}
	pkg.JSON(w, http.StatusOK, testimonials)
}
