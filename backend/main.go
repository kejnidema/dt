package main

import (
	"log"
	"net/http"
	"os"

	"backend/internal/database"
	"backend/internal/routes"

	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load() // Load .env file for local development
	if err != nil {
		log.Println("Error loading .env file")
	}

	dbURL := os.Getenv("DATABASE_URL")
	if dbURL == "" {
		log.Fatal("DATABASE_URL environment variable not set")
		return
	}

	db, err := database.Connect(dbURL)
	if err != nil {
		log.Fatalf("Failed to connect to database: %v", err)
		return
	}
	defer db.Close()

	router := routes.SetupRouter(db) // Pass the database connection to your routes

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080" // Default port
	}

	log.Printf("Server listening on port %s", port)
	err = http.ListenAndServe(":"+port, router)
	if err != nil {
		log.Fatalf("Failed to start server: %v", err)
		return
	}
}
