---
name: Elite Clinical Minimalism
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#43474e'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#74777f'
  outline-variant: '#c4c6cf'
  surface-tint: '#476083'
  primary: '#000613'
  on-primary: '#ffffff'
  primary-container: '#001f3f'
  on-primary-container: '#6f88ad'
  inverse-primary: '#afc8f0'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed65b'
  on-secondary-container: '#745c00'
  tertiary: '#000707'
  on-tertiary: '#ffffff'
  tertiary-container: '#002323'
  on-tertiary-container: '#2c9494'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d4e3ff'
  primary-fixed-dim: '#afc8f0'
  on-primary-fixed: '#001c3a'
  on-primary-fixed-variant: '#2f486a'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#93f2f2'
  tertiary-fixed-dim: '#76d6d5'
  on-tertiary-fixed: '#002020'
  on-tertiary-fixed-variant: '#004f4f'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 42px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  section-padding: 80px
---

## Brand & Style

The design system is engineered to bridge the gap between high-precision medical expertise and the bespoke luxury of a boutique dental studio. The target audience is the discerning German traveler seeking high-end cosmetic dentistry (veneers) in Tirana. The UI must evoke immediate trust, clinical sterility, and the premium "Hollywood" aesthetic.

The chosen style is **High-Contrast Minimalism**. It utilizes a "less is more" philosophy where every pixel serves a purpose. By leveraging generous whitespace, thin borders, and a restricted color palette, the system communicates transparency and professional rigor. It avoids the cluttered "discount" look often associated with dental tourism, instead positioning the clinic as a high-value destination for aesthetic perfection.

## Colors

The palette is designed to balance authority with warmth. 

- **Primary (Deep Navy):** Used for primary navigation, headlines, and main buttons to establish a foundation of stability and medical authority.
- **Secondary (Metallic Gold):** Used sparingly as an accent for luxury markers, price highlights, and premium feature callouts. It signifies the "Gold Standard" of the veneers.
- **Tertiary (Teal):** Used for secondary interactions or highlighting clinical benefits, adding a "fresh" and hygienic feel to the interface.
- **Neutrals:** A combination of Crisp White (#FFFFFF) for surfaces and Pearl White (#F9F9F9) for background sections to create depth without using heavy shadows.
- **Success:** A muted Green used specifically for ROI calculations and savings comparisons against German local prices.

## Typography

Typography is used as a structural element. **Hanken Grotesk** provides a sharp, contemporary geometric feel for headings, suggesting modern technology and precision. **Inter** is used for body copy to ensure maximum legibility for detailed medical explanations and pricing transparency.

Hierarchy should be strictly enforced. Use the `label-md` role for small eyebrows above headlines to provide context (e.g., "UNSERE EXPERTISE") in a refined, uppercase format.

## Layout & Spacing

The layout follows a **Fixed Grid** model on desktop to maintain a sense of controlled, boutique elegance. Content is centered within a 1200px container to prevent the eye from wandering on ultra-wide screens, which can feel impersonal.

Spacing is governed by an 8px rhythm. Section padding should be generous (80px+) to allow the high-quality clinical photography to "breathe." On mobile, margins reduce to 16px, and multi-column comparison tables should transform into vertically stacked cards to maintain readability.

## Elevation & Depth

Depth is achieved through **Tonal Layers** and **Ambient Shadows**. 

- Surfaces should primarily be Flat White.
- Elevation is indicated by extremely soft, high-diffusion shadows (Blur: 30px, Opacity: 4%) that make components like "Service Cards" feel as if they are floating gently above the Pearl background.
- Avoid heavy borders. Instead, use thin 1px lines in a light gray (#E0E0E0) to define table structures or input fields, maintaining the minimalist medical aesthetic.

## Shapes

The design system utilizes **Soft** rounding. While "Sharp" (0px) can feel too aggressive for a dental environment and "Pill-shaped" (3) feels too informal/tech-oriented, a subtle 0.25rem (4px) radius on buttons and 0.75rem (12px) on cards provides a human, approachable touch while remaining professional and structured.

## Components

### Buttons
- **Primary:** Deep Navy background, White text. High contrast for main CTAs like "Free Consultation."
- **Secondary:** Gold border with Gold text or transparent background. Used for "Learn More" or "View Gallery."

### Cards
- Used for service descriptions and patient testimonials. 
- White background, 1px light border, and a subtle ambient shadow.

### Before/After Sliders
- Minimalist handle (a simple vertical Gold line with a circular grip). 
- No heavy framing; the images should be the focus.

### Comparison Tables
- Clean and clinical. Use the Primary Navy for the header row and ensure the "Your Clinic" column is subtly highlighted with a Pearl White background or a thin Gold border to draw the eye to the value proposition.

### Input Fields
- Underlined or fully outlined with a 1px Slate border. 
- Focus state should use a 2px Deep Navy bottom border for clear visual feedback.

### Chips/Badges
- Small, uppercase labels used for "Verified" status or "German Quality" markers. Use Tertiary Teal for a "fresh" signal.