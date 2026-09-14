import { Link } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import { images } from '@/lib/images';

export const treatments = [
    {
      icon: 'tooth',
      title: 'Veneers',
      description:
        'Ultra-thin ceramic shells for a perfect smile. E-Max, Zirconia and No-Prep.',
      link: '/veneers',
      price: 'from €350',
      image: images.heroAfter,
    },
    {
      icon: 'tooth',
      title: 'Tartar Clean',
      description: 'Remove tartar buildup and polish your teeth for a healthier, fresher smile.',
      link: '/treatments/tartar-clean',
      price: 'from €30',
      image: images.heroAfter,
    },
    {
      icon: 'tooth',
      title: 'Professional Teeth Whitening',
      description: '',
      link: '/treatments/whitening',
      price: 'from €150',
      image: images.heroAfter,
    },
    {
      icon: 'tooth',
      title: 'MegaGen-Titanium Implant',
      description: '',
      link: '/treatments/megagen-implant',
      price: 'from €500',
      image: images.heroAfter,
    },
    {
      icon: 'tooth',
      title: 'Porcelain Crown Made in Germany',
      description: '',
      link: '/treatments/porcelain-crown',
      price: 'from €100',
      image: images.heroAfter,
    },
    {
      icon: 'tooth',
      title: 'Zirkonia Crown Made in Germany',
      description: '',
      link: '/treatments/zirconia-crown',
      price: 'from €200',
      image: images.heroAfter,
    },
    {
      icon: 'tooth',
      title: 'E-Max Crown and Veneer Made in Germany',
      description: '',
      link: '/treatments/emax-crown-veneer',
      price: 'from €300',
      image: images.heroAfter,
    },
    {
      icon: 'tooth',
      title: 'Removable Prosthetic',
      description: '',
      link: '/treatments/removable-prosthetic',
      price: 'from €600',
      image: images.heroAfter,
    },
  ];

export default function TreatmentsPage() {
  const { lang } = useI18n();

  return (
    <>
      {/* Header */}
      <section className='py-section-padding bg-surface'>
        <div className='max-w-[1200px] mx-auto px-gutter text-center'>
          <h1 className='font-display-lg text-display-lg text-primary mb-6'>
            {lang === 'de' ? 'Unsere Behandlungen' : 'Our Treatments'}
          </h1>
          <p className='font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto'>
            {lang === 'de'
              ? 'Premium-Zahnmedizin zu einem Bruchteil der deutschen Preise.'
              : 'Premium dentistry at a fraction of German prices.'}
          </p>
        </div>
      </section>

      {/* Treatment Grid */}
      <section className='py-section-padding bg-surface-container-low'>
        <div className='max-w-[1200px] mx-auto px-gutter'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {treatments.map((t) => (
              <Link
                key={t.title}
                to={t.link}
                className='bg-white border border-outline-variant rounded-xl overflow-hidden hover:shadow-xl hover:border-primary transition-all duration-300 group flex flex-col'
              >
                <div className='h-56 overflow-hidden bg-surface-container'>
                  <img
                    src={t.image}
                    alt={t.title}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                  />
                </div>
                <div className='p-8 flex flex-col flex-grow'>
                  <div className='flex items-start justify-between mb-6'>
                    <span className='material-symbols-outlined text-4xl text-primary opacity-30 group-hover:opacity-100 transition-opacity'>
                      {t.icon}
                    </span>
                    <span className='font-headline-sm text-primary font-bold'>
                      {t.price}
                    </span>
                  </div>
                  <h3 className='font-headline-md text-headline-md text-primary mb-3'>
                    {t.title}
                  </h3>
                  <p className='text-on-surface-variant flex-grow'>
                    {t.description}
                  </p>
                  <div className='mt-6 flex items-center gap-2 text-primary font-label-md group-hover:gap-4 transition-all'>
                    {lang === 'de' ? 'Mehr erfahren' : 'Learn More'}
                    <span className='material-symbols-outlined'>
                      arrow_forward
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='py-section-padding bg-primary text-on-primary'>
        <div className='max-w-[1200px] mx-auto px-gutter text-center'>
          <h2 className='font-display-lg text-display-lg mb-6'>
            {lang === 'de'
              ? 'Welche Behandlung passt zu Ihnen?'
              : 'Which treatment is right for you?'}
          </h2>
          <p className='font-body-lg text-body-lg mb-10 max-w-2xl mx-auto opacity-80'>
            {lang === 'de'
              ? 'Senden Sie uns Fotos per WhatsApp für eine kostenlose Einschätzung.'
              : 'Send us photos via WhatsApp for a free assessment.'}
          </p>
          <Link
            to='/contact'
            className='bg-secondary-fixed text-on-secondary-fixed px-10 py-5 font-headline-sm hover:brightness-110 transition-all inline-block'
          >
            {lang === 'de' ? 'Kostenlose Beratung' : 'Free Consultation'}
          </Link>
        </div>
      </section>
    </>
  );
}
