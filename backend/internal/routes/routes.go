package routes

import (
	"github.com/gorilla/mux"

	"dentaltourism/internal/database" // Replace with your actual import path
	"dentaltourism/internal/handlers" // Replace with your actual import path
)

// SetupRouter initializes the HTTP router.
func SetupRouter(db *database.DB) *mux.Router {
	r := mux.NewRouter()

	clinicHandler := &handlers.ClinicHandler{DB: db}

	r.HandleFunc("/api/clinics", clinicHandler.GetClinics).Methods("GET")
	// Add more routes for other resources (appointments, services, etc.)

	// Enable CORS for all origins (adjust as needed for production)
	// corsHandler := cors.Default().Handler(r)

	return r
}
