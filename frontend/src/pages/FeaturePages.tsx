import { Link } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import FaqAccordion from '@/components/FaqAccordion';
import Calculator from '@/components/Calculator';
import { images } from '@/lib/images';

function Hero({ title, subtitle, image }: { title: string; subtitle: string; image?: string }) {
  return (
    <section className="relative py-section-padding overflow-hidden bg-primary text-on-primary">
      {image && <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />}
      <div className="relative max-w-[1200px] mx-auto px-gutter max-w-3xl">
        <h1 className="font-display-lg text-display-lg mb-6">{title}</h1>
        <p className="font-body-lg text-body-lg opacity-85">{subtitle}</p>
      </div>
    </section>
  );
}

export function PricingPage() {
  const { t: tr } = useI18n();
  return (
    <>
      <Hero
        title={tr('Transparent Pricing & Savings')}
        subtitle={tr('Calculate Tirana costs versus German averages — no hidden fees.')}
      />
      <Calculator />
      <section className="pb-section-padding bg-surface-container-low">
        <div className="max-w-[1200px] mx-auto px-gutter text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-sm font-label-md hover:opacity-95 transition-opacity"
          >
            {tr('View All Service Prices')}
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </section>
      <section className="py-section-padding bg-surface">
        <div className="max-w-[1200px] mx-auto px-gutter grid md:grid-cols-3 gap-8">
          {[
            ['local_taxi', tr('VIP Transfer'), tr('Airport pickup and clinic transfers.')],
            ['hotel', tr('Hotel Support'), tr('Recommendations for vetted 4–5 star partner hotels.')],
            ['payments', tr('Payment Plans'), tr('Flexible card, bank transfer, or installment options.')],
          ].map(([icon, title, desc]) => (
            <div className="bg-white border border-outline-variant rounded-xl p-8" key={title}>
              <span className="material-symbols-outlined text-secondary text-4xl mb-4 block">{icon}</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-3">{title}</h3>
              <p className="text-on-surface-variant">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export function AllOnXPage() {
  const { localized, t: tr } = useI18n();
  const tiers = localized({
    de: [
      ['All-on-4 Standard', '4 Implantate + feste Brücke', 'ab 5.900 €'],
      ['All-on-6 Premium', '6 Implantate + Zirkonia-Brücke', 'ab 7.900 €'],
      ['Full Mouth Package', 'Ober- und Unterkiefer komplett', 'ab 13.900 €'],
    ],
    en: [
      ['All-on-4 Standard', '4 implants + fixed bridge', 'from €5,900'],
      ['All-on-6 Premium', '6 implants + zirconia bridge', 'from €7,900'],
      ['Full Mouth Package', 'Complete upper and lower jaw', 'from €13,900'],
    ],
  });
  const itinerary = localized({
    de: ['Ankunft & 3D-Diagnostik', 'Implantat-OP / temporäre Zähne', 'Erholung & Tirana entdecken', 'Kontrolle & Anpassungen', 'Finale Übergabe / Heimreise'],
    en: ['Arrival & 3D diagnostics', 'Implant surgery / temporary teeth', 'Recovery & discover Tirana', 'Check-up & adjustments', 'Final handover / return trip'],
  });

  return (
    <>
      <Hero
        title={tr('All-on-X Packages')}
        subtitle={tr('Fixed teeth, hotel guidance, transfers and a clear itinerary in one place.')}
        image={images.clinic}
      />
      <section className="py-section-padding bg-surface-container-low">
        <div className="max-w-[1200px] mx-auto px-gutter grid md:grid-cols-3 gap-8">
          {tiers.map(([name, desc, price]) => (
            <div key={name} className="bg-white rounded-xl border border-outline-variant p-8">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">{name}</h3>
              <p className="text-on-surface-variant mb-6">{desc}</p>
              <p className="text-3xl font-bold text-secondary mb-6">{price}</p>
              <Link to="/contact" className="bg-primary text-on-primary px-6 py-3 rounded-sm inline-block">
                {tr('Request')}
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section className="py-section-padding bg-surface">
        <div className="max-w-[900px] mx-auto px-gutter">
          <h2 className="font-headline-md text-headline-md text-primary mb-8">
            {tr('Sample 7-Day Itinerary')}
          </h2>
          {itinerary.map((step, i) => (
            <div key={step} className="flex gap-4 mb-5">
              <span className="w-9 h-9 rounded-full bg-secondary-fixed text-primary font-bold flex items-center justify-center">{i + 1}</span>
              <p className="pt-1 text-on-surface-variant">{step}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export function StayPage() {
  const { localized, t: tr } = useI18n();
  const cards = localized({
    de: [
      ['flight', '2 Stunden Flug', 'Direkte Verbindungen aus München, Frankfurt, Berlin und Wien.'],
      ['badge', 'Kein Visum', 'EU-Bürger reisen mit Personalausweis oder Reisepass visafrei ein.'],
      ['local_taxi', 'Privater Transfer', 'Fahrer wartet am Flughafen und begleitet Sie zu allen Terminen.'],
      ['attractions', 'Tirana erleben', 'Skanderbeg-Platz, BunkArt, Dajti-Seilbahn und gute Restaurants.'],
    ],
    en: [
      ['flight', '2-hour flight', 'Direct connections from Munich, Frankfurt, Berlin and Vienna.'],
      ['badge', 'No visa', 'EU citizens enter visa-free with an ID card or passport.'],
      ['local_taxi', 'Private transfer', 'Your driver waits at the airport and accompanies you to all appointments.'],
      ['attractions', 'Experience Tirana', 'Skanderbeg Square, BunkArt, Dajti cable car and great restaurants.'],
    ],
  });

  return (
    <>
      <Hero
        title={tr('Stay & Logistics in Tirana')}
        subtitle={tr('Flights, transfers, hotels, visas and sightseeing — organized stress-free.')}
        image={images.journey}
      />
      <section className="py-section-padding bg-surface">
        <div className="max-w-[1200px] mx-auto px-gutter grid md:grid-cols-2 gap-8">
          {cards.map(([icon, title, desc]) => (
            <div key={title} className="glass-card p-8 rounded-xl">
              <span className="material-symbols-outlined text-primary text-4xl">{icon}</span>
              <h3 className="font-headline-sm text-headline-sm mt-4 mb-2">{title}</h3>
              <p className="text-on-surface-variant">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export function AftercarePage() {
  const { localized, t: tr } = useI18n();
  const items = localized({
    de: [
      { question: 'Wie pflege ich Veneers?', answer: 'Zweimal täglich putzen, Zahnseide/Interdentalbürsten verwenden und alle 6 Monate professionelle Kontrolle.' },
      { question: 'Was passiert nach der Heimreise?', answer: 'Sie erhalten digitale Unterlagen, Pflegehinweise und können Kontrollfotos per WhatsApp senden.' },
      { question: 'Gibt es Garantie?', answer: 'Ja, auf Material- und Herstellungsfehler gemäß individueller Behandlung und Pflegeprotokoll.' },
    ],
    en: [
      { question: 'How do I care for veneers?', answer: 'Brush twice daily, use floss/interdental brushes and schedule professional check-ups every 6 months.' },
      { question: 'What happens after I return home?', answer: 'You receive digital documents, care instructions and can send follow-up photos via WhatsApp.' },
      { question: 'Is there a warranty?', answer: 'Yes, for material and manufacturing defects according to your individual treatment and care protocol.' },
    ],
  });

  return (
    <>
      <Hero
        title={tr('Aftercare, Warranty & Safety')}
        subtitle={tr('Clear care plans, remote follow-ups and emergency contact after you return home.')}
      />
      <section className="py-section-padding bg-surface">
        <div className="max-w-[800px] mx-auto px-gutter"><FaqAccordion items={items} /></div>
      </section>
    </>
  );
}

export function BlogPage() {
  const { localized, t: tr } = useI18n();
  const posts = localized({
    de: ['Was kosten Veneers in Deutschland wirklich?', 'E-Max vs. Zirkonia: welches Material passt?', 'Dentalreise nach Tirana: Checkliste für deutsche Patienten'],
    en: ['What do veneers really cost in Germany?', 'E-Max vs. Zirconia: which material fits?', 'Dental trip to Tirana: checklist for German patients'],
  });

  return (
    <>
      <Hero
        title={tr('Veneer & Dental Tourism Guides')}
        subtitle={tr('Practical articles about costs, materials, travel planning and care.')}
      />
      <section className="py-section-padding bg-surface-container-low">
        <div className="max-w-[1200px] mx-auto px-gutter grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <article key={post} className="bg-white border border-outline-variant rounded-xl overflow-hidden">
              <img src={[images.emaxAfter, images.surgery[2] ?? images.clinic, images.journey][i]} className="h-44 w-full object-cover" />
              <div className="p-6">
                <p className="text-label-md text-secondary mb-2">Guide</p>
                <h2 className="font-headline-sm text-headline-sm text-primary mb-4">{post}</h2>
                <Link to="/contact" className="text-primary font-bold">
                  {tr('Ask about this')} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export function FacilityPage() {
  const { localized, t: tr } = useI18n();
  const technologies = localized({
    de: ['3D Intraoral Scanner', 'CAD/CAM Fräsen', 'Digital Smile Design', 'Sterile OP-Zonen'],
    en: ['3D Intraoral Scanner', 'CAD/CAM Milling', 'Digital Smile Design', 'Sterile surgical zones'],
  });

  return (
    <>
      <Hero
        title={tr('Clinic, Technology & Safety')}
        subtitle={tr('CAD/CAM, 3D scanners, digital smile planning and strict sterilization protocols.')}
        image={images.clinic}
      />
      <section className="py-section-padding bg-surface">
        <div className="max-w-[1200px] mx-auto px-gutter grid md:grid-cols-4 gap-6">
          {technologies.map((tech) => (
            <div className="bg-white border border-outline-variant p-6 rounded-xl text-center" key={tech}>
              <span className="material-symbols-outlined text-secondary text-4xl mb-3 block">biotech</span>
              <h3 className="font-bold text-primary">{tech}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
