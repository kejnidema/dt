package main

import (
	"bytes"
	"errors"
	"io"
	"net/http"
	"path"
	"strings"
	"unicode"
)

const maxUploadSize int64 = 20 << 20 // 20 MiB for a single 2D panoramic image/export
var errFileTooLarge = errors.New("file too large")
var errInvalidMultipart = errors.New("invalid multipart form")

type uploadedXray struct {
	Filename  string
	MediaType string
	Data      []byte
}

// Never trust a filename or Content-Type supplied by the client. No public file
// endpoint exists; these bytes remain private in PostgreSQL.
func xrayType(filename string, data []byte) string {
	ext := strings.ToLower(path.Ext(filename))
	switch ext {
	case ".jpg", ".jpeg":
		if len(data) >= 3 && bytes.Equal(data[:3], []byte{0xff, 0xd8, 0xff}) {
			return "image/jpeg"
		}
	case ".png":
		if len(data) >= 8 && bytes.Equal(data[:8], []byte{137, 80, 78, 71, 13, 10, 26, 10}) {
			return "image/png"
		}
	case ".bmp":
		if len(data) >= 14 && bytes.Equal(data[:2], []byte{'B', 'M'}) {
			return "image/bmp"
		}
	case ".tif", ".tiff":
		if len(data) >= 4 && (bytes.Equal(data[:4], []byte{'I', 'I', 42, 0}) || bytes.Equal(data[:4], []byte{'M', 'M', 0, 42})) {
			return "image/tiff"
		}
	case ".pdf":
		if len(data) >= 5 && bytes.Equal(data[:5], []byte("%PDF-")) {
			return "application/pdf"
		}
	case ".dcm":
		if len(data) >= 132 && bytes.Equal(data[128:132], []byte("DICM")) {
			return "application/dicom"
		}
	}
	return ""
}

func parseLeadMultipart(r *http.Request) (lead, error) {
	var l lead
	reader, err := r.MultipartReader()
	if err != nil {
		return l, err
	}
	fields := map[string]*string{
		"full_name": &l.FullName, "email": &l.Email, "phone": &l.Phone,
		"city": &l.City, "treatment": &l.Treatment, "message": &l.Message,
		"panoramic_xray_url": &l.PanoramicXrayURL,
	}
	seen := make(map[string]bool)
	for count := 0; ; count++ {
		if count > len(fields)+1 {
			return l, errInvalidMultipart
		}
		part, err := reader.NextPart()
		if errors.Is(err, io.EOF) {
			break
		}
		if err != nil {
			return l, err
		}
		key := part.FormName()
		if seen[key] {
			part.Close()
			return l, errInvalidMultipart
		}
		seen[key] = true
		if key == "panoramic_xray" {
			name := path.Base(strings.ReplaceAll(part.FileName(), "\\", "/"))
			if name == "." || name == "" || len(name) > 128 || strings.ContainsFunc(name, unicode.IsControl) {
				part.Close()
				return l, errInvalidMultipart
			}
			data, err := io.ReadAll(io.LimitReader(part, maxUploadSize+1))
			part.Close()
			if err != nil {
				return l, err
			}
			if int64(len(data)) > maxUploadSize {
				return l, errFileTooLarge
			}
			mediaType := xrayType(name, data)
			if mediaType == "" {
				return l, errInvalidMultipart
			}
			l.Xray = &uploadedXray{Filename: name, MediaType: mediaType, Data: data}
		} else {
			dest, ok := fields[key]
			if !ok || part.FileName() != "" {
				part.Close()
				return l, errInvalidMultipart
			}
			value, err := io.ReadAll(io.LimitReader(part, 5001))
			part.Close()
			if err != nil {
				return l, err
			}
			if len(value) > 5000 {
				return l, errInvalidMultipart
			}
			*dest = string(value)
		}
	}
	return l, nil
}
