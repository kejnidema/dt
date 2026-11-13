# Dental tourism website

## Run in development mode

1. Install Make and Docker with Compose v2.24 or newer (the development override uses `!override`).
2. From the repository root, create a Git-ignored `.env` containing `POSTGRES_PASSWORD=<your-password>`. If you already have a PostgreSQL data volume, use its **existing** password; do not replace it. Optionally add `VITE_WHATSAPP_NUMBER=<international-digits-only-number>` for the WhatsApp links. Never commit `.env`.
3. Start the development stack:

   ```sh
   make up
   ```

4. Open **http://localhost:5173**. Frontend source changes sync into Vite for hot refresh; backend changes rebuild and restart its container. For changes to `.env`, restart/rebuild the stack. Database initialization SQL is **not** hot-reloaded into existing volumes.
5. Stop with **Ctrl+C**. To remove the development containers while **keeping the database data**, run:

   ```sh
   make down
   ```

Development mode runs over HTTP and is **not** suitable for production or real patient submissions. For production setup, data migration, and privacy notes, see [leads_setup.md](leads_setup.md).

## Make commands

Run these from the repository root:

| Command | Action |
| --- | --- |
| `make up` | Build and start development with hot reload at http://localhost:5173. |
| `make down` | Stop/remove containers, including orphan services, while preserving database data. |
| `make build` | Build production images without starting services. |
| `make reset` | Delete project database volumes, then rebuild and start development. |

**Warning: `make reset` permanently deletes all database data, including leads, X-rays and notification state.** Use it only for disposable data. The new database is initialized with the current schema automatically. Use `make down` for normal shutdown.

## Automated Telegram lead delivery

The backend sends new saved leads and original panoramic X-ray files (or submitted links) to your configured private Telegram group when `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` are set. See [Telegram setup](bot/README.md) for the required existing-database migration, retries and privacy requirements. Telegram bot chats are not end-to-end encrypted. Website WhatsApp contact links remain independent.
