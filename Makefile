.PHONY: up down reset build bot-dev bot

# Start development with hot reload at http://localhost:5173.
up:
	docker compose -f docker-compose.yml -f docker-compose.dev.yml up --build --watch

# Stop all project services, including optional/orphan services; keep database volumes.
down:
	docker compose -f docker-compose.yml -f docker-compose.dev.yml down --remove-orphans

# DESTRUCTIVE: delete project database volumes, then rebuild/start development.
reset:
	@echo "WARNING: Deleting this project's database volumes and all their data."
	docker compose -f docker-compose.yml -f docker-compose.dev.yml down --remove-orphans --volumes
	$(MAKE) up

# Build production images only; does not start or restart containers.
build:
	docker compose -f docker-compose.yml build

# Start the bot alongside the development stack (requires bot/.env.local and DB setup).
bot-dev:
	docker compose -f docker-compose.yml -f docker-compose.dev.yml -f docker-compose.bot.yml up -d --build bot

# Start the bot with production Compose configuration.
bot:
	docker compose -f docker-compose.yml -f docker-compose.bot.yml up -d --build bot
