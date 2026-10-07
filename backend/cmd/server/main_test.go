package main

import (
	"bytes"
	"context"
	"errors"
	"mime/multipart"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"
)

type fakeStore struct {
	saved []lead
	err   error
}

func (f *fakeStore) Save(_ context.Context, l lead) error {
	if f.err != nil {
		return f.err
	}
	f.saved = append(f.saved, l)
	return nil
}

func post(t *testing.T, store leadStore, body string) *httptest.ResponseRecorder {
	t.Helper()
	r := httptest.NewRequest(http.MethodPost, "/api/leads", strings.NewReader(body))
	r.Header.Set("Content-Type", "application/json")
	w := httptest.NewRecorder()
	handler(store).ServeHTTP(w, r)
	return w
}

func TestCreateLead(t *testing.T) {
	for _, tc := range []struct {
		name, body    string
		status, count int
	}{
		{"without xray", `{"full_name":" Ana ","email":"ana@example.com","message":"Help"}`, 201, 1},
		{"with xray", `{"full_name":"Ana","email":"ana@example.com","panoramic_xray_url":"https://example.com/scan.pdf"}`, 201, 1},
		{"missing name", `{"email":"ana@example.com"}`, 400, 0},
		{"bad email", `{"full_name":"Ana","email":"no"}`, 400, 0},
		{"insecure link", `{"full_name":"Ana","email":"ana@example.com","panoramic_xray_url":"http://example.com/image.jpg"}`, 400, 0},
		{"credentials in link", `{"full_name":"Ana","email":"ana@example.com","panoramic_xray_url":"https://user:pass@example.com/file"}`, 400, 0},
		{"unknown field", `{"full_name":"Ana","email":"ana@example.com","is_admin":true}`, 400, 0},
		{"trailing data", `{"full_name":"Ana","email":"ana@example.com"} {}`, 400, 0},
		{"oversize", `{"full_name":"Ana","email":"ana@example.com","message":"` + strings.Repeat("a", 17000) + `"}`, 413, 0},
	} {
		t.Run(tc.name, func(t *testing.T) {
			f := &fakeStore{}
			w := post(t, f, tc.body)
			if w.Code != tc.status || len(f.saved) != tc.count {
				t.Fatalf("status %d saves %d: %s", w.Code, len(f.saved), w.Body.String())
			}
			if tc.name == "without xray" && f.saved[0].FullName != "Ana" {
				t.Fatal("name not trimmed")
			}
		})
	}
}

func multipartRequest(t *testing.T, filename string, data []byte, url string) *http.Request {
	t.Helper()
	var buf bytes.Buffer
	w := multipart.NewWriter(&buf)
	_ = w.WriteField("full_name", "Ana")
	_ = w.WriteField("email", "ana@example.com")
	_ = w.WriteField("panoramic_xray_url", url)
	if filename != "" {
		part, err := w.CreateFormFile("panoramic_xray", filename)
		if err != nil {
			t.Fatal(err)
		}
		if _, err := part.Write(data); err != nil {
			t.Fatal(err)
		}
	}
	if err := w.Close(); err != nil {
		t.Fatal(err)
	}
	r := httptest.NewRequest(http.MethodPost, "/api/leads", &buf)
	r.Header.Set("Content-Type", w.FormDataContentType())
	return r
}

func TestMultipartUploads(t *testing.T) {
	formats := []struct {
		filename, mime string
		data           []byte
	}{
		{"scan.jpg", "image/jpeg", []byte{0xff, 0xd8, 0xff, 0xd9}},
		{"scan.png", "image/png", []byte{137, 80, 78, 71, 13, 10, 26, 10}},
		{"scan.tiff", "image/tiff", []byte{'I', 'I', 42, 0}},
		{"scan.bmp", "image/bmp", append([]byte{'B', 'M'}, make([]byte, 12)...)},
		{"scan.pdf", "application/pdf", []byte("%PDF-1.7")},
		{"scan.dcm", "application/dicom", append(make([]byte, 128), []byte("DICM")...)},
	}
	for _, tc := range formats {
		t.Run(tc.filename, func(t *testing.T) {
			f := &fakeStore{}
			w := httptest.NewRecorder()
			handler(f).ServeHTTP(w, multipartRequest(t, tc.filename, tc.data, ""))
			if w.Code != 201 || len(f.saved) != 1 || f.saved[0].Xray == nil || f.saved[0].Xray.MediaType != tc.mime || !bytes.Equal(f.saved[0].Xray.Data, tc.data) {
				t.Fatalf("unexpected upload result: %d", w.Code)
			}
		})
	}
	for _, tc := range []struct {
		name, filename string
		data           []byte
		url            string
		status         int
	}{
		{"bad magic", "fake.pdf", []byte("<script>"), "", 400},
		{"unsupported", "evil.svg", []byte("<svg>"), "", 400},
		{"link plus file", "scan.pdf", []byte("%PDF-1.7"), "https://example.com/xray.pdf", 400},
		{"too large", "scan.pdf", append([]byte("%PDF-"), make([]byte, maxUploadSize)...), "", 413},
	} {
		t.Run(tc.name, func(t *testing.T) {
			f := &fakeStore{}
			w := httptest.NewRecorder()
			handler(f).ServeHTTP(w, multipartRequest(t, tc.filename, tc.data, tc.url))
			if w.Code != tc.status || len(f.saved) != 0 {
				t.Fatalf("got %d saves=%d", w.Code, len(f.saved))
			}
		})
	}
}

func TestNoReadAPIAndFailure(t *testing.T) {
	f := &fakeStore{err: errors.New("sensitive database error")}
	w := post(t, f, `{"full_name":"Ana","email":"ana@example.com"}`)
	if w.Code != 503 || bytes.Contains(w.Body.Bytes(), []byte("sensitive")) {
		t.Fatalf("failure exposed: %d %s", w.Code, w.Body.String())
	}
	for _, path := range []string{"/api/leads", "/api/consultations", "/api/testimonials", "/health"} {
		r := httptest.NewRequest(http.MethodGet, path, nil)
		w := httptest.NewRecorder()
		handler(f).ServeHTTP(w, r)
		if w.Code != 404 && w.Code != 405 {
			t.Fatalf("GET %s returned %d", path, w.Code)
		}
	}
	r := httptest.NewRequest(http.MethodPost, "/api/leads", strings.NewReader(`{}`))
	r.Header.Set("Content-Type", "text/plain")
	w = httptest.NewRecorder()
	handler(f).ServeHTTP(w, r)
	if w.Code != 415 {
		t.Fatalf("unexpected content type: %d", w.Code)
	}
}
