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
  const { lang } = useI18n();
  return (
    <>
      <Hero
        title={lang === 'de' ? 'Preise & Ersparnis transparent vergleichen' : 'Transparent Pricing & Savings'}
        subtitle={lang === 'de' ? 'Berechnen Sie Ihre Kosten in Tirana gegenüber deutschen Durchschnittspreisen — ohne versteckte Gebühren.' : 'Calculate Tirana costs versus German averages — no hidden fees.'}
      />
      <Calculator />
      <section className="py-section-padding bg-surface">
        <div className="max-w-[1200px] mx-auto px-gutter grid md:grid-cols-3 gap-8">
          {[
            ['local_taxi', lang === 'de' ? 'VIP Transfer' : 'VIP Transfer', lang === 'de' ? 'Flughafenabholung und Fahrten zu Klinikterminen.' : 'Airport pickup and clinic transfers.'],
            ['hotel', lang === 'de' ? 'Hotelhilfe' : 'Hotel Support', lang === 'de' ? 'Empfehlungen für geprüfte 4–5 Sterne Partnerhotels.' : 'Recommendations for vetted 4–5 star partner hotels.'],
            ['payments', lang === 'de' ? 'Ratenzahlung' : 'Payment Plans', lang === 'de' ? 'Flexible Zahlung per Karte, Überweisung oder in Raten.' : 'Flexible card, bank transfer, or installment options.'],
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
  const { lang } = useI18n();
  const tiers = [
    ['All-on-4 Standard', '4 Implantate + feste Brücke', 'ab 5.900 €'],
    ['All-on-6 Premium', '6 Implantate + Zirkonia-Brücke', 'ab 7.900 €'],
    ['Full Mouth Package', 'Ober- und Unterkiefer komplett', 'ab 13.900 €'],
  ];
  return (
    <>
      <Hero title={lang === 'de' ? 'All-on-X Komplettpakete' : 'All-on-X Packages'} subtitle={lang === 'de' ? 'Feste Zähne, Hotelberatung, Transfer und klarer Reiseplan aus einer Hand.' : 'Fixed teeth, hotel guidance, transfers and a clear itinerary in one place.'} image={images.clinic} />
      <section className="py-section-padding bg-surface-container-low"><div className="max-w-[1200px] mx-auto px-gutter grid md:grid-cols-3 gap-8">
        {tiers.map(([name, desc, price]) => <div key={name} className="bg-white rounded-xl border border-outline-variant p-8"><h3 className="font-headline-sm text-headline-sm text-primary mb-2">{name}</h3><p className="text-on-surface-variant mb-6">{desc}</p><p className="text-3xl font-bold text-secondary mb-6">{price}</p><Link to="/contact" className="bg-primary text-on-primary px-6 py-3 rounded-sm inline-block">{lang === 'de' ? 'Anfragen' : 'Request'}</Link></div>)}
      </div></section>
      <section className="py-section-padding bg-surface"><div className="max-w-[900px] mx-auto px-gutter"><h2 className="font-headline-md text-headline-md text-primary mb-8">{lang === 'de' ? '7-Tage Beispiel-Route' : 'Sample 7-Day Itinerary'}</h2>{['Ankunft & 3D-Diagnostik','Implantat-OP / temporäre Zähne','Erholung & Tirana entdecken','Kontrolle & Anpassungen','Finale Übergabe / Heimreise'].map((s,i)=><div key={s} className="flex gap-4 mb-5"><span className="w-9 h-9 rounded-full bg-secondary-fixed text-primary font-bold flex items-center justify-center">{i+1}</span><p className="pt-1 text-on-surface-variant">{s}</p></div>)}</div></section>
    </>
  );
}

export function StayPage() {
  const { lang } = useI18n();
  return <><Hero title={lang === 'de' ? 'Aufenthalt & Logistik in Tirana' : 'Stay & Logistics in Tirana'} subtitle={lang === 'de' ? 'Direktflüge, Transfers, Hotels, Visa und Freizeit — stressfrei organisiert.' : 'Flights, transfers, hotels, visas and sightseeing — organized stress-free.'} image={images.journey}/><section className="py-section-padding bg-surface"><div className="max-w-[1200px] mx-auto px-gutter grid md:grid-cols-2 gap-8">{[
    ['flight','2 Stunden Flug','Direkte Verbindungen aus München, Frankfurt, Berlin und Wien.'],['badge','Kein Visum','EU-Bürger reisen mit Personalausweis oder Reisepass visafrei ein.'],['local_taxi','Privater Transfer','Fahrer wartet am Flughafen und begleitet Sie zu allen Terminen.'],['attractions','Tirana erleben','Skanderbeg-Platz, BunkArt, Dajti-Seilbahn und gute Restaurants.']
  ].map(([icon,title,desc])=><div key={title} className="glass-card p-8 rounded-xl"><span className="material-symbols-outlined text-primary text-4xl">{icon}</span><h3 className="font-headline-sm text-headline-sm mt-4 mb-2">{title}</h3><p className="text-on-surface-variant">{desc}</p></div>)}</div></section></>;
}

export function AftercarePage() {
  const { lang } = useI18n();
  const items = [
    { question: 'Wie pflege ich Veneers?', answer: 'Zweimal täglich putzen, Zahnseide/Interdentalbürsten verwenden und alle 6 Monate professionelle Kontrolle.' },
    { question: 'Was passiert nach der Heimreise?', answer: 'Sie erhalten digitale Unterlagen, Pflegehinweise und können Kontrollfotos per WhatsApp senden.' },
    { question: 'Gibt es Garantie?', answer: 'Ja, auf Material- und Herstellungsfehler gemäß individueller Behandlung und Pflegeprotokoll.' },
  ];
  return <><Hero title={lang === 'de' ? 'Nachsorge, Garantie & Sicherheit' : 'Aftercare, Warranty & Safety'} subtitle={lang === 'de' ? 'Klare Pflegepläne, Remote-Follow-ups und Notfallkontakt auch nach Ihrer Rückkehr.' : 'Clear care plans, remote follow-ups and emergency contact after you return home.'}/><section className="py-section-padding bg-surface"><div className="max-w-[800px] mx-auto px-gutter"><FaqAccordion items={items}/></div></section></>;
}

export function BlogPage() {
  const { lang } = useI18n();
  const posts = ['Was kosten Veneers in Deutschland wirklich?','E-Max vs. Zirkonia: welches Material passt?','Dentalreise nach Tirana: Checkliste für deutsche Patienten'];
  return <><Hero title={lang === 'de' ? 'Ratgeber für Veneers & Dentalreisen' : 'Veneer & Dental Tourism Guides'} subtitle={lang === 'de' ? 'Praktische Artikel zu Kosten, Materialien, Reiseplanung und Pflege.' : 'Practical articles about costs, materials, travel planning and care.'}/><section className="py-section-padding bg-surface-container-low"><div className="max-w-[1200px] mx-auto px-gutter grid md:grid-cols-3 gap-8">{posts.map((p,i)=><article key={p} className="bg-white border border-outline-variant rounded-xl overflow-hidden"><img src={[images.heroAfter,images.clinic,images.journey][i]} className="h-44 w-full object-cover"/><div className="p-6"><p className="text-label-md text-secondary mb-2">Guide</p><h2 className="font-headline-sm text-headline-sm text-primary mb-4">{p}</h2><Link to="/contact" className="text-primary font-bold">{lang === 'de' ? 'Beratung dazu anfragen' : 'Ask about this'} →</Link></div></article>)}</div></section></>;
}

export function FacilityPage() {
  const { lang } = useI18n();
  return <><Hero title={lang === 'de' ? 'Klinik, Technologie & Sicherheit' : 'Clinic, Technology & Safety'} subtitle={lang === 'de' ? 'CAD/CAM, 3D-Scanner, digitale Smile-Planung und strenge Sterilisationsprotokolle.' : 'CAD/CAM, 3D scanners, digital smile planning and strict sterilization protocols.'} image={images.clinic}/><section className="py-section-padding bg-surface"><div className="max-w-[1200px] mx-auto px-gutter grid md:grid-cols-4 gap-6">{['3D Intraoral Scanner','CAD/CAM Fräsen','Digital Smile Design','Sterile OP-Zonen'].map((t)=><div className="bg-white border border-outline-variant p-6 rounded-xl text-center" key={t}><span className="material-symbols-outlined text-secondary text-4xl mb-3 block">biotech</span><h3 className="font-bold text-primary">{t}</h3></div>)}</div></section></>;
}
