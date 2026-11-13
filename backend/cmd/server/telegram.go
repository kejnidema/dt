package main

import (
	"bytes"
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"log"
	"mime/multipart"
	"net/http"
	"net/textproto"
	"strconv"
	"strings"
	"time"

	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgxpool"
)

type telegramWorker struct {
	pool                 *pgxpool.Pool
	token, chat, baseURL string
	client               *http.Client
}

type telegramPart struct{ field, body, kind string }

// Stay below Telegram's 4096-character limit even when counting UTF-16 units.
func telegramParts(id string, l lead) []telegramPart {
	fields := [][2]string{{"Lead ID", id}, {"Name", l.FullName}, {"Email", l.Email}, {"Phone", l.Phone}, {"City", l.City}, {"Treatment", l.Treatment}, {"Message", l.Message}, {"Panoramic X-ray link", l.PanoramicXrayURL}}
	var text strings.Builder
	text.WriteString("New contact form lead\n")
	for _, f := range fields {
		text.WriteString(f[0])
		text.WriteString(": ")
		text.WriteString(f[1])
		text.WriteByte('\n')
	}
	var parts []telegramPart
	var chunk strings.Builder
	units := 0
	for _, r := range text.String() {
		n := 1
		if r > 0xffff {
			n = 2
		}
		if units+n > 3500 {
			parts = append(parts, telegramPart{"contact", chunk.String(), "text"})
			chunk.Reset()
			units = 0
		}
		chunk.WriteRune(r)
		units += n
	}
	if chunk.Len() > 0 {
		parts = append(parts, telegramPart{"contact", chunk.String(), "text"})
	}
	for i := range parts {
		parts[i].body = fmt.Sprintf("Lead %s — part %d\n%s", id, i+1, parts[i].body)
	}
	if l.Xray != nil {
		parts = append(parts, telegramPart{"panoramic_xray", "Panoramic X-ray for lead " + id, "document"})
	}
	return parts
}

// Classifications deliberately exclude API descriptions, request URLs and lead data.
type telegramResult struct {
	state, code, messageID string
	retry                  time.Duration
}

func (w *telegramWorker) send(ctx context.Context, recipient, body string, xray *uploadedXray) telegramResult {
	var payload bytes.Buffer
	method, contentType := "sendMessage", "application/json"
	if xray == nil {
		_ = json.NewEncoder(&payload).Encode(map[string]any{"chat_id": recipient, "text": body, "link_preview_options": map[string]bool{"is_disabled": true}})
	} else {
		method = "sendDocument"
		mw := multipart.NewWriter(&payload)
		_ = mw.WriteField("chat_id", recipient)
		_ = mw.WriteField("caption", body)
		h := make(textproto.MIMEHeader)
		// Quoted filenames cannot inject multipart headers.
		h.Set("Content-Disposition", fmt.Sprintf("form-data; name=\"document\"; filename=%s", strconv.Quote(strings.NewReplacer("\r", "", "\n", "").Replace(xray.Filename))))
		h.Set("Content-Type", xray.MediaType)
		part, err := mw.CreatePart(h)
		if err != nil {
			return telegramResult{state: "failed", code: "attachment"}
		}
		_, _ = part.Write(xray.Data)
		_ = mw.Close()
		contentType = mw.FormDataContentType()
	}
	req, err := http.NewRequestWithContext(ctx, http.MethodPost, w.baseURL+"/bot"+w.token+"/"+method, &payload)
	if err != nil {
		return telegramResult{state: "failed", code: "configuration"}
	}
	req.Header.Set("Content-Type", contentType)
	resp, err := w.client.Do(req)
	if err != nil {
		return telegramResult{state: "pending", code: "network"}
	}
	defer resp.Body.Close()
	var result struct {
		OK        bool `json:"ok"`
		ErrorCode int  `json:"error_code"`
		Result    struct {
			MessageID int64 `json:"message_id"`
		} `json:"result"`
		Parameters struct {
			RetryAfter int64 `json:"retry_after"`
		} `json:"parameters"`
	}
	err = json.NewDecoder(io.LimitReader(resp.Body, 1024*1024)).Decode(&result)
	if resp.StatusCode == 429 || result.ErrorCode == 429 {
		seconds := result.Parameters.RetryAfter
		if seconds < 1 {
			seconds = 60
		}
		if seconds > 86400 {
			seconds = 86400
		}
		return telegramResult{state: "pending", code: "rate_limit", retry: time.Duration(seconds) * time.Second}
	}
	if resp.StatusCode >= 500 || result.ErrorCode >= 500 {
		return telegramResult{state: "pending", code: "upstream"}
	}
	if resp.StatusCode >= 400 || (err == nil && !result.OK) {
		return telegramResult{state: "failed", code: "rejected"}
	}
	if err != nil || result.Result.MessageID == 0 {
		return telegramResult{state: "pending", code: "invalid_response"}
	}
	return telegramResult{state: "sent", messageID: strconv.FormatInt(result.Result.MessageID, 10)}
}

// Plan one committed lead at a time. The trigger job is committed atomically with
// its lead and optional X-ray, so the worker never sees half a submission.
func (w *telegramWorker) plan(ctx context.Context) error {
	tx, err := w.pool.Begin(ctx)
	if err != nil {
		return err
	}
	defer tx.Rollback(ctx)
	var id string
	err = tx.QueryRow(ctx, `SELECT lead_id::text FROM telegram_jobs WHERE recipient IS NULL ORDER BY created_at FOR UPDATE SKIP LOCKED LIMIT 1`).Scan(&id)
	if errors.Is(err, pgx.ErrNoRows) {
		return nil
	}
	if err != nil {
		return err
	}
	var l lead
	var file bool
	err = tx.QueryRow(ctx, `SELECT l.full_name,l.email,l.phone,l.city,l.treatment,l.message,COALESCE(x.url,''),COALESCE(x.data IS NOT NULL,false) FROM leads l LEFT JOIN lead_xrays x ON x.lead_id=l.id WHERE l.id=$1`, id).Scan(&l.FullName, &l.Email, &l.Phone, &l.City, &l.Treatment, &l.Message, &l.PanoramicXrayURL, &file)
	if err != nil {
		return err
	}
	if file {
		l.Xray = &uploadedXray{}
	}
	for i, p := range telegramParts(id, l) {
		_, err = tx.Exec(ctx, `INSERT INTO telegram_deliveries(lead_id,part,field,body,kind) VALUES($1,$2,$3,$4,$5)`, id, i, p.field, p.body, p.kind)
		if err != nil {
			return err
		}
	}
	_, err = tx.Exec(ctx, `UPDATE telegram_jobs SET recipient=$2 WHERE lead_id=$1`, id, w.chat)
	if err != nil {
		return err
	}
	return tx.Commit(ctx)
}

// Row locks serialize each lead and survive multiple backend replicas. A crash
// after Telegram accepts a request but before commit may duplicate that part:
// Telegram has no idempotency key, so delivery is at-least-once, not exactly-once.
func (w *telegramWorker) deliver(ctx context.Context) error {
	tx, err := w.pool.Begin(ctx)
	if err != nil {
		return err
	}
	defer tx.Rollback(ctx)
	var job, recipient string
	err = tx.QueryRow(ctx, `SELECT j.lead_id::text,j.recipient FROM telegram_jobs j
 WHERE j.recipient IS NOT NULL AND EXISTS (SELECT 1 FROM telegram_deliveries d WHERE d.lead_id=j.lead_id AND d.state='pending' AND d.next_attempt<=now()
 AND NOT EXISTS (SELECT 1 FROM telegram_deliveries earlier WHERE earlier.lead_id=d.lead_id AND earlier.part<d.part AND earlier.state<>'sent'))
 AND NOT EXISTS (SELECT 1 FROM telegram_deliveries d WHERE d.lead_id=j.lead_id AND d.state IN ('failed','uncertain'))
 AND NOT EXISTS (SELECT 1 FROM telegram_cooldowns c WHERE c.recipient=j.recipient AND c.until_at>now())
 ORDER BY j.created_at FOR UPDATE OF j SKIP LOCKED LIMIT 1`).Scan(&job, &recipient)
	if errors.Is(err, pgx.ErrNoRows) {
		return nil
	}
	if err != nil {
		return err
	}
	var id, body, kind string
	var attempts int
	var due bool
	err = tx.QueryRow(ctx, `SELECT id::text,body,kind,attempts,next_attempt<=now() FROM telegram_deliveries WHERE lead_id=$1 AND state<>'sent' ORDER BY part LIMIT 1`, job).Scan(&id, &body, &kind, &attempts, &due)
	if err != nil {
		return err
	}
	if !due {
		return nil
	}
	var xray *uploadedXray
	if kind == "document" {
		xray = &uploadedXray{}
		err = tx.QueryRow(ctx, `SELECT filename,media_type,data FROM lead_xrays WHERE lead_id=$1 AND data IS NOT NULL`, job).Scan(&xray.Filename, &xray.MediaType, &xray.Data)
		if err != nil {
			return err
		}
	}
	result := w.send(ctx, recipient, body, xray)
	delay := result.retry
	if delay == 0 {
		delay = time.Duration(1<<min(attempts, 10)) * 5 * time.Second
	}
	_, err = tx.Exec(ctx, `UPDATE telegram_deliveries SET state=$2,attempts=attempts+1,next_attempt=now()+$3*interval '1 second',message_id=NULLIF($4,''),last_error=$5,updated_at=now() WHERE id=$1`, id, result.state, delay.Seconds(), result.messageID, result.code)
	if err != nil {
		return err
	}
	if result.retry > 0 {
		_, err = tx.Exec(ctx, `INSERT INTO telegram_cooldowns(recipient,until_at) VALUES($1,now()+$2*interval '1 second') ON CONFLICT(recipient) DO UPDATE SET until_at=GREATEST(telegram_cooldowns.until_at,EXCLUDED.until_at)`, recipient, result.retry.Seconds())
		if err != nil {
			return err
		}
	}
	if err = tx.Commit(ctx); err != nil {
		return err
	}
	if result.state == "failed" {
		log.Print("telegram delivery blocked: API rejected request; inspect queue and bot configuration")
	}
	return nil
}

func (w *telegramWorker) run(ctx context.Context) {
	ticker := time.NewTicker(time.Second)
	defer ticker.Stop()
	for {
		select {
		case <-ctx.Done():
			return
		case <-ticker.C:
		}
		jobCtx, cancel := context.WithTimeout(ctx, 80*time.Second)
		err := w.plan(jobCtx)
		if err == nil {
			err = w.deliver(jobCtx)
		}
		cancel()
		if err != nil && ctx.Err() == nil {
			log.Print("telegram queue unavailable; will retry (check migration/database)")
		}
	}
}
