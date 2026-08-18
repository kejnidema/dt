import { Link } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import { galleryPairs, images } from '@/lib/images';

export default function TreatmentsPage() {
  const { lang } = useI18n();

  const treatments =
    lang === 'de'
      ? [
          {
            icon: 'tooth',
            title: 'Veneers',
            description: 'Ultradünne Keramikschalen für ein perfektes Lächeln. E-Max, Zirkonia und No-Prep.',
            link: '/veneers',
            price: 'ab 350 €',
            image: images.heroAfter,
          },
          {
            icon: 'construction',
            title: 'Implantate & All-on-X',
            description: 'Titan-Implantate, feste Brücken und All-on-4/All-on-6 Komplettpakete.',
            link: '/treatments/all-on-x',
            price: 'ab 800 €',
            image: images.clinic,
          },
          {
            icon: 'palette',
            title: 'Digital Smile Design',
            description: '3D-Visualisierung Ihres neuen Lächelns vor der Behandlung.',
            link: '/treatments',
            price: 'ab 200 €',
            image: images.emaxAfter,
          },
          {
            icon: 'cleaning_services',
            title: 'Zahnaufhellung',
            description: 'Professionelle Bleaching-Behandlung für strahlend weiße Zähne.',
            link: '/treatments',
            price: 'ab 250 €',
            image: galleryPairs[0][1],
          },
        ]
      : [
          {
            icon: 'tooth',
            title: 'Veneers',
            description: 'Ultra-thin ceramic shells for a perfect smile. E-Max, Zirconia and No-Prep.',
            link: '/veneers',
            price: 'from €350',
            image: images.heroAfter,
          },
          {
            icon: 'construction',
            title: 'Implants & All-on-X',
            description: 'Titanium implants, fixed bridges and All-on-4/All-on-6 packages.',
            link: '/treatments/all-on-x',
            price: 'from €800',
            image: images.clinic,
          },
          {
            icon: 'palette',
            title: 'Digital Smile Design',
            description: '3D visualization of your new smile before treatment.',
            link: '/treatments',
            price: 'from €200',
            image: images.emaxAfter,
          },
          {
            icon: 'cleaning_services',
            title: 'Teeth Whitening',
            description: 'Professional bleaching treatment for brilliantly white teeth.',
            link: '/treatments',
            price: 'from €250',
            image: galleryPairs[0][1],
          },
        ];

  return (
    <>
      {/* Header */}
      <section className="py-section-padding bg-surface">
        <div className="max-w-[1200px] mx-auto px-gutter text-center">
          <h1 className="font-display-lg text-display-lg text-primary mb-6">
            {lang === 'de' ? 'Unsere Behandlungen' : 'Our Treatments'}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            {lang === 'de'
              ? 'Premium-Zahnmedizin zu einem Bruchteil der deutschen Preise.'
              : 'Premium dentistry at a fraction of German prices.'}
          </p>
        </div>
      </section>

      {/* Treatment Grid */}
      <section className="py-section-padding bg-surface-container-low">
        <div className="max-w-[1200px] mx-auto px-gutter">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {treatments.map((t) => (
              <Link
                key={t.title}
                to={t.link}
                className="bg-white border border-outline-variant rounded-xl overflow-hidden hover:shadow-xl hover:border-primary transition-all duration-300 group flex flex-col"
              >
                <div className="h-56 overflow-hidden bg-surface-container">
                  <img src={t.image} alt={t.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-6">
                  <span className="material-symbols-outlined text-4xl text-primary opacity-30 group-hover:opacity-100 transition-opacity">
                    {t.icon}
                  </span>
                  <span className="font-headline-sm text-primary font-bold">{t.price}</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-3">{t.title}</h3>
                <p className="text-on-surface-variant flex-grow">{t.description}</p>
                <div className="mt-6 flex items-center gap-2 text-primary font-label-md group-hover:gap-4 transition-all">
                  {lang === 'de' ? 'Mehr erfahren' : 'Learn More'}
                  <span className="material-symbols-outlined">arrow_forward</span>
                </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section-padding bg-primary text-on-primary">
        <div className="max-w-[1200px] mx-auto px-gutter text-center">
          <h2 className="font-display-lg text-display-lg mb-6">
            {lang === 'de' ? 'Welche Behandlung passt zu Ihnen?' : 'Which treatment is right for you?'}
          </h2>
          <p className="font-body-lg text-body-lg mb-10 max-w-2xl mx-auto opacity-80">
            {lang === 'de'
              ? 'Senden Sie uns Fotos per WhatsApp für eine kostenlose Einschätzung.'
              : 'Send us photos via WhatsApp for a free assessment.'}
          </p>
          <Link
            to="/contact"
            className="bg-secondary-fixed text-on-secondary-fixed px-10 py-5 font-headline-sm hover:brightness-110 transition-all inline-block"
          >
            {lang === 'de' ? 'Kostenlose Beratung' : 'Free Consultation'}
          </Link>
        </div>
      </section>
    </>
  );
}
