package api

import (
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/jackc/pgx/v5/pgxpool"
	"veneer-clinic/internal/db"
)

func NewRouter(pool *pgxpool.Pool) *chi.Mux {
	r := chi.NewRouter()

	r.Use(middleware.RequestID)
	r.Use(middleware.Recoverer)
	r.Use(middleware.Logger)
	r.Use(middleware.AllowContentType("application/json"))
	r.Use(corsMiddleware)

	// Health
	r.Get("/api/health", Health)

	// Treatments
	th := NewTreatmentHandler(db.NewTreatmentRepo(pool))
	r.Get("/api/treatments", th.List)
	r.Get("/api/treatments/{slug}", th.GetBySlug)

	// Gallery
	gh := NewGalleryHandler(db.NewGalleryRepo(pool))
	r.Get("/api/gallery", gh.List)

	// Pricing
	ph := NewPricingHandler(db.NewPricingRepo(pool))
	r.Get("/api/pricing-config", ph.GetConfig)

	// Testimonials
	tth := NewTestimonialHandler(db.NewTestimonialRepo(pool))
	r.Get("/api/testimonials", tth.List)

	// Doctors
	dh := NewDoctorHandler(db.NewDoctorRepo(pool))
	r.Get("/api/doctors", dh.List)

	// Consultations
	ch := NewConsultationHandler(db.NewConsultationRepo(pool))
	r.Post("/api/consultation", ch.Create)

	return r
}

// corsMiddleware handles CORS for the frontend.
// In production, restrict origins to your actual domain.
func corsMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		origin := r.Header.Get("Origin")
		if origin != "" {
			w.Header().Set("Access-Control-Allow-Origin", origin)
		}
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Accept")
		if r.Method == http.MethodOptions {
			w.WriteHeader(http.StatusNoContent)
			return
		}
		next.ServeHTTP(w, r)
	})
}
