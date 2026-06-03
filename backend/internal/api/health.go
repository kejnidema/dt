package api

import (
	"net/http"

	"veneer-clinic/pkg"
)

func Health(w http.ResponseWriter, r *http.Request) {
	pkg.JSON(w, http.StatusOK, map[string]string{"status": "ok"})
}
