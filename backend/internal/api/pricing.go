package api

import (
	"net/http"

	"veneer-clinic/internal/db"
	"veneer-clinic/pkg"
)

type PricingHandler struct {
	repo *db.PricingRepo
}

func NewPricingHandler(repo *db.PricingRepo) *PricingHandler {
	return &PricingHandler{repo: repo}
}

func (h *PricingHandler) GetConfig(w http.ResponseWriter, r *http.Request) {
	config, err := h.repo.GetConfig(r.Context())
	if err != nil {
		pkg.Error(w, http.StatusInternalServerError, "failed to fetch pricing config")
		return
	}
	pkg.JSON(w, http.StatusOK, config)
}
