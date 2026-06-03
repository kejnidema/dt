# Step-by-Step Development Plan — Veneer Clinic Tirana Website

## Current State Assessment

**What exists:**
- **Research & Planning** (complete): Market research, competitor analysis, feature prioritization
- **Design System** (complete): "Elite Clinical Minimalism" — color tokens, typography, spacing, component specs
- **Design References** (complete): 10 HTML mockups with screenshots (home, E-Max, calculator, journey, logo)
- **Detailed Specs** (complete): Full page-by-page specifications with content requirements
- **Implementation Plan** (complete): Architecture, project structure, phased timeline
- **Backend** (v0.1 — generic multi-clinic dental tourism): Go + PostgreSQL + gorilla/mux, basic CRUD handlers for clinics/doctors/services/appointments/testimonials
- **Frontend** (v0.1 — basic): Single `index.html` with vanilla CSS, generic dental tourism content, no framework
- **Infra** (v0.1): Docker Compose with nginx + Go backend + PostgreSQL + pgAdmin

**What needs to change:** The current codebase is a generic multi-clinic dental tourism platform. The new direction is a **single-clinic veneer-focused** site targeting German patients. This requires a complete redesign and significant architectural shifts.

---

## Phase 0: Project Reset & Architecture Alignment

### 0.1 — Decision: Backend Architecture Pivot
- **Current:** PostgreSQL-backed multi-clinic platform
- **New plan:** PostgreSQL — single clinic, veneer-focused schema
- **Action:** Refactor existing schema to be veneer-focused (remove multi-clinic tables, add treatments/gallery/pricing/consultations)
- PostgreSQL stays — data layer switches from generic multi-clinic to single-clinic veneer content
- Consultation requests persist in DB and can be reviewed via pgAdmin or a future admin UI

### 0.2 — Decision: Frontend Architecture Pivot
- **Current:** Vanilla HTML/CSS served by nginx
- **New plan:** React + Vite + Tailwind CSS with React Router
- **Action:** Scaffold new React frontend, keep nginx as reverse proxy or switch to Vite dev server locally

### 0.3 — Git Housekeeping
- Tag current state: `git tag v0.1-legacy`
- Create `main` branch for the new implementation
- Keep `agentic` branch as working branch

---

## Phase 1: Foundation (Sprints 1.1-1.3)

### Sprint 1.1 — Backend Reset

- [ ] **1.1.1** Create new `backend/` directory structure per implementation plan:
  - `cmd/server/main.go`
  - `internal/api/routes.go`
  - `internal/models/` (treatment, gallery, pricing, consultation)
  - `internal/db/` (pgxpool + repository pattern)
  - `pkg/` (response helpers, email)

- [ ] **1.1.2** Set up `go.mod` — only 2 external deps: `jackc/pgx/v5` + `go-chi/chi/v5`. No `godotenv` (use Docker env vars), no `gorilla/mux`, no `rs/cors`. Chi brings 1 transitive dep (`armon/go-radix`)

- [ ] **1.1.3** Implement data models in Go:
  - `Treatment` struct (bilingual DE/EN fields)
  - `GalleryCase` struct (before/after metadata)
  - `PricingConfig` struct (German city prices + Albania prices)
  - `ConsultationRequest` struct (contact form DTO)
  - `Doctor` struct (profiles)
  - `Testimonial` struct (reviews)

- [ ] **1.1.4** Write PostgreSQL schema (`db/init.sql`):
  - `treatments` table (slug, bilingual names/descriptions, JSONB advantages/pricing)
  - `gallery_cases` table (treatment_type, before/after images, metadata)
  - `pricing_cities` table (German city reference prices)
  - `pricing_materials` table (Tirana material prices)
  - `testimonials` table (bilingual comments, ratings, featured flag)
  - `doctors` table (profiles, JSONB languages/credentials)
  - `consultations` table (contact form submissions)
  - Indexes on treatment_type, featured, status

- [ ] **1.1.5** Write seed data (`db/seed.sql`):
  - Treatments: E-Max, Zirconia, Porcelain, Komposit
  - Gallery: 8+ before/after cases with placeholder images
  - Pricing: German cities + Tirana prices
  - Testimonials: placeholder reviews
  - Doctors: doctor profiles

- [ ] **1.1.6** Implement pgxpool connection setup (`internal/db/db.go`)

- [ ] **1.1.7** Implement repository layer:
  - `treatment_repo.go` (List, GetBySlug)
  - `gallery_repo.go` (List, FilterByTreatment)
  - `pricing_repo.go` (GetCities, GetMaterials)
  - `testimonial_repo.go` (List, Featured)
  - `consultation_repo.go` (Create, ListByStatus)

- [ ] **1.1.6** Implement API endpoints:
  - `GET /api/health` → health check
  - `GET /api/treatments?lang=de` → treatment list
  - `GET /api/treatments/:slug` → single treatment
  - `GET /api/gallery?type=e-max` → gallery cases
  - `GET /api/pricing-config` → calculator price matrices
  - `GET /api/testimonials?lang=de` → reviews
  - `GET /api/doctors` → doctor profiles
  - `POST /api/consultation` → contact form submission

- [ ] **1.1.7** Update `Dockerfile` for new backend structure

- [ ] **1.1.8** Update `docker-compose.yaml`:
  - Keep PostgreSQL + pgAdmin services
  - Keep nginx + backend services
  - Add proper volumes for DB persistence

### Sprint 1.2 — Frontend Scaffold

- [ ] **1.2.1** Scaffold React + Vite + TypeScript project in `frontend/`

- [ ] **1.2.2** Install dependencies:
  - `react`, `react-dom`, `react-router-dom`
  - `tailwindcss`, `postcss`, `autoprefixer`
  - `@types/react`, `@types/react-dom`

- [ ] **1.2.3** Configure Tailwind CSS with design system tokens:
  - Colors: primary `#000613`, secondary `#735c00`, secondary-container `#fed65b`, etc.
  - Fonts: Hanken Grotesk (headings), Inter (body)
  - Spacing: 8px rhythm, 1200px max-width
  - Border radius: soft rounding (4px buttons, 12px cards)

- [ ] **1.2.4** Set up Google Fonts imports (Hanken Grotesk + Inter)

- [ ] **1.2.5** Set up Material Symbols icon font

- [ ] **1.2.6** Configure React Router with all planned routes:
  - `/` → Home
  - `/veneers` → Veneers Hub
  - `/veneers/emax` → E-Max Detail
  - `/veneers/porcelain` → Porcelain Detail
  - `/veneers/zirconia` → Zirconia Detail
  - `/veneers/gallery` → Before/After Gallery
  - `/veneers/cost-comparison` → Price Calculator
  - `/treatments` → Secondary Treatments
  - `/journey` → Patient Journey
  - `/journey/travel` → Travel Guide
  - `/about/doctors` → Doctor Profiles
  - `/reviews` → Reviews & Testimonials
  - `/contact` → Contact Page

- [ ] **1.2.7** Set up i18n foundation:
  - `lib/i18n.ts` with DE/EN translation dictionaries
  - `use-i18n.ts` hook with language context
  - Language toggle component

- [ ] **1.2.8** Set up API client:
  - `lib/api.ts` fetch wrapper with TypeScript types
  - Vite proxy config for `/api` → backend

- [ ] **1.2.9** Update nginx config to serve React SPA + proxy API

### Sprint 1.3 — Global Components

- [ ] **1.3.1** Header component (`components/header/Header.tsx`):
  - Desktop: sticky top bar, logo, nav links, "Book Now" CTA
  - Mobile: hamburger menu with slide-in drawer
  - Active link highlighting
  - Language toggle button

- [ ] **1.3.2** Footer component (`components/footer/Footer.tsx`):
  - Desktop: 4-column navy grid
  - Mobile: stacked single column
  - Links, contact info, social icons

- [ ] **1.3.3** WhatsApp floating button (`components/whatsapp-btn/WhatsAppButton.tsx`):
  - Fixed bottom-right, green circle, always visible

- [ ] **1.3.4** Trust Bar component (`components/trust-bar/TrustBar.tsx`):
  - 4-column navy strip with trust signals
  - Responsive: 4-col → stacked on mobile

- [ ] **1.3.5** Section Header component (`components/section-header/SectionHeader.tsx`):
  - Eyebrow label + headline + subtitle pattern

- [ ] **1.3.6** CTA Button component variants:
  - Primary (navy bg, white text)
  - Secondary (gold border, gold text)
  - Gold/variant styles

---

## Phase 2: Core Pages (Sprints 2.1-2.3)

### Sprint 2.1 — Home Page

- [ ] **2.1.1** Hero section:
  - Split layout (text left, before/after slider right)
  - Badge "PREMIUM ZAHNÄSTHETIK"
  - H1 headline with i18n
  - Dual CTA buttons

- [ ] **2.1.2** Before/After Slider component (`components/before-after/BeforeAfterSlider.tsx`):
  - Mouse drag + touch support
  - Gold divider line with circular navy handle
  - "VORHER" / "NACHHER" corner badges
  - Configurable aspect ratios (tall 4:5, square, wide 16:9)

- [ ] **2.1.3** Material Cards section:
  - 3 cards: E-Max, Zirkonoxid, Komposit
  - Icon, description, price range, "Details ansehen" link
  - Hover border transition

- [ ] **2.1.4** Before/After Gallery Strip:
  - Horizontal scroll or grid of 4 top cases
  - Mini before/after sliders

- [ ] **2.1.5** Doctor Highlight section:
  - Lead dentist card with photo, credentials, languages

- [ ] **2.1.6** Testimonials Carousel:
  - Horizontal scroll with German patient reviews
  - Star ratings, flags, quotes

- [ ] **2.1.7** Final CTA section:
  - Summary value prop + "Book Free Consultation" button

- [ ] **2.1.8** Mobile responsive audit for home page

### Sprint 2.2 — Veneer Detail Pages

- [ ] **2.2.1** Veneers Hub page (`/veneers`):
  - "What are veneers?" explanation
  - Comparison table (E-Max vs Porcelain vs Zirconia)
  - "Who is it for?" section
  - 3-step process visualization
  - FAQ accordion

- [ ] **2.2.2** E-Max Detail page (`/veneers/emax`):
  - Product hero with "Das Goldstandard" badge
  - Advantages bento grid (4-column with Material Symbols icons)
  - Comparison table (E-Max vs Zirkonia vs Komposit)
  - Pricing breakdown table (packages with Germany comparison)
  - Before/after gallery filtered to E-Max cases
  - Treatment timeline
  - FAQ section

- [ ] **2.2.3** Porcelain Detail page (`/veneers/porcelain`):
  - Same structure as E-Max, porcelain-specific content

- [ ] **2.2.4** Zirconia Detail page (`/veneers/zirconia`):
  - Same structure as E-Max, zirconia-specific content

- [ ] **2.2.5** Comparison Table component (`components/pricing-table/PricingTable.tsx`):
  - Reusable for all veneer type pages
  - Germany vs Tirana columns
  - Savings percentage highlighting

- [ ] **2.2.6** Material Card component (`components/material-card/MaterialCard.tsx`)

### Sprint 2.3 — Gallery & Social Proof

- [ ] **2.3.1** Gallery page (`/veneers/gallery`):
  - Filter system (by treatment type, by issue)
  - Grid of before/after slider cards
  - Case metadata (flag, teeth count, days, savings)
  - Progressive loading (6 + 6 on click)

- [ ] **2.3.2** Reviews page (`/reviews`):
  - Google Reviews embed placeholder
  - Written testimonials grid
  - Video testimonial placeholders
  - Rating summary section

- [ ] **2.3.3** Doctor profiles page (`/about/doctors`):
  - Doctor cards with photos, credentials, languages
  - Individual profile expand/collapse

---

## Phase 3: Interactive Features (Sprint 3)

### Sprint 3.1 — Price Calculator

- [ ] **3.1.1** Calculator hook (`hooks/use-calculator.ts`):
  - Reactive state: city, material, tooth count
  - Computed: Germany price, Tirana price, savings, savings %

- [ ] **3.1.2** Calculator component (`components/calculator/Calculator.tsx`):
  - City dropdown with German cities
  - Material toggle (E-Max vs Zirkonoxid pill buttons)
  - Tooth count range slider (1-24) with gold thumb
  - Real-time result updates

- [ ] **3.1.3** Result display:
  - Large gold savings number (64px) with pulse animation
  - Mini bar chart comparing Germany vs Tirana
  - "All-inclusive package includes" checklist
  - CTA button

- [ ] **3.1.4** Price Comparison page (`/veneers/cost-comparison`):
  - Hero section with intro text
  - Calculator component
  - Inclusions grid (VIP transfer, hotels, treatment plan)
  - Doctor quote section

### Sprint 3.2 — Patient Journey

- [ ] **3.2.1** Timeline component (`components/timeline/Timeline.tsx`):
  - Desktop: alternating zigzag (text/image sides alternate)
  - Mobile: single column with step badges
  - Material Symbols icons in circular containers
  - Gold connecting line

- [ ] **3.2.2** Journey page (`/journey`):
  - Hero with patient portrait
  - 8-step timeline
  - Travel info grid (4 columns: flights, visa, transfer, accommodation)
  - FAQ accordion

- [ ] **3.2.3** Travel Guide page (`/journey/travel`):
  - Flights from Germany section
  - Visa requirements
  - Airport transfer details
  - Accommodation recommendations
  - Currency & payments
  - Weather & best time to visit
  - Things to do in Tirana

### Sprint 3.3 — FAQ & Contact

- [ ] **3.3.1** FAQ Accordion component (`components/faq/FaqAccordion.tsx`):
  - Exclusive accordion (one open at a time)
  - Smooth height animation
  - Chevron rotation on expand

- [ ] **3.3.2** Contact Form component (`components/contact-form/ContactForm.tsx`):
  - Fields: name, email, phone, city, treatment selector, message
  - Validation
  - Submit → POST /api/consultation
  - Success/error states

- [ ] **3.3.3** Contact page (`/contact`):
  - Contact form
  - Map placeholder (clinic location)
  - Phone, email, office hours
  - WhatsApp quick link

---

## Phase 4: Polish & SEO (Sprint 4)

### Sprint 4.1 — Content & i18n

- [ ] **4.1.1** Write all German copy for every page
- [ ] **4.1.2** Write all English translations
- [ ] **4.1.3** Populate JSON content files with real data
- [ ] **4.1.4** Add real before/after images (replace placeholders)
- [ ] **4.1.5** Add real doctor photos and profiles

### Sprint 4.2 — SEO & Performance

- [ ] **4.2.1** Meta tags per page (title, description, OG tags)
- [ ] **4.2.2** Schema.org structured data:
  - MedicalBusiness on homepage
  - Dentist on doctor pages
  - Product on veneer pricing pages
  - FAQPage on FAQ sections
  - Review/AggregateRating on reviews page

- [ ] **4.2.3** Sitemap generation
- [ ] **4.2.4** Robots.txt
- [ ] **4.2.5** Google Analytics 4 integration
- [ ] **4.2.6** Cookie consent banner (GDPR)
- [ ] **4.2.7** Image optimization (WebP, lazy loading, intersection observer)
- [ ] **4.2.8** Code splitting by route

### Sprint 4.3 — Mobile QA

- [ ] **4.3.1** Test all pages on mobile (320px, 375px, 414px)
- [ ] **4.3.2** Test before/after slider on touch devices
- [ ] **4.3.3** Test calculator on mobile
- [ ] **4.3.4** Test hamburger menu interactions
- [ ] **4.3.5** Test contact form on mobile
- [ ] **4.3.6** Performance audit (Lighthouse > 80 mobile, > 90 desktop)

---

## Phase 5: Launch (Sprint 5)

### Sprint 5.1 — Deployment (Bare Metal)

- [ ] **5.1.1** Production build configuration (Vite production build)
- [ ] **5.1.2** Docker Compose production setup:
  - nginx serving frontend static build + proxying `/api/*` to Go backend
  - Go backend container with pgxpool to PostgreSQL
  - PostgreSQL with persistent volume
  - Remove pgAdmin from production compose (dev only)
- [ ] **5.1.3** SSL/TLS via Let's Encrypt (certbot or nginx certbot companion)
- [ ] **5.1.4** Domain DNS configuration (CloudFlare free tier → server IP)
- [ ] **5.1.5** Database backup script (pg_dump cron job)
- [ ] **5.1.6** Pre-launch checklist (cross-browser, cross-device)

### Sprint 5.2 — Post-Launch

- [ ] **5.2.1** Monitor analytics and conversion funnel
- [ ] **5.2.2** A/B test hero images
- [ ] **5.2.3** Set up Google Ads campaigns (German audience)
- [ ] **5.2.4** Google Business Profile setup

---

## Estimated Effort

| Phase | Sprints | Estimated Time |
|-------|---------|---------------|
| Phase 0: Reset | 0.5 | 1-2 days |
| Phase 1: Foundation | 3 | 1-2 weeks |
| Phase 2: Core Pages | 3 | 2 weeks |
| Phase 3: Interactive | 3 | 1 week |
| Phase 4: Polish | 3 | 1 week |
| Phase 5: Launch | 2 | 3-5 days |
| **Total** | **14 sprints** | **~5-7 weeks** |

---

## Where to Start?

The logical starting point is **Phase 0** (project reset decisions), then **Phase 1** (foundation).
