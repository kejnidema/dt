package main

import (
	"bytes"
	"image"
	"image/color"
	"image/jpeg"
	"image/png"
	"testing"
)

func TestImageColorAndSizeRestrictions(t *testing.T) {
	for _, img := range []image.Image{
		image.NewGray(image.Rect(0, 0, 2, 2)),
		image.NewNRGBA64(image.Rect(0, 0, 2, 2)),
		image.NewPaletted(image.Rect(0, 0, 2, 2), color.Palette{color.Black, color.White}),
	} {
		var buf bytes.Buffer
		if err := png.Encode(&buf, img); err != nil {
			t.Fatal(err)
		}
		if xrayType("scan.png", buf.Bytes()) != "" {
			t.Fatalf("accepted incompatible PNG %T", img)
		}
	}
	var gray bytes.Buffer
	if err := jpeg.Encode(&gray, image.NewGray(image.Rect(0, 0, 2, 2)), nil); err != nil {
		t.Fatal(err)
	}
	if xrayType("scan.jpg", gray.Bytes()) != "" {
		t.Fatal("accepted grayscale JPEG")
	}
	for _, kind := range []string{"jpeg", "png"} {
		data := imageFixture(t, kind)
		atLimit := append(data, make([]byte, maxImageSize-len(data))...)
		if xrayType("scan."+kind, atLimit) == "" {
			t.Fatal("rejected image at limit")
		}
		if xrayType("scan."+kind, append(atLimit, 0)) != "" {
			t.Fatal("accepted image over limit")
		}
	}
}
