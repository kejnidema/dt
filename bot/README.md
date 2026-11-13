# Telegram lead notifications

Delivery runs inside the Go backend; there is no separate bot container or public webhook. No polling process is needed after discovering the group ID.

## Setup

1. Create a bot using @BotFather, add it to your **private group**, and allow it to send messages and documents. Administrator privileges are not required if normal members have those permissions.
2. Keep these variables in the repository-root, Git-ignored `.env` (never use a `VITE_` prefix):

   ```dotenv
   TELEGRAM_BOT_TOKEN=<BotFather token>
   TELEGRAM_CHAT_ID=<negative group ID>
   ```

   To discover the group ID, send `/start@your_bot_username` inside the group, then run `python3 dev/telegram_check.py`. This helper prints IDs, not credentials or messages. A bot reply is not expected. Revoke exposed tokens through BotFather.
3. **Existing databases:** back up first and apply the queue migration once, before starting the updated backend:

   ```sh
   docker compose -f docker-compose.yml exec -T db psql -U dt -d dt -v ON_ERROR_STOP=1 < db/migrations/003_telegram_outbox.sql
   ```

   This assumes the current leads/upload schema is already installed (see [lead setup](../leads_setup.md)). The migration does not backfill historical leads. It is not idempotent; do not run it again if `telegram_jobs` already exists. Fresh empty database volumes apply it automatically through Compose. Never delete a database volume to install this feature.
4. Rebuild/recreate the backend so it receives the environment variables:

   ```sh
   docker compose -f docker-compose.yml up -d --build backend
   ```

   In development use the usual development Compose override instead. Changing `.env` requires recreating the backend; restarting an existing container alone does not update its environment.
5. Submit a **synthetic** lead with an optional synthetic JPG/PNG/PDF and confirm all fields and the original attachment arrive in the intended private group. Do not use patient data to test setup.

## Behavior and failures

- Both variables must be set to enable sending. Missing variables disable the worker without disabling the lead form. Do not put real credentials in build arguments, frontend configuration or logs.
- The trigger creates a job in the same transaction as the lead and X-ray. Only leads created after installing the migration are queued. Leads saved after migration while the worker is disabled remain queued and will send when enabled later; previously existing leads never send automatically.
- All form fields are sent as plain text, including the submitted treatment identifier, message and optional X-ray URL. Long messages are split without truncation. Link previews are disabled and external URLs are **never fetched** by the backend.
- Uploaded files are sent with `sendDocument`, preserving filename, media type and original bytes (not compressed photos). Existing upload restrictions remain unchanged. Each message/file references the database lead ID so split notifications can be correlated.
- Pending/sent status and recipient are durable in PostgreSQL. The recipient is pinned when the worker plans a job, so changing the chat ID does not silently redirect already-planned leads. Keep old groups restricted until pending jobs are resolved.
- The worker sends parts in order. Network failures, malformed responses and Telegram 5xx errors retry with exponential delays (5 seconds up to approximately 85 minutes). HTTP 429 honors `retry_after` (bounded to one day) and pauses that recipient. Delivery does not run in the form request path; a Telegram outage does not reject a saved lead.
- Permanent API rejections (e.g. invalid token, inaccessible group, rejected attachment) leave a `failed` part and stop subsequent parts for that lead. Other leads can still proceed. Correct configuration/permissions first, then deliberately requeue failed parts if appropriate. No public queue-management endpoint exists.
- Delivery is **at least once**. A network timeout or crash after Telegram accepts a part but before its status commits may cause a duplicate on retry. Telegram offers no idempotency key. Already-committed sent parts are not resent after restart.
- Multiple backend replicas use row locks to avoid simultaneously delivering the same job. Requests time out after 60 seconds. There is no exactly-once or guaranteed-immediate-delivery promise.

Inspect aggregate status without printing patient data:

```sh
docker compose -f docker-compose.yml exec -T db psql -U dt -d dt -c 'SELECT state, count(*) FROM telegram_deliveries GROUP BY state;'
```

After fixing the cause, an operator can requeue failed deliveries (this affects **all** failed jobs; use a scoped `WHERE lead_id=...` if needed):

```sql
UPDATE telegram_deliveries
SET state='pending', next_attempt=now(), last_error='', updated_at=now()
WHERE state='failed';
```

## Privacy and operation

Telegram bot/group chats are **not end-to-end encrypted**. Forwarding names, contact details, health information and X-rays creates another copy outside the application's private database. Obtain appropriate consent and complete your legal/privacy review before enabling production. Restrict group membership, protect devices/accounts, configure retention/deletion in both systems, and never send secrets in X-ray links. Deleting a database lead cascades queue rows but **does not delete Telegram messages or downloaded copies**.

Queue bodies also contain personal data; restrict database/backup access and define retention. Review queue health regularly: logs contain only generic failures, never Telegram response descriptions or request URLs containing credentials. Do not expose Compose configuration output containing real environment values. Running the migration on a live deployment is an explicit operator action; it is not performed by application startup.

## Verification

```sh
cd backend
go test ./...
go vet ./...
# Disposable DB only: integration tests create synthetic leads and temporary schemas.
TEST_DATABASE_URL=<disposable-postgres-url> go test ./...
```

Tests use a local mocked Telegram API, not your real token or group. Frontend behavior is unchanged. Telegram API references: [sendMessage](https://core.telegram.org/bots/api#sendmessage), [sendDocument](https://core.telegram.org/bots/api#senddocument), [response parameters](https://core.telegram.org/bots/api#responseparameters).
