package main

import (
	"bytes"
	"errors"
	"image/color"
	"image/jpeg"
	"image/png"
	"io"
	"net/http"
	"path"
	"strings"
	"unicode"
)

const maxUploadSize int64 = 20 << 20 // Website PDF cap; below Cloud API's 100 MB limit
const maxImageSize = 5_000_000       // Conservative decimal 5 MB Cloud API image limit
var errUnsupportedXray = errors.New("use JPG/PNG (8-bit RGB/RGBA, up to 5 MB) or PDF (up to 20 MiB)")
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
		// DecodeConfig validates the 8-bit JPEG header without allocating pixel data.
		cfg, err := jpeg.DecodeConfig(bytes.NewReader(data))
		if len(data) <= maxImageSize && err == nil && cfg.ColorModel == color.YCbCrModel {
			return "image/jpeg"
		}
	case ".png":
		// IHDR: only 8-bit truecolor (2) or truecolor with alpha (6).
		_, err := png.DecodeConfig(bytes.NewReader(data))
		if len(data) <= maxImageSize && err == nil && len(data) >= 26 && data[24] == 8 && (data[25] == 2 || data[25] == 6) {
			return "image/png"
		}
	case ".pdf":
		if len(data) >= 5 && bytes.Equal(data[:5], []byte("%PDF-")) {
			return "application/pdf"
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
				return l, errUnsupportedXray
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
