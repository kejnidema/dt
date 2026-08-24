import Calculator from '@/components/Calculator';
import { useI18n } from '@/lib/i18n';
import { images } from '@/lib/images';

export default function CostComparisonPage() {
  const { lang } = useI18n();

  const t = {
    de: {
      badge: 'Preis-Transparenz',
      headline: 'Sparen Sie Tausende von Euro bei Ihren Veneers.',
      subtitle:
        'Deutsche Qualität, albanische Gastfreundschaft. Erfahren Sie sofort, wie viel Sie im Vergleich zu Ihrer Heimatstadt sparen können.',
      certified: 'TÜV-zertifizierte Materialien & deutsche Leitung',
      includedTitle: 'Was ist im Preis inklusive?',
      includedSubtitle: 'Keine versteckten Kosten. Wir organisieren Ihren gesamten Aufenthalt.',
      transferTitle: 'VIP Transfer',
      transferDesc: 'Persönlicher Chauffeur vom Flughafen Tirana zum Hotel und zur Klinik.',
      hotelTitle: '4* & 5* Hotels',
      hotelDesc: 'Übernachtung in unseren Partnerhotels direkt im Herzen von Tirana.',
      planTitle: 'Treatment Plan',
      planDesc: 'Digital Smile Design, Röntgen, Anästhesie und lebenslange Garantie.',
      doctorName: 'Dr. Marko Hoxha',
      doctorTitle: 'Chefarzt & Spezialist für Ästhetik',
      doctorQuote:
        'Wir verwenden exakt die gleichen Materialien und Technologien wie Spitzenkliniken in Berlin oder München – nur die Betriebskosten in Tirana ermöglichen diesen Preisvorteil.',
    },
    en: {
      badge: 'Price Transparency',
      headline: 'Save Thousands of Euros on Your Veneers.',
      subtitle:
        'German quality, Albanian hospitality. Find out immediately how much you can save compared to your home city.',
      certified: 'TÜV-certified materials & German management',
      includedTitle: "What's Included?",
      includedSubtitle: 'No hidden costs. We organize your entire stay.',
      transferTitle: 'VIP Transfer',
      transferDesc: 'Personal chauffeur from Tirana airport to hotel and clinic.',
      hotelTitle: '4* & 5* Hotels',
      hotelDesc: 'Stay at our partner hotels in the heart of Tirana.',
      planTitle: 'Treatment Plan',
      planDesc: 'Digital Smile Design, X-rays, anesthesia and lifetime warranty.',
      doctorName: 'Dr. Marko Hoxha',
      doctorTitle: 'Lead Doctor & Aesthetic Specialist',
      doctorQuote:
        'We use exactly the same materials and technologies as top clinics in Berlin or Munich — only the operating costs in Tirana enable this price advantage.',
    },
  }[lang === 'de' ? 'de' : 'en'];

  return (
    <>
      {/* Hero */}
      <section className="py-section-padding bg-white overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block py-1 px-3 bg-secondary-fixed text-on-secondary-fixed font-label-md text-[12px] rounded-full mb-6 uppercase tracking-widest">
              {t.badge}
            </span>
            <h1 className="font-display-lg text-display-lg mb-6 leading-tight">{t.headline}</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-lg">
              {t.subtitle}
            </p>
            <div className="flex items-center gap-4 text-primary">
              <span className="material-symbols-outlined text-[32px]">verified_user</span>
              <span className="font-label-md">{t.certified}</span>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/5 rounded-xl -rotate-2 group-hover:rotate-0 transition-transform duration-500" />
            <div className="relative rounded-xl shadow-xl bg-surface-container h-[450px] overflow-hidden">
              <img src={images.clinic} alt="Modern dental clinic in Tirana" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur rounded-lg p-5">
                <p className="text-primary font-headline-sm">{lang === 'de' ? 'Bis zu 70% günstiger als Deutschland' : 'Up to 70% less than Germany'}</p>
                <p className="text-on-surface-variant text-sm mt-1">E-Max · Zirkonia · Digital Smile Design</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <Calculator />

      {/* What's Included */}
      <section className="py-section-padding bg-white">
        <div className="max-w-[1200px] mx-auto px-gutter">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="font-headline-md text-headline-md text-primary mb-4">{t.includedTitle}</h2>
              <p className="text-on-surface-variant max-w-lg">{t.includedSubtitle}</p>
            </div>
            <div className="hidden md:block">
              <span className="material-symbols-outlined text-secondary text-[48px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                package_2
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'airport_shuttle', title: t.transferTitle, desc: t.transferDesc },
              { icon: 'hotel', title: t.hotelTitle, desc: t.hotelDesc },
              { icon: 'architecture', title: t.planTitle, desc: t.planDesc },
            ].map((item) => (
              <div
                key={item.title}
                className="group p-8 border border-outline-variant hover:border-primary transition-all duration-300 flex flex-col"
              >
                <div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded-full mb-6 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <h3 className="font-headline-sm mb-4">{item.title}</h3>
                <p className="text-on-surface-variant mb-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Quote */}
      <section className="py-20 bg-primary-container text-on-primary-container">
        <div className="max-w-[1200px] mx-auto px-gutter flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full border-2 border-secondary-fixed overflow-hidden bg-white">
              <img src={images.doctor} alt={t.doctorName} className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="font-headline-sm text-white">{t.doctorName}</p>
              <p className="font-label-md opacity-80">{t.doctorTitle}</p>
            </div>
          </div>
          <blockquote className="max-w-xl italic text-body-lg">"{t.doctorQuote}"</blockquote>
        </div>
      </section>
    </>
  );
}
