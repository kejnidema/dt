import { Link } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import MaterialCard from '@/components/MaterialCard';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import TrustBar from '@/components/TrustBar';
import { images } from '@/lib/images';

export default function HomePage() {
  const { localized, t: tr } = useI18n();

  const t = localized({
    de: {
      badge: 'Premium Zahnästhetik',
      headline: 'Hollywood-Lächeln ab 350 € — Gleiche Qualität, deutlich günstiger.',
      subheadline:
        'Sparen Sie bis zu 70% gegenüber deutschen Preisen bei EU-zertifizierter Qualität. Boutique-Zahnmedizin in Tirana für anspruchsvolle Patienten.',
      ctaPrimary: 'Kostenlose Beratung anfragen',
      ctaSecondary: 'Galerie ansehen',
      materialsTitle: 'Unsere Premium-Materialien',
      materialsSubtitle:
        'Wir verwenden ausschließlich Materialien führender deutscher und internationaler Hersteller für langlebige und natürlich schöne Ergebnisse.',
      ctaTitle: 'Bereit für Ihr neues Lächeln?',
      ctaText:
        'Senden Sie uns einfach Fotos Ihrer Zähne per WhatsApp für eine unverbindliche erste Einschätzung und einen Kostenvoranschlag innerhalb von 24 Stunden.',
      ctaWhatsApp: 'WhatsApp Beratung',
      ctaBook: 'Termin buchen',
      doctorName: 'Dr. Marko Hoxha',
      doctorTitle: 'Chefarzt für Ästhetik',
      doctorQuote:
        'Wir kombinieren deutsche Präzision mit albanischer Gastfreundschaft, um Ihnen ein erstklassiges Erlebnis zu bieten.',
    },
    en: {
      badge: 'Premium Dental Aesthetics',
      headline: 'Hollywood Smile from €350 — Same Quality, Significantly Cheaper.',
      subheadline:
        'Save up to 70% compared to German prices with EU-certified quality. Boutique dentistry in Tirana for discerning patients.',
      ctaPrimary: 'Request Free Consultation',
      ctaSecondary: 'View Gallery',
      materialsTitle: 'Our Premium Materials',
      materialsSubtitle:
        'We use only materials from leading German and international manufacturers for durable and naturally beautiful results.',
      ctaTitle: 'Ready for Your New Smile?',
      ctaText:
        'Simply send us photos of your teeth via WhatsApp for a free initial assessment and a cost estimate within 24 hours.',
      ctaWhatsApp: 'WhatsApp Consultation',
      ctaBook: 'Book Appointment',
      doctorName: 'Dr. Marko Hoxha',
      doctorTitle: 'Lead Aesthetic Dentist',
      doctorQuote:
        'We combine German precision with Albanian hospitality to offer you a first-class experience.',
    },
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-surface py-section-padding">
        <div className="max-w-[1200px] mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container text-on-secondary-container rounded-sm">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              <span className="text-label-md font-bold uppercase tracking-wider">{t.badge}</span>
            </div>

            <h1 className="font-display-lg text-display-lg leading-tight text-primary">
              {t.headline}
            </h1>

            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
              {t.subheadline}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/contact"
                className="bg-primary text-on-primary px-8 py-4 font-label-md text-label-md rounded-sm hover:opacity-95 shadow-md flex items-center gap-2"
              >
                {t.ctaPrimary}
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <Link
                to="/veneers/gallery"
                className="border border-secondary text-secondary px-8 py-4 font-label-md text-label-md rounded-sm hover:bg-secondary/5 transition-colors"
              >
                {t.ctaSecondary}
              </Link>
            </div>
          </div>

          <BeforeAfterSlider
            beforeImage={images.heroBefore}
            afterImage={images.heroAfter}
            aspectRatio="tall"
          />
        </div>
      </section>

      {/* Trust Bar */}
      <TrustBar />

      {/* Materials Section */}
      <section className="py-section-padding bg-surface">
        <div className="max-w-[1200px] mx-auto px-gutter">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-display-lg text-display-lg text-primary">{t.materialsTitle}</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              {t.materialsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MaterialCard
              icon="diamond"
              title={tr('E-Max Crown and Veneer Made in Germany')}
              description={
                tr('Full ceramic for highest translucency and natural aesthetics. Ideal for front teeth.')
              }
              priceFrom="ab 300 €"
              germanyPrice="DE: ~1.200 €"
              badge="BESTSELLER"
              linkTo="/treatments/emax-crown-veneer"
            />
            <MaterialCard
              icon="shield"
              title={tr('Zirkonia Crown Made in Germany')}
              description={
                tr('Extremely durable and long-lasting. Perfect for a radiant white smile.')
              }
              priceFrom="ab 200 €"
              germanyPrice="DE: ~1.400 €"
              linkTo="/treatments/zirconia-crown"
            />
            <MaterialCard
              icon="layers"
              title={tr('Porcelain Crown Made in Germany')}
              description={
                tr('Natural ceramic restoration made in Germany.')
              }
              priceFrom="ab 100 €"
              germanyPrice="DE: ~800 €"
              linkTo="/treatments/porcelain-crown"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section-padding overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-gutter">
          <div className="relative bg-primary-container rounded-2xl overflow-hidden min-h-[500px] flex items-center">
            {/* Background Decoration */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute top-0 left-0 w-full h-full"
                style={{ background: 'radial-gradient(circle at 20% 50%, #D4AF37 0%, transparent 50%)' }}
              />
            </div>

            <div className="relative z-10 p-12 md:p-20 grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="font-display-lg text-display-lg text-on-primary">{t.ctaTitle}</h2>
                <p className="text-body-lg text-on-primary/80">{t.ctaText}</p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://wa.me/355690000000"
                    className="bg-secondary-fixed text-on-secondary-fixed px-8 py-4 font-label-md text-label-md rounded-sm flex items-center gap-3 hover:scale-105 transition-transform"
                  >
                    <span className="material-symbols-outlined">chat</span>
                    {t.ctaWhatsApp}
                  </a>
                  <Link
                    to="/contact"
                    className="border border-on-primary text-on-primary px-8 py-4 font-label-md text-label-md rounded-sm hover:bg-on-primary/10 transition-colors"
                  >
                    {t.ctaBook}
                  </Link>
                </div>
              </div>

              {/* Doctor Card */}
              <div className="hidden md:flex justify-end">
                <div className="bg-surface p-6 rounded-xl shadow-2xl max-w-sm rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="flex items-center gap-4 mb-4">
                    <img src={images.doctor} alt={t.doctorName} className="w-14 h-14 rounded-full object-cover" />
                    <div>
                      <p className="font-headline-sm text-[16px] text-primary">{t.doctorName}</p>
                      <p className="text-label-md text-on-surface-variant">{t.doctorTitle}</p>
                    </div>
                  </div>
                  <p className="text-body-md text-on-surface italic">"{t.doctorQuote}"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsCarousel />
    </>
  );
}
