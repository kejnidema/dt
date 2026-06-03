# Implementation Plan — Veneer Clinic Tirana Website & Mobile App

## Architecture Overview

```
┌──────────────────────────────────────────────────────┐
│                    Client (React)                    │
│                                                      │
│  /                    →  Homepage                     │
│  /veneers/emax        →  E-Max Veneers Detail Page   │
│  /preisvergleich       →  Price Calculator            │
│  /patient-journey      →  Patient Journey             │
│  [More pages...]                                           │
│                                                      │
│  Static: Tailwind CSS, Material Symbols, Images      │
│  Dynamic: Before/After Slider, Calculator, i18n     │
└──────────────┬───────────────────────────────────────┘
               │ REST API (JSON)
               ▼
┌──────────────────────────────────────────────────────┐
│                    Backend (Go)                      │
│                                                      │
│  GET  /api/treatments          →  Treatment list     │
│  POST /api/consultation        →  Contact form       │
│  GET  /api/pricing-config      →  Price matrices     │
│  GET  /api/gallery             →  Before/after cases │
│  GET  /api/testimonials        →  Review data        │
└──────────────┬───────────────────────────────────────┘
               │ pgx/v5 (connection pool)
               ▼
┌──────────────────────────────────────────────────────┐
│                  PostgreSQL DB                       │
│                                                      │
│  treatments          →  Treatment definitions (DE+EN)│
│  gallery_cases       →  Before/after case metadata   │
│  pricing_cities      →  German city reference prices │
│  pricing_materials   →  Tirana material prices       │
│  testimonials        →  Review data                  │
│  doctors             →  Doctor profiles              │
│  consultations       →  Contact form submissions     │
└──────────────────────────────────────────────────────┘

Deploy:  Bare metal server — nginx (frontend) + Go backend + PostgreSQL, all via Docker Compose
```

---

## Project Structure

```
dt/
├── frontend/                    # React + Vite + Tailwind
│   ├── public/
│   │   └── images/              # Hero photos, before/after pairs, doctors
│   ├── src/
│   │   ├── components/          # Reusable UI components (from design system)
│   │   │   ├── header/          # Desktop nav + mobile hamburger menu
│   │   │   ├── footer/          # 4-column desktop, stacked mobile
│   │   │   ├── before-after/    # Before/After slider component
│   │   │   ├── calculator/      # Price comparison calculator
│   │   │   ├── timeline/        # Patient journey step timeline
│   │   │   ├── material-card/   # Material comparison cards
│   │   │   ├── pricing-table/   # Germany vs Tirana price tables
│   │   │   ├── testimonials/    # Review carousel + Google embed
│   │   │   ├── faq/             # Accordion FAQ component
│   │   │   ├── doctor-card/     # Doctor profile cards
│   │   │   ├── contact-form/    # Consultation request form
│   │   │   ├── trust-bar/       # 4-column trust signals strip
│   │   │   └── whatsapp-btn/    # Floating WhatsApp button
│   │   ├── pages/               # Route-level page components
│   │   │   ├── home/            # Desktop + mobile responsive
│   │   │   ├── treatments/      # Treatment overview grid
│   │   │   ├── veneers/         # Veneer hub page
│   │   │   ├── emax/            # E-Max detail (main product)
│   │   │   ├── porcelain/       # Porcelain detail
│   │   │   ├── zirconia/        # Zirconia detail
│   │   │   ├── gallery/         # Before/After filterable gallery
│   │   │   ├── price-compare/   # Interactive calculator page
│   │   │   ├── journey/         # Patient journey timeline
│   │   │   ├── travel-guide/    # Germany → Albania logistics
│   │   │   ├── reviews/         # Testimonials + Google Reviews
│   │   │   └── contact/         # Contact page with form
│   │   ├── lib/                 # Utilities & API clients
│   │   │   ├── api.ts           # Fetch wrapper for Go backend
│   │   │   ├── i18n.ts          # DE/EN translation management
│   │   │   └── pricing.ts       # Calculator price matrices
│   │   ├── hooks/               # Custom React hooks
│   │   │   ├── use-calculator.ts     # Calculator reactive state
│   │   │   ├── use-before-after.ts   # Before/after slider interaction
│   │   │   ├── use-i18n.ts          # Language toggle context
│   │   │   └── use-mobile-menu.ts    # Mobile hamburger menu state
│   │   ├── styles/
│   │   │   ├── globals.css      # Tailwind config (color tokens, fonts)
│   │   │   └── components.css   # Custom component overrides
│   │   ├── types/               # TypeScript interfaces
│   │   │   ├── treatment.ts
│   │   │   ├── gallery.ts
│   │   │   ├── pricing.ts
│   │   │   └── testimonial.ts
│   │   ├── App.tsx              # Router setup (React Router v6)
│   │   └── main.tsx             # Vite entry point
│   ├── tailwind.config.js       # Custom tokens from DESIGN.md
│   ├── vite.config.ts           # Build config, SSR if needed
│   ├── tsconfig.json
│   └── package.json
│
├── backend/                     # Go REST API
│   ├── cmd/
│   │   └── server/
│   │       └── main.go          # Server entry point
│   ├── internal/
│   │   ├── api/                  # HTTP handlers & route setup
│   │   │   ├── routes.go        # chi router registration
│   │   │   ├── treatment.go     # Treatment endpoints
│   │   │   ├── gallery.go       # Gallery endpoints
│   │   │   ├── pricing.go       # Pricing config endpoints
│   │   │   ├── consultation.go  # Contact form handler
│   │   │   └── health.go        # Health check / readiness
│   │   ├── models/               # Domain types
│   │   │   ├── treatment.go     # Treatment struct + validation
│   │   │   ├── gallery.go       # BeforeAfterCase struct
│   │   │   ├── pricing.go       # PriceMatrix, CityPricing
│   │   │   └── consultation.go  # Contact form DTO
│   │   ├── db/                   # Database layer (PostgreSQL via pgx)
│   │   │   ├── db.go            # Connection pool setup
│   │   │   ├── treatment_repo.go
│   │   │   ├── gallery_repo.go
│   │   │   ├── pricing_repo.go
│   │   │   ├── testimonial_repo.go
│   │   │   └── consultation_repo.go
│   │   └── config/               # Configuration
│   │       └── config.go        # Env vars, YAML loading
│   ├── pkg/                      # Shared utilities
│   │   ├── response.go          # JSON response helpers
│   │   └── email.go             # Email notification (contact form)
│   ├── go.mod
│   └── Dockerfile
│
├── db/                          # PostgreSQL setup
│   ├── Dockerfile               # Postgres image config
│   ├── init.sql                 # Schema creation (tables, indexes)
│   └── seed.sql                 # Initial content data (seeded on first run)
│
├── design_reference/           # Existing design files (keep as reference)
├── docker-compose.yml          # Local dev stack (Go backend + PostgreSQL + pgAdmin)
└── README.md
```

---

## Frontend — Detailed Component Plan

### 1. Global Components (used across all pages)

#### Header / Navigation (`components/header/`)

**Desktop (md+):**
- Sticky top bar, `h-20`, white bg, `border-b border-outline-variant`
- Left: Logo image + "Veneer Clinic Tirana" text in Hanken Grotesk Bold
- Center: Nav links — Home, Treatments, Veneers, Before & After, Why Tirana, About Us
- Right: "Book Now" button (navy bg, white text, `rounded-sm`)
- Active link underlined with navy border-bottom

**Mobile (< md):**
- Same logo + center brand text
- Hamburger menu icon (Material Symbols) opens slide-in drawer
- Drawer contains nav links in vertical stack
- "Book Now" button remains visible

```tsx
// Key props
interface HeaderProps {
  currentPage: string;  // determines active link underline
  onMenuToggle: () => void;
  isOpen: boolean;       // mobile menu open state
}
```

#### Footer (`components/footer/`)

**Desktop:**
- Navy background, white text
- 4-column grid layout (1200px max-width container)
  - Col 1: Logo + tagline
  - Col 2: "Leistungen" links (Veneer Procedure, DSD, Implantology)
  - Col 3: "Patienten" links (Journey, Cost Comparison, Privacy)
  - Col 4: Contact info (address, phone, email)

**Mobile:**
- Stacked single column with section dividers

#### WhatsApp Floating Button (`components/whatsapp-btn/`)

- Fixed position `bottom-6 right-6`
- Green circle (standard WhatsApp green #25D366), 56px diameter
- White WhatsApp icon (Material Symbols or SVG)
- Always visible on all pages
- Link to `https://wa.me/355XXXXXXXXX?text=...`

### 2. Content Components

#### Before/After Slider (`components/before-after/`)

**Design spec from HTML:**
```css
.before-after-container { position: relative; overflow: hidden; }
.before-after-slider    { position: absolute; width: 2px; background: #D4AF37; cursor: ew-resize; z-index: 10; }
.before-after-handle    { width: 40px; height: 40px; border-radius: 50%; bg: navy; border: 2px solid #D4AF37; color: gold; }
```

**Interaction:**
- Drag handle left/right to reveal before vs after image
- Touch-friendly (works on mobile with touch events)
- "VORHER" and "NACHHER" badges at corners (navy semi-transparent bg)
- Aspect ratio 4:5 for hero, configurable for gallery items

**Implementation:**
```tsx
interface BeforeAfterProps {
  beforeImage: string;    // URL to before photo
  afterImage: string;     // URL to after photo
  aspectRatio?: 'tall' | 'square' | 'wide'; // 4:5, 1:1, 16:9
  showLabels?: boolean;   // VORHER/NACHHER badges (default true)
  initialPosition?: number; // Initial slider position 0-100 (default 50)
}
```

#### Price Calculator (`components/calculator/`)

**From the HTML design — reactive desktop version:**

Desktop: Two-column layout. Left column = inputs (white card), right column = results (navy dark card with gold savings display).

Mobile: Full-width stacked sections.

**State Management:**
```tsx
interface CalculatorState {
  city: string;           // Selected German city
  material: 'e-max' | 'zirconia';
  toothCount: number;     // 1-24 slider value
}

// Computed values (derived from state)
interface CalculatorResult {
  germanyPrice: number;   // count * cityUnitPrice
  tiranaPrice: number;    // count * materialPrice
  savings: number;        // germany - tirana
  savingsPercent: number; // percentage
}
```

**Input Controls:**
1. City dropdown — options with unit prices embedded (Berlin: 1200, Munich: 1500, etc.)
2. Material toggle buttons — "E-Max Porzellan" vs "Zirkonoxid" (pill/toggle style)
3. Tooth count slider — Range input `min=1 max=24` with gold thumb styling

**Result Display:**
- Large savings number in gold (`text-[64px] font-bold`)
- Pulse animation on value change
- Mini bar chart comparing Germany vs Tirana prices visually
- CTA button: "Erhalten Sie ein individuelles Angebot"

#### Trust Bar (`components/trust-bar/`)

Full-width navy strip with 4 trust signals in horizontal row:
1. ISO-Zertifiziert + icon (verified)
2. 4.9/5 Google Reviews + count
3. Direct flight info + airplane icon
4. -70% Kosten savings + price tag icon

Responsive: 4-col grid on desktop → stacked cards on mobile.

#### Material Cards (`components/material-card/`)

For the "Unsere Premium-Materialien" section:
- White card with light border, hover: border-primary transition
- Icon/icon area at top
- Material name (E-Max / Zirkonia / No-Prep)
- Description text
- Price range starting from X EUR
- "Details ansehen" link

#### Timeline (`components/timeline/`)

**Desktop:** Alternating zigzag layout — odd steps text-left/image-right, even steps image-left/text-right. Vertical gold line connecting steps down the center.

**Mobile:** Single column with step number badges, icons in circular containers, stacked vertically.

```tsx
interface TimelineStep {
  number: number;
  icon: string;         // Material Symbols name
  title: string;        // DE headline
  description: string[]; // Paragraph text(s)
  imageUrl?: string;    // Step illustration photo
}
```

#### FAQ Accordion (`components/faq/`)

Expandable question/answer sections:
- Question in bold, with chevron icon (rotates on expand)
- Answer revealed below when clicked
- Only one open at a time (exclusive accordion)
- Smooth height transition animation

### 3. Page-Level Components

Each page (`pages/*/`) is composed of the above components arranged per the design:

#### Home Page Composition

```tsx
<Header currentPage="home" />

{/* Hero Section */}
<section className="relative bg-surface py-section-padding">
  <div className="grid lg:grid-cols-2 gap-16 items-center">
    <HeroText headline={t('hero.headline')} subtext={t('hero.subtext')} />
    <BeforeAfterSlider before={...} after={...} aspectRatio="tall" />
  </div>
</section>

{/* Trust Bar */}
<TrustBar items={[...]} />

{/* Materials Section */}
<section className="py-section-padding">
  <SectionHeader title={t('materials.title')} subtitle={t('materials.subtitle')} />
  <div className="grid md:grid-cols-3 gap-8">
    {materials.map(m => <MaterialCard key={m.id} {...m} />)}
  </div>
</section>

{/* Before/After Gallery Strip */}
<section className="py-section-padding bg-surface-container-low">
  <GalleryStrip items={topCases.slice(0, 4)} />
</section>

{/* Doctor Highlight */}
<DoctorHighlight doctor={leadDoctor} />

{/* Testimonials Carousel */}
<TestimonialsCarousel testimonials={germanTestimonials} />

{/* Final CTA Section */}
<FinalCTA headline={t('cta.headline')} buttonText={t('cta.button')} />

<Footer />
```

#### E-Max Detail Page Composition

```tsx
<HeroSection title="E-Max Veneers: Das Goldstandard" image={...} ctaText="Jetzt anfragen" />
<BentoGrid features={[{icon:'lightbulb', title:'Lichtdurchlässigkeit'}, ...]} />
<ComparisonTable columns={['E-Max','Zirkonia','Komposit']} rows={...} />
<PricingBreakdown packages={[...]} />
<GalleryFilterable items={emaxCases} filter="e-max" />
<Timeline steps={treatmentSteps} />
<FaqSection questions={emxFaq} />
```

#### Price Calculator Page Composition

```tsx
<HeroSectionWithImage title={t('calc.hero.title')} image={dentalToolsPhoto} />
<PricingCalculator /> {/* The main interactive component */}
<InclusionsGrid items={[vipTransfer, hotels, treatmentPlan]} />
<DoctorQuote doctor={leadDoctor} quote={...} />
```

#### Patient Journey Page Composition

```tsx
<HeroWithPortrait title={t('journey.hero.title')} image={patientPhoto} />
<Timeline steps={journeySteps} variant="alternating" />
<TravelInfoGrid items={[flights, visa, transfer, accommodation]} />
<FaqSection questions={journeyFaq} />
<FinalCTA variant="gold" />
```

---

## Backend — Detailed API Plan

### Technology Choices

| Decision | Choice | Rationale |
|----------|--------|-----------|
| HTTP Router | `chi` (v5) | Radix tree router, ~1000 LOC, 1 external dep (`go-radix`), full `net/http` compat, middleware chains, path params (`{slug}`), 22k stars, actively maintained |
| JSON Encoding | stdlib `encoding/json` | No external dependency needed |
| Database | PostgreSQL 16 | Relational data, proper indexes, JSONB for flexible content fields |
| DB Driver | `jackc/pgx/v5` | High-performance Go PostgreSQL driver with connection pooling |
| Configuration | `os.LookupEnv()` with defaults | Docker Compose passes env vars; no .env library needed |
| Contact Form | stdlib `net/smtp` | Direct SMTP, no SendGrid/Mailgun dependency |
| CORS | Inline handler wrapper | Tiny stdlib wrapper, no `rs/cors` needed |
| Logging | stdlib `log/slog` | Structured logging, no extra dependency |
| DB Admin | pgAdmin 4 (Docker) | Local dev DB management |
| Migrations | SQL scripts (init.sql + versioned migrations) | Simple, no ORM overhead |

**Only two external Go dependencies: `jackc/pgx/v5` + `go-chi/chi/v5`** — everything else is stdlib. Chi brings one transitive dep (`armon/go-radix`).

### Data Models

#### Treatment

```go
type Treatment struct {
    ID           string            `json:"id"`                    // "e-max", "zirconia", etc.
    Slug         string            `json:"slug"`                 // URL path segment
    NameDE       string            `json:"name_de"`              // "E-Max Veneers"
    NameEN       string            `json:"name_en"`              // "E-Max Veneers"
    DescriptionDE string           `json:"description_de"`       // Markdown body text
    DescriptionEN string           `json:"description_en"`
    Material     string            `json:"material"`             // "lithium-disilicate", etc.
    DurationDays int               `json:"duration_days"`        // Treatment days needed
    LifespanYears int              `json:"lifespan_years"`       // Expected longevity
    Advantages   []TreatmentAdvantage `json:"advantages"`        // Bullet points
    Pricing      TreatmentPricing  `json:"pricing"`              // Albania + Germany prices
}

type TreatmentAdvantage struct {
    IconDE  string `json:"icon_de"`   // Material Symbols name
    TitleDE string `json:"title_de"`
    TitleEN string `json:"title_en"`
    DescDE  string `json:"desc_de"`
    DescEN  string `json:"desc_en"`
}

type TreatmentPricing struct {
    AlbaniaPerTooth int `json:"albania_per_tooth_eur"`
    GermanyAvgPerTooth int `json:"germany_avg_per_tooth_eur"`
    PackagePrices   []PackagePrice `json:"package_prices"`
}

type PackagePrice struct {
    NameDE string `json:"name_de"`     // "Einzelveneers", "Halbes Lächeln"
    NameEN string `json:"name_en"`
    Teeth  int    `json:"teeth_count"`
    Price  int    `json:"price_eur"`
}
```

#### Gallery Case (Before/After)

```go
type GalleryCase struct {
    ID            string   `json:"id"`
    TreatmentType string   `json:"treatment_type"` // "e-max", "zirconia", etc.
    BeforeImage   string   `json:"before_image"`   // Image URL/path
    AfterImage    string   `json:"after_image"`
    PatientFlag   string   `json:"patient_flag"`   // Country code, e.g. "DE"
    TeethCount    int      `json:"teeth_count"`
    DaysInTirana  int      `json:"days_in_tirana"`
    SavingsEUR    int      `json:"savings_eur"`
}
```

#### Pricing Config (used by calculator)

```go
type PricingConfig struct {
    GermanCities   []CityPricing    `json:"german_cities"`
    Materials      []MaterialPricing `json:"materials"`
}

type CityPricing struct {
    Name    string `json:"name"`     // "Berlin", "München"
    Price   int    `json:"price_eur_per_tooth"`  // Average German price
}

type MaterialPricing struct {
    Key     string `json:"key"`      // "e-max", "zirconia"
    NameDE  string `json:"name_de"`
    NameEN  string `json:"name_en"`
    Price   int    `json:"price_eur_per_tooth"`  // Tirana price
}
```

#### Consultation Request (contact form)

```go
type ConsultationRequest struct {
    FullName  string `json:"full_name"` // validated inline in handler
    Email     string `json:"email"`     // validated inline in handler
    Phone     string `json:"phone"`     // validated inline in handler
    City      string `json:"city"`
    Treatment string `json:"treatment"`
    Message   string `json:"message"`
}
```

### API Endpoints

| Method | Path | Description | Response |
|--------|------|-------------|----------|
| `GET` | `/api/health` | Health/readiness check | `{ "status": "ok" }` |
| `GET` | `/api/treatments` | List all treatments (i18n via `?lang=de`) | `Treatment[]` |
| `GET` | `/api/treatments/:slug` | Single treatment detail | `Treatment` |
| `GET` | `/api/gallery?type=e-max` | Gallery cases, filterable by type | `GalleryCase[]` |
| `GET` | `/api/pricing-config` | Calculator price matrices | `PricingConfig` |
| `POST` | `/api/consultation` | Submit contact form | `{ "id": "...", "message": "..." }` |
| `GET` | `/api/testimonials?lang=de` | Review/testimonial data | `Testimonial[]` |
| `GET` | `/api/doctors` | Doctor profiles | `Doctor[]` |

### Database Schema

```sql
-- Treatments (E-Max, Zirconia, Porcelain, etc.)
CREATE TABLE treatments (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug            TEXT NOT NULL UNIQUE,
    name_de         TEXT NOT NULL,
    name_en         TEXT NOT NULL,
    description_de  TEXT,
    description_en  TEXT,
    material        TEXT,
    duration_days   INT DEFAULT 0,
    lifespan_years  INT DEFAULT 0,
    advantages      JSONB DEFAULT '[]',
    pricing         JSONB,
    sort_order      INT DEFAULT 0,
    active          BOOLEAN DEFAULT TRUE,
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    updated_at      TIMESTAMPTZ DEFAULT NOW()
);

-- Before/After gallery cases
CREATE TABLE gallery_cases (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    treatment_type  TEXT NOT NULL,
    before_image    TEXT NOT NULL,
    after_image     TEXT NOT NULL,
    patient_flag    TEXT,
    teeth_count     INT DEFAULT 0,
    days_in_tirana  INT DEFAULT 0,
    savings_eur     INT DEFAULT 0,
    sort_order      INT DEFAULT 0,
    active          BOOLEAN DEFAULT TRUE,
    created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- Pricing: German city reference prices
CREATE TABLE pricing_cities (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    city_name       TEXT NOT NULL,
    price_per_tooth INT NOT NULL,
    sort_order      INT DEFAULT 0
);

-- Pricing: Albania (Tirana) material prices
CREATE TABLE pricing_materials (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    key             TEXT NOT NULL UNIQUE,
    name_de         TEXT NOT NULL,
    name_en         TEXT NOT NULL,
    price_per_tooth INT NOT NULL,
    sort_order      INT DEFAULT 0
);

-- Testimonials / reviews
CREATE TABLE testimonials (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    patient_name    TEXT,
    rating          INT CHECK (rating BETWEEN 1 AND 5),
    comment_de      TEXT,
    comment_en      TEXT,
    patient_flag    TEXT,
    treatment       TEXT,
    days_ago        INT,
    featured        BOOLEAN DEFAULT FALSE,
    active          BOOLEAN DEFAULT TRUE,
    created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- Doctor profiles
CREATE TABLE doctors (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    first_name      TEXT NOT NULL,
    last_name       TEXT NOT NULL,
    specialization  TEXT,
    biography_de    TEXT,
    biography_en    TEXT,
    image_url       TEXT,
    languages       JSONB DEFAULT '[]',
    credentials     JSONB DEFAULT '[]',
    is_lead         BOOLEAN DEFAULT FALSE,
    sort_order      INT DEFAULT 0,
    active          BOOLEAN DEFAULT TRUE,
    created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- Consultation requests (from contact form)
CREATE TABLE consultations (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name       TEXT NOT NULL,
    email           TEXT NOT NULL,
    phone           TEXT NOT NULL,
    city            TEXT,
    treatment       TEXT,
    message         TEXT,
    status          TEXT DEFAULT 'new',
    created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_gallery_treatment ON gallery_cases(treatment_type);
CREATE INDEX idx_testimonials_featured ON testimonials(featured) WHERE featured;
CREATE INDEX idx_consultations_status ON consultations(status);
```

### Repository Pattern

```go
// db/treatment_repo.go
package db

import (
    "context"
    "github.com/jackc/pgx/v5/pgxpool"
)

type TreatmentRepo struct {
    pool *pgxpool.Pool
}

func NewTreatmentRepo(pool *pgxpool.Pool) *TreatmentRepo {
    return &TreatmentRepo{pool: pool}
}

func (r *TreatmentRepo) List(ctx context.Context) ([]Treatment, error) {
    query := `SELECT id, slug, name_de, name_en, description_de, description_en,
                     material, duration_days, lifespan_years, advantages, pricing
              FROM treatments WHERE active = true ORDER BY sort_order`
    rows, err := r.pool.Query(ctx, query)
    // ... scan into []Treatment
}

func (r *TreatmentRepo) GetBySlug(ctx context.Context, slug string) (Treatment, error) {
    query := `SELECT ... FROM treatments WHERE slug = $1 AND active = true`
    // ... query row, scan into Treatment
}
```

```go
// Handler using repository
func ListTreatments(repo *TreatmentRepo) http.HandlerFunc {
    return func(w http.ResponseWriter, r *http.Request) {
        treatments, err := repo.List(r.Context())
        if err != nil {
            response.Error(w, http.StatusInternalServerError, err.Error())
            return
        }
        response.JSON(w, http.StatusOK, treatments)
    }
}

// Route setup with chi
func SetupRoutes(r *chi.Mux, pool *pgxpool.Pool) {
    r.Get("/api/health", health.Check)
    r.Get("/api/treatments", ListTreatments(NewTreatmentRepo(pool)))
    r.Get("/api/treatments/{slug}", GetTreatment(NewTreatmentRepo(pool)))
    r.Get("/api/gallery", ListGallery(NewGalleryRepo(pool)))
    r.Get("/api/pricing-config", GetPricingConfig(NewPricingRepo(pool)))
    r.Get("/api/testimonials", ListTestimonials(NewTestimonialRepo(pool)))
    r.Get("/api/doctors", ListDoctors(NewDoctorRepo(pool)))
    r.Post("/api/consultation", CreateConsultation(NewConsultationRepo(pool)))
}
```

This means:
- Content is managed in a real database — queryable, filterable, indexable
- Consultation requests persist and can be reviewed via pgAdmin or a future admin UI
- Schema evolves cleanly via versioned migration SQL files
- Connection pooling via `pgxpool` handles concurrent requests efficiently
- JSONB columns for flexible structured data (advantages, pricing packages, languages) without extra tables

---

## Frontend Technology Decisions

### Framework: React + Vite

| Decision | Choice | Why |
|----------|--------|-----|
| Meta-framework | Plain React Router v6 (no Next.js) | Simpler, less overhead for a ~15-page site. Can add SSR later if needed. |
| Build tool | Vite | Blazing fast dev server, instant HMR |
| Styling | Tailwind CSS 3.x with custom config | Matches existing design tokens exactly |
| Router | React Router v6 (HashRouter or BrowserRouter) | Client-side routing for SPA feel |
| State | React Context + useReducer | No Redux/Zustand needed — site has minimal global state (language, calculator values) |
| HTTP Client | `fetch` wrapper with TypeScript | No axios dependency needed |
| Icons | Material Symbols Outlined (Google Fonts) | Already used in all design files |
| Before/After Slider | Custom implementation (not third-party) | Matches exact design spec (gold divider, navy handle) |

### i18n Approach

Simple dictionary-based approach (no full i18n library needed for 2 languages):

```typescript
// lib/i18n.ts
interface Translations {
  de: Record<string, string>;
  en: Record<string, string>;
}

const translations: Translations = {
  de: { 'hero.headline': 'Hollywood-Lächeln ab 350 € — Gleiche Qualität, deutlich günstiger.', ... },
  en: { 'hero.headline': 'Hollywood Smile from €350 — Same Quality, Significantly Cheaper.', ... },
};

export function t(key: string): string {
  const lang = useLanguage(); // from context
  return translations[lang]?.[key] || key;
}
```

### Image Strategy

| Asset Type | Format | Optimization |
|------------|--------|-------------|
| Hero photos (before/after pairs) | WebP primary, JPEG fallback | Pre-compressed at build, CDN delivery |
| Doctor portraits | WebP, circular crop | 200px width sufficient |
| Before/after gallery images | WebP, lazy-loaded | Load on scroll intersection |
| Icons | Material Symbols (web font) | Zero image files needed |
| Logo SVG | Inline SVG in React component | No HTTP request |

---

## Development Timeline & Phases

### Phase 1: Foundation (Week 1-2) — ~2 weeks

**Backend:**
- Go project setup: module, directory structure, `go.mod` (deps: `pgx/v5` + `chi/v5`)
- PostgreSQL schema: `db/init.sql` with all tables and indexes
- Seed data: `db/seed.sql` with placeholder treatments, gallery cases, pricing, doctors, testimonials
- pgxpool connection setup in `internal/db/db.go`
- Repository layer: `treatment_repo.go`, `gallery_repo.go`, `pricing_repo.go`, `testimonial_repo.go`, `consultation_repo.go`
- Chi router with health endpoint working
- API endpoints: treatments list/detail, gallery, pricing-config, doctors (GET only)
- Dockerfile for Go backend
- Docker Compose: backend + PostgreSQL + pgAdmin services

**Frontend:**
- Vite + React + TypeScript project setup
- Tailwind CSS config matching DESIGN.md tokens exactly
- Google Fonts integration (Hanken Grotesk + Inter)
- Material Symbols icon font setup
- Page router scaffold with all routes defined
- Global components: Header (desktop+mobile), Footer
- Style foundations: global.css, component overrides

**Deliverables:**
- Blank pages that route correctly
- Working header/footer on all pages
- Health endpoint returns `{"status":"ok"}` (includes DB connectivity check)
- Treatments endpoint returns JSON array from PostgreSQL
- Docker Compose spins up backend + Postgres + pgAdmin

### Phase 2: Core Pages (Week 3-4) — ~2 weeks

**Frontend:**
- Home page: Hero section, before/after slider implementation, trust bar, material cards
- Before/After Slider component (full interaction: mouse drag + touch)
- E-Max detail page: Product hero, advantages bento grid, comparison table
- Pricing table components
- Treatment overview page with card grid

**Backend:**
- Consultation form endpoint (POST /api/consultation) with validation
- Email notification setup for new consultation requests
- Testimonials + doctor profile endpoints

**Deliverables:**
- Home page looks 90% like design reference on desktop + mobile
- E-Max detail page complete
- Before/after slider fully interactive
- Treatment listing functional

### Phase 3: Interactive Features (Week 5) — ~1 week

**Frontend:**
- Price calculator with real-time reactive updates
  - City dropdown, material toggle, tooth count slider
  - Animated savings display with pulse effect
  - Germany vs Tirana comparison bar chart
- Patient journey timeline with alternating zigzag layout
- FAQ accordion components
- Gallery page with filterable before/after grid

**Backend:**
- Gallery API with type filtering and pagination
- Pricing config endpoint (cities, materials)

**Deliverables:**
- Calculator works end-to-end: select inputs → see animated savings
- Journey page matches desktop + mobile designs
- Gallery with filtering functional

### Phase 4: Polish & Mobile (Week 6) — ~1 week

**Frontend:**
- Remaining pages: Contact form, Reviews/Google embed, Travel Guide, About/Doctors
- Mobile responsive audit on every page
- WhatsApp floating button on all pages
- Smooth scroll behavior, page transitions
- Image lazy loading + intersection observer for before/after images
- Performance optimization: code splitting by route, image compression

**Backend:**
- Contact form validation hardening
- Rate limiting on consultation endpoint (prevent spam)
- Error handling polish across all endpoints

**Deliverables:**
- All ~12 pages responsive and matching designs
- Contact form submits → email notification sent
- Mobile audit complete (tested on Chrome DevTools + real device)

### Phase 5: Content & SEO (Week 7) — ~1 week

**Frontend:**
- Final German content integration (all copy from spec)
- English translations for all pages
- SEO: meta tags, Open Graph, schema.org structured data (Dentist, MedicalBusiness, FAQPage, Review)
- Sitemap generation
- Robots.txt configuration
- Google Analytics 4 + Hotjar/Clarity integration
- Cookie consent banner (GDPR compliance)

**Backend:**
- Final content population via seed SQL scripts
- Image assets placed in nginx static volume
- Database backup script (pg_dump cron job)
- Load testing on API endpoints

**Deliverables:**
- Full bilingual site with real content
- Schema markup validated via Google Rich Results test
- Analytics tracking verified
- GDPR compliant

### Phase 6: Launch (Week 8) — ~1 week

**Deployment:**
- Frontend: Build for production → deploy to Vercel/Netlify
- Backend: Docker image → deploy to cloud provider (or same host)
- Domain DNS configuration (custom domain + www redirect)
- SSL/TLS setup (handled by hosting provider)

**Pre-Launch Checklist:**
- [ ] All pages test on Chrome, Firefox, Safari desktop
- [ ] All pages test on iPhone and Android
- [ ] Before/after slider works on touch devices
- [ ] Calculator calculates correctly for all city/material combos
- [ ] Contact form sends email successfully
- [ ] Google Business Profile claimed + reviews linked
- [ ] Search console submitted with sitemap
- [ ] PageSpeed score > 80 mobile, > 90 desktop

---

## Build & Deploy Pipeline

### Local Development

```bash
# Full stack via Docker Compose
docker compose up --build

# Or backend only (for backend dev)
cd backend && go run ./cmd/server

# Frontend dev server (separate terminal)
cd frontend && npm install && npm run dev
```

### Docker Compose (Local Dev)

```yaml
version: '3.8'
services:
  frontend:
    image: nginx:latest
    container_name: dt_frontend
    volumes:
      - ./frontend:/usr/share/nginx/html:ro
      - ./nginx/default.conf:/etc/nginx/conf.d/default.conf:ro
    ports:
      - "80:80"
    depends_on:
      - backend
    restart: unless-stopped

  backend:
    build: ./backend
    container_name: dt_backend
    environment:
      - DATABASE_URL=postgres://dt:dentaltourism@db:5432/dt?sslmode=disable
      - PORT=8080
      - SMTP_HOST=smtp.gmail.com
      - NOTIFICATION_EMAIL=info@veneerclinictirana.com
    ports:
      - "8080:8080"
    depends_on:
      - db
    restart: unless-stopped

  db:
    build: ./db
    container_name: dt_db
    environment:
      POSTGRES_USER: dt
      POSTGRES_PASSWORD: dentaltourism
      POSTGRES_DB: dt
    volumes:
      - ./db/init.sql:/docker-entrypoint-initdb.d/init.sql
      - ./db/seed.sql:/docker-entrypoint-initdb.d/seed.sql
      - db_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"
    restart: unless-stopped

  pgadmin:
    image: dpage/pgadmin4:latest
    container_name: dt_pgadmin
    environment:
      PGADMIN_DEFAULT_EMAIL: admin@admin.com
      PGADMIN_DEFAULT_PASSWORD: admin
    volumes:
      - pgadmin_data:/var/lib/pgadmin
    ports:
      - "8888:80"
    depends_on:
      - db
    restart: unless-stopped

volumes:
  db_data:
  pgadmin_data:
```

### Production Deployment — Bare Metal

All services run on a single bare metal server (e.g. Hetzner, OVH, DigitalOcean Droplet) via Docker Compose:

```
┌───────────────────────────────────────────────────┐
│              Bare Metal Server                    │
│                                                   │
│  ┌─────────────┐  ┌────────────┐  ┌───────────┐  │
│  │   nginx     │→│  Go API    │→│  Postgres │  │
│  │  :80 / :443 │  │  :8080     │  │  :5432    │  │
│  │  (frontend) │  │  (backend) │  │  (DB)     │  │
│  └─────────────┘  └────────────┘  └───────────┘  │
│                                                   │
│  SSL: Let's Encrypt (certbot / nginx proxy)       │
│  DNS: CloudFlare (free tier, points to server IP) │
│  Images: served via nginx from /static/ volume    │
└───────────────────────────────────────────────────┘
```

| Service | Target | Method |
|---------|--------|--------|
| Frontend | nginx on bare metal | Vite build → static files served by nginx |
| Backend | Go container on bare metal | `docker compose up -d` |
| Database | PostgreSQL container on bare metal | Persistent volume on host |
| SSL/TLS | Let's Encrypt (certbot) | Auto-renewal via cron or nginx certbot companion |
| DNS | CloudFlare (free tier) | Custom domain → server IP, SSL auto-managed |
| Images/Assets | nginx static files | Pre-compressed WebP in `/usr/share/nginx/html/images/` |

### Deployment Process

```bash
# SSH into bare metal server
ssh root@your-server-ip

# Pull latest code
cd /opt/veneer-clinic
git pull origin main

# Rebuild and restart
docker compose down
docker compose up -d --build

# nginx serves the frontend build output
# Go backend handles /api/* routes
# PostgreSQL persists all data
```

### CI/CD (Optional Phase 2+)

```yaml
# .github/workflows/deploy.yml (simplified)
on:
  push:
    branches: [main]

jobs:
  backend-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-go@v5
        with: { go-version: '1.23' }
      - run: cd backend && go build ./...
      - run: cd backend && go test ./...

  frontend-build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '22' }
      - run: cd frontend && npm ci
      - run: cd frontend && npm run build

  deploy:
    needs: [backend-test, frontend-build]
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Deploy to bare metal
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.SERVER_HOST }}
          username: root
          key: ${{ secrets.SSH_PRIVATE_KEY }}
          script: |
            cd /opt/veneer-clinic
            git pull origin main
            docker compose down
            docker compose up -d --build
```

### Backup Strategy

```bash
# PostgreSQL backup (run via cron daily)
pg_dump -U dt dt > /backups/dt_$(date +%Y%m%d).sql

# Offsite backup to S3 or similar
aws s3 cp /backups/dt_*.sql s3://veneer-clinic-backups/db/
```

### Monitoring

- **Uptime:** UptimeRobot (free) pinging the health endpoint
- **Logs:** `docker compose logs -f` or redirect to a log aggregator
- **Disk:** `df -h` alert via cron if >80% usage

### CI/CD (Optional Phase 2+)

```yaml
# .github/workflows/deploy.yml (simplified)
on:
  push:
    branches: [main]

jobs:
  backend-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-go@v5
        with: { go-version: '1.23' }
      - run: cd backend && go build ./...
      - run: cd backend && go test ./...

  frontend-build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '22' }
      - run: cd frontend && npm ci
      - run: cd frontend && npm run build
```

---

## File-by-File Implementation Priority

### Sprint 1 (Foundation) — Create these files first:

| # | Path | Purpose | Lines ~ |
|---|------|---------|---------|
| 1 | `backend/go.mod` | Module definition, deps: `pgx/v5` + `chi/v5` | 10 |
| 2 | `backend/cmd/server/main.go` | Server entry, DB pool, router setup | 80 |
| 3 | `backend/internal/db/db.go` | pgxpool connection setup | 40 |
| 4 | `backend/internal/db/treatment_repo.go` | Treatment SQL queries | 60 |
| 5 | `backend/internal/api/routes.go` | Route registration | 40 |
| 6 | `backend/internal/models/*.go` | All data structs | ~150 total |
| 7 | `db/init.sql` | Schema (tables + indexes) | 120 |
| 8 | `db/seed.sql` | Initial content data | 200 |
| 9 | `backend/internal/api/health.go` | Health check handler | 15 |
| 10 | `frontend/package.json` | Dependencies, scripts | 30 |
| 11 | `frontend/tailwind.config.js` | Color tokens, fonts from DESIGN.md | 100 |
| 12 | `frontend/src/styles/globals.css` | Base styles, font imports | 30 |
| 13 | `frontend/src/components/header/Header.tsx` | Desktop + mobile nav | 80 |
| 14 | `frontend/src/components/footer/Footer.tsx` | Footer grid | 60 |

### Sprint 2 (Core Pages) — Key files:

| # | Path | Purpose | Lines ~ |
|---|------|---------|---------|
| 13 | `frontend/src/components/before-after/BeforeAfterSlider.tsx` | Interactive slider | 120 |
| 14 | `frontend/src/pages/home/HomePage.tsx` | Homepage composition | 60 |
| 15 | `frontend/src/components/material-card/MaterialCard.tsx` | Material display card | 50 |
| 16 | `frontend/src/components/trust-bar/TrustBar.tsx` | 4-column trust signals | 40 |
| 17 | `frontend/src/pages/emax/EmaxPage.tsx` | E-Max detail page | 80 |
| 18 | `backend/internal/api/treatment.go` | Treatment GET handlers | 50 |
| 19 | `backend/internal/api/consultation.go` | Contact form POST handler | 60 |
| 20 | `backend/pkg/email.go` | Email sending utility | 40 |

### Sprint 3 (Interactive Features) — Key files:

| # | Path | Purpose | Lines ~ |
|---|------|---------|---------|
| 21 | `frontend/src/hooks/use-calculator.ts` | Calculator reactive state | 60 |
| 22 | `frontend/src/components/calculator/Calculator.tsx` | Full calculator UI | 150 |
| 23 | `frontend/src/pages/price-compare/PriceComparePage.tsx` | Calculator page | 40 |
| 24 | `frontend/src/components/timeline/Timeline.tsx` | Alternating zigzag steps | 80 |
| 25 | `frontend/src/components/timeline/TimelineStep.tsx` | Individual step card | 40 |
| 26 | `frontend/src/pages/journey/JourneyPage.tsx` | Patient journey page | 50 |
| 27 | `frontend/src/components/faq/FaqAccordion.tsx` | FAQ expandable sections | 50 |
| 28 | `frontend/src/lib/pricing.ts` | Price matrices + calculation logic | 80 |

### Sprint 4-6 (Remaining) — ~30 more files:

Contact form, reviews page, travel guide, about/doctors, gallery with filters, i18n hooks, SEO meta tags, cookie consent, image optimization utilities.

---

## Estimated Total Lines of Code

| Layer | Files | Lines ~ |
|-------|-------|---------|
| Frontend components | 25-30 | 3,500 |
| Frontend pages | 15 | 1,200 |
| Frontend hooks/lib/types | 10 | 800 |
| Backend handlers | 7 | 400 |
| Backend models | 4 | 150 |
| Backend repos + pkg | 8 | 500 |
| Config files | 10 | 200 |
| DB schema + seed SQL | 2 | 350 |
| **Total** | **~80 files** | **~7,900 lines** |

A focused, contained project — well within a single developer's capability in 6-8 weeks.
