# Dental Tourism Website Plan — Single Clinic

## Research Methodology

Scraped and analyzed 9 real dental tourism clinic websites across 4 major destinations using Firecrawl:

| Site | Country | Size |
|------|---------|------|
| dentakay.com | Turkey | 43KB |
| aegdentalclinic.com | Turkey | 4KB |
| dentaltourbudapest.com | Hungary | 17KB |
| dentalclinichungary.com | Hungary | 13KB |
| molarcity.com / dentalclinicmexico.com | Mexico | 17KB |
| tijuanadentist.co | Mexico | 13KB |
| smiletogethertijuana.com | Mexico | 13KB |
| bangkokdentalcenter.com (BIDC) | Thailand | 59KB |
| suvandental.com | Thailand | 8KB |

---

## Feature Analysis Summary

Features found in >= 50% of competitor sites:

| Feature | Coverage | Priority |
|---------|----------|----------|
| Cost comparison vs home country | 89% | MUST HAVE |
| Treatment packages (All-on-X) | 89% | MUST HAVE |
| Treatment plans/guides | 89% | MUST HAVE |
| Patient testimonials/reviews | 78% | MUST HAVE |
| Accreditations/certifications | 67% | MUST HAVE |
| Technology/equipment showcase | 67% | MUST HAVE |
| Online appointment booking | 56% | MUST HAVE |
| Before/after gallery | 56% | MUST HAVE |
| FAQ section | 56% | MUST HAVE |
| Free consultation offer | 56% | MUST HAVE |
| Patient count statistics | 56% | HIGH |
| Payment plans/financing | 56% | HIGH |
| Video content/tours | 56% | HIGH |
| Airport transfer service | 44% | HIGH |
| Hotel/accommodation info | 33% | MEDIUM |
| WhatsApp chat | 33% | HIGH |
| Dental tourism blog | 33% | MEDIUM |

---

## Complete Feature List (56 features across 9 categories)

### 1. CORE TRUST & CREDIBILITY (6 features)
- Doctor profiles with credentials, photos, specialties
- Accreditations & certifications (JCI, ISO, FDIA)
- Awards & industry recognition badges
- Warranty/guarantee on treatments
- Infection control & sterilization protocols section
- Facility/corporate history and founding story

### 2. TREATMENT SHOWCASE (6 features)
- Treatment categories menu (implants, crowns, veneers, whitening, orthodontics, etc.)
- Detailed treatment pages with step-by-step process
- All-on-4/All-on-X dedicated packages page
- Before/after gallery with filterable case studies
- 3D smile preview/simulation tool (if possible)
- Treatment duration and recovery time info per procedure

### 3. PRICING & FINANCIALS (6 features)
- Transparent pricing table for each treatment
- Cost comparison vs home country (US/UK/Europe) with savings percentage
- All-inclusive treatment packages (procedure + accommodation + transfers)
- Payment plans / installment options
- Multiple currency display
- Financing partnerships info

### 4. PATIENT JOURNEY & LOGISTICS (7 features)
- Step-by-step patient journey guide (from inquiry to return home)
- Airport transfer arrangements (private car service)
- Hotel/accommodation recommendations or packages
- Distance/directions from airport with travel time
- Visa/travel guidance for international patients
- Multi-day trip itinerary suggestions
- Local tourist attraction recommendations during stay

### 5. COMMUNICATION & BOOKING (7 features)
- WhatsApp chat button (floating, always visible)
- Online appointment booking system with calendar
- Free initial remote consultation (video call or phone)
- Live chat widget for instant support
- Emergency/after-hours contact number
- Multilingual interface (language selector dropdown)
- Contact form with treatment type selector

### 6. SOCIAL PROOF & CONTENT (8 features)
- Patient testimonials with photos and nationality flags
- Video testimonials / patient journey videos
- Google Reviews embed with rating score
- Patient count statistics (X patients, Y countries served)
- YouTube channel link (patient stories, clinic tours)
- Blog with dental tourism guides, treatment articles
- Social media feeds integration (Instagram, Facebook)
- Referral program for returning patients

### 7. TECHNOLOGY & FACILITY (5 features)
- Virtual tour / 360-degree clinic photos
- Equipment showcase (CBCT, CAD/CAM, 3D scanner, Invisalign)
- Digital smile design technology section
- Same-day crown/implant capability highlight
- Advanced imaging & diagnostic tools

### 8. POST-TREATMENT CARE (5 features)
- Aftercare instructions per treatment type
- Follow-up appointment scheduling (remote or on-site)
- Post-treatment warranty terms page
- Maintenance guide for implants/crowns/veneers
- Emergency contact protocol after returning home

### 9. SITE NAVIGATION & UX (6 features)
- Sticky header with treatment, pricing, contact CTA
- Mobile-responsive design (most patients browse on phone)
- FAQ section searchable by treatment type
- Clear call-to-action buttons throughout ('Book Now', 'Get Quote')
- Cookie consent & GDPR compliance
- Fast loading optimized images

---

## Recommended Site Sitemap

```
/                           Home Page
  |-- Hero: headline + CTA (Book Free Consultation)
  |-- Trust bar (accreditations, patient count, awards)
  |-- Top treatments (3-4 cards with savings % vs home country)
  |-- Patient testimonials carousel
  |-- How it works (4-step journey infographic)
  |-- Clinic photos/gallery strip
  |-- CTA section: Get a Free Quote

/treatments/                Treatment Overview
  |-- Grid of all treatment categories
  |-- Filter by type (cosmetic, restorative, orthodontics, implants)

/treatments/[slug]/         Individual Treatment Page
  |-- What it is + who needs it
  |-- Step-by-step process
  |-- Duration & recovery timeline
  |-- Price vs home country comparison table
  |-- Before/after cases for this treatment
  |-- FAQ specific to this treatment
  |-- CTA: Book Consultation

/treatments/all-on-x        All-inclusive Package Page (dedicated)
  |-- What's included (procedure, travel, hotel, transfers)
  |-- Full package pricing tiers
  |-- Multi-day itinerary
  |-- Case studies
  |-- FAQ

/pricing/                   Pricing & Savings
  |-- Comparison table: our price vs US/UK/Europe
  |-- Cost calculator (select treatment -> see savings)
  |-- Payment plans & financing options
  |-- What's included / transparent fee breakdown

/doctors/                   Meet the Team
  |-- Doctor cards with photo, specialty, credentials
  |-- Individual profiles with education, experience, languages

/gallery/                   Before/After Gallery
  |-- Filterable by treatment type
  |-- High-res before/after slider comparison
  |-- Patient story captions with nationality flags

/about/                     About the Clinic
  |-- Our story / founding
  |-- Facility & technology (CBCT, CAD/CAM, 3D scanner)
  |-- Virtual tour embed (360-degree photos)
  |-- Accreditations & certifications
  |-- Sterilization & safety protocols

/journey/                   Patient Journey
  |-- Step 1: Free online consultation
  |-- Step 2: Treatment plan & quote
  |-- Step 3: Travel to us (airport transfer, accommodation)
  |-- Step 4: Treatment day
  |-- Step 5: Enjoy your stay (tourist tips)
  |-- Step 6: Aftercare & follow-up

/stay/                      Accommodation & Logistics
  |-- Recommended hotels / partnered hotels
  |-- Airport transfer details
  |-- Distance from airport with directions
  |-- Local attractions during your stay
  |-- Visa/travel tips for international patients

/aftercare/                 Post-Treatment Care
  |-- Aftercare by treatment type
  |-- Follow-up scheduling
  |-- Warranty terms
  |-- Emergency contact protocol
  |-- Maintenance guides

/reviews/                   Reviews & Testimonials
  |-- Patient testimonials with photos
  |-- Video testimonials embeds
  |-- Google Reviews widget
  |-- Referral program details

/blog/                       Blog
  |-- Treatment guides
  |-- Dental tourism tips
  |-- Destination guides
  |-- Case studies

/contact/                   Contact
  |-- Contact form (with treatment type selector)
  |-- WhatsApp quick link
  |-- Map + directions
  |-- Phone, email, office hours
  |-- Emergency number

```

---

## Feature Prioritization

### Phase 1 — MVP (Launch Ready)
- Homepage with trust signals, top treatments, testimonials
- Treatment pages (6-8 key treatments) with process, pricing, before/after
- Pricing page with cost comparison tables
- Doctor profiles
- Before/after gallery (basic, not filterable yet)
- Contact form + WhatsApp button
- FAQ section on each treatment page
- Mobile-responsive design
- Free consultation CTA everywhere

### Phase 2 — Growth Features
- Online appointment booking system with calendar
- Cost calculator tool (interactive)
- All-on-X dedicated package page with full itinerary
- Blog launch (dental tourism guides)
- Multilingual support (at least 2 languages)
- Patient journey page
- Google Reviews embed
- Video testimonials

### Phase 3 — Differentiation
- Virtual clinic tour (360-degree)
- Live chat widget
- Before/after gallery with filters
- Payment plans / financing integration
- Accommodation & logistics pages
- Post-treatment care section
- Referral program page
- Social media feed integration

### Phase 4 — Advanced
- 3D smile preview tool
- Patient portal (login, treatment records)
- AI chatbot for treatment questions
- Interactive savings calculator with home country selector
- YouTube channel with patient stories

---

## Competitive Differentiation Opportunities

Features few competitors have that could set the site apart:

1. **Interactive Cost Calculator** — Select home country + treatment → see exact savings
2. **Virtual Reality Clinic Tour** — 360-degree walkthrough of the facility
3. **AI-Powered Treatment Recommender** — Quiz format that suggests treatments based on symptoms
4. **Real-Time Availability Calendar** — See actual open slots for consultations
5. **Integrated Itinerary Builder** — Select treatment dates, get travel/accommodation suggestions
6. **Patient Portal** — Secure login to view X-rays, treatment plans, and billing
7. **Comparison Tool** — Side-by-side comparison of treatment options with pros/cons
8. **Live Video Consultation Booking** — Direct Calendly/video link for remote consults
9. **Treatment Tracker** — Visual timeline showing where you are in the treatment process
10. **Post-Treatment Community** — Forum or group for patients to share experiences

---

## Technical Considerations

- **CMS**: Next.js/React with headless CMS (Strapi/Sanity) or WordPress
- **Performance**: Images must be WebP, lazy-loaded; target < 3s load time globally
- **SEO**: Schema.org MedicalBusiness + Dentist markup, structured data for reviews/pricing
- **Analytics**: Google Analytics 4 + Hotjar for heatmap/recordings of international visitors
- **Hosting**: Vercel/Netlify for static + serverless functions for booking/contact forms
- **Compliance**: GDPR cookie consent, HIPAA considerations if storing medical data
- **CDN**: CloudFlare for global delivery (audience comes from multiple continents)

---

## Key Insights from Research

1. **Price transparency is #1 concern** — Every successful site leads with "save 50-70%" messaging
2. **Trust overcomes distance** — Accreditations, awards, and doctor credentials are front-and-center
3. **Before/after is the primary conversion tool** — More important than text descriptions
4. **Journey clarity reduces anxiety** — Step-by-step guides convert better than vague "contact us" pages
5. **Video testimonials beat written reviews** — Sites with video see higher engagement
6. **WhatsApp is the preferred communication channel** — Especially for non-US/UK patients
7. **All-inclusive packages are the premium offer** — Bundle treatment + hotel + transfers = higher perceived value
