# Dental tourism website

## Run in development mode (Docker Compose)

1. Install Docker with Compose v2.24 or newer (the development override uses `!override`).
2. From the repository root, create a Git-ignored `.env` containing `POSTGRES_PASSWORD=<your-password>`. If you already have a PostgreSQL data volume, use its **existing** password; do not replace it. Optionally add `VITE_WHATSAPP_NUMBER=<international-digits-only-number>` for the WhatsApp links. Never commit `.env`.
3. Start the development stack:

   ```sh
   docker compose -f docker-compose.yml -f docker-compose.dev.yml up --build --watch
   ```

4. Open **http://localhost:5173**. Frontend source changes sync into Vite for hot refresh; backend changes rebuild and restart its container. For changes to `.env`, restart/rebuild the stack. Database initialization SQL is **not** hot-reloaded into existing volumes.
5. Stop with **Ctrl+C**. To remove the development containers while **keeping the database data**, run:

   ```sh
   docker compose -f docker-compose.yml -f docker-compose.dev.yml down
   ```

Development mode runs over HTTP and is **not** suitable for production or real patient submissions. Do not use `down -v` unless you intend to delete the database volume. For production setup, data migration, and privacy notes, see [leads_setup.md](leads_setup.md). For WhatsApp configuration, see [integrate_whatsapp.md](integrate_whatsapp.md).
