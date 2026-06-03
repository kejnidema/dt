import ContactForm from '@/components/ContactForm';
import { useI18n } from '@/lib/i18n';

export default function ContactPage() {
  const { lang } = useI18n();

  const t = {
    de: {
      headline: 'Kontaktieren Sie uns',
      subtitle: 'Wir freuen uns auf Ihre Anfrage. Unser Team meldet sich innerhalb von 24 Stunden.',
      phone: 'Telefon',
      email: 'E-Mail',
      address: 'Adresse',
      hours: 'Öffnungszeiten',
      hoursMon: 'Mo - Fr: 09:00 - 18:00',
      hoursSat: 'Sa: 09:00 - 14:00',
      whatsapp: 'WhatsApp Chat',
      formTitle: 'Kostenlose Beratung anfragen',
    },
    en: {
      headline: 'Contact Us',
      subtitle: "We look forward to your inquiry. Our team will respond within 24 hours.",
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
      hours: 'Office Hours',
      hoursMon: 'Mon - Fri: 09:00 - 18:00',
      hoursSat: 'Sat: 09:00 - 14:00',
      whatsapp: 'WhatsApp Chat',
      formTitle: 'Request Free Consultation',
    },
  }[lang];

  return (
    <>
      {/* Header */}
      <section className="py-section-padding bg-surface">
        <div className="max-w-[1200px] mx-auto px-gutter text-center">
          <h1 className="font-display-lg text-display-lg text-primary mb-6">{t.headline}</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-section-padding bg-surface-container-low">
        <div className="max-w-[1200px] mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="font-headline-md text-headline-md text-primary">{t.formTitle}</h2>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-on-primary">call</span>
                </div>
                <div>
                  <p className="font-label-md text-primary">{t.phone}</p>
                  <p className="text-on-surface-variant">+355 69 00 00 000</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-on-primary">mail</span>
                </div>
                <div>
                  <p className="font-label-md text-primary">{t.email}</p>
                  <p className="text-on-surface-variant">info@veneerclinictirana.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-on-primary">location_on</span>
                </div>
                <div>
                  <p className="font-label-md text-primary">{t.address}</p>
                  <p className="text-on-surface-variant">Rr. Ibrahim Rugova, 1001 Tirana, Albanien</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-on-primary">schedule</span>
                </div>
                <div>
                  <p className="font-label-md text-primary">{t.hours}</p>
                  <p className="text-on-surface-variant">{t.hoursMon}</p>
                  <p className="text-on-surface-variant">{t.hoursSat}</p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/355690000000"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 font-label-md rounded-sm hover:opacity-90 transition-all"
            >
              <span className="material-symbols-outlined">chat</span>
              {t.whatsapp}
            </a>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-80 bg-surface-container flex items-center justify-center">
        <div className="text-center">
          <span className="material-symbols-outlined text-6xl text-outline-variant block mb-4">map</span>
          <p className="text-on-surface-variant">{lang === 'de' ? 'Kartenansicht' : 'Map View'}</p>
        </div>
      </section>
    </>
  );
}
