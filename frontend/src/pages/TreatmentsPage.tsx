import { Link } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import { images } from '@/lib/images';

export const treatments = [
  {
    icon: 'tooth',
    title: 'Porcelain Crown Made in Germany',
    description: '',
    link: '/treatments/porcelain-crown',
    price: 'from €100',
    image: images.clinic,
  },
  {
    icon: 'tooth',
    title: 'Zirkonia Crown Made in Germany',
    description: '',
    link: '/treatments/zirconia-crown',
    price: 'from €200',
    image: images.surgery[2] ?? images.clinic,
  },
  {
    icon: 'tooth',
    title: 'E-Max Crown and Veneer Made in Germany',
    description: '',
    link: '/treatments/emax-crown-veneer',
    price: 'from €300',
    state: { selectedTreatment: 'emax-crown-veneer', group: 'crowns' },
    image: images.emaxAfter,
  },
  {
    icon: 'tooth',
    title: 'MegaGen-Titanium Implant',
    description: '',
    link: '/treatments/megagen-implant',
    price: 'from €500',
    image: images.surgery[4] ?? images.clinic,
  },
  {
    icon: 'tooth',
    title: 'Professional Teeth Whitening',
    description: '',
    link: '/treatments/whitening',
    price: 'from €150',
    image: images.beforeAfterEdited[1] ?? images.heroAfter,
  },
  {
    icon: 'tooth',
    title: 'Removable Prosthetic',
    description: '',
    link: '/treatments/removable-prosthetic',
    price: 'from €600',
    image: images.surgery[6] ?? images.clinic,
  },
  {
    icon: 'tooth',
    title: 'Tartar Clean',
    description:
      'Remove tartar buildup and polish your teeth for a healthier, fresher smile.',
    link: '/treatments/tartar-clean',
    price: 'from €30',
    image: images.clinicGallery[1] ?? images.clinic,
  },
  {
    icon: 'tooth',
    title: 'Fillings',
    description: 'Tooth-colored restorative fillings for cavities and minor damage.',
    link: '/services',
    price: 'from €40',
    image: images.beforeAfterEdited[0] ?? images.heroAfter,
  },
];

export const treatmentGroups = [
  {
    icon: 'diamond',
    title: 'Veneers',
    description: 'E-Max crown and veneer options made in Germany for a natural smile upgrade.',
    link: '/veneers',
    state: { selectedTreatment: 'emax' },
    price: 'from €350',
    image: images.emaxAfter,
  },
  {
    icon: 'precision_manufacturing',
    title: 'Crowns',
    description: 'Porcelain, Zirconia and E-Max crowns made in Germany.',
    link: '/treatments/emax-crown-veneer',
    state: { selectedTreatment: 'emax-crown-veneer', group: 'crowns' },
    price: 'from €100',
    image: images.clinic,
  },
  {
    icon: 'settings_accessibility',
    title: 'Implants',
    description: 'Titanium implant systems for stable long-term tooth replacement.',
    link: '/treatments/megagen-implant',
    state: { selectedTreatment: 'megagen-implant' },
    price: 'from €500',
    image: images.surgery[4] ?? images.clinic,
  },
  {
    icon: 'list_alt',
    title: 'All Services',
    description: 'See every service price including cleaning, whitening and fillings.',
    link: '/services',
    price: 'view prices',
    image: images.clinicGallery[1] ?? images.clinic,
  },
];

export default function TreatmentsPage() {
  const { t: tr } = useI18n();

  return (
    <>
      {/* Header */}
      <section className='py-section-padding bg-surface'>
        <div className='max-w-[1200px] mx-auto px-gutter text-center'>
          <h1 className='font-display-lg text-display-lg text-primary mb-6'>
            {tr('Our Treatments')}
          </h1>
          <p className='font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto'>
            {tr('Premium dentistry at a fraction of German prices.')}
          </p>
        </div>
      </section>

      {/* Treatment Grid */}
      <section className='py-section-padding bg-surface-container-low'>
        <div className='max-w-[1200px] mx-auto px-gutter'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {treatmentGroups.map((t) => (
              <Link
                key={t.title}
                to={t.link}
                state={t.state}
                className='bg-white border border-outline-variant rounded-xl overflow-hidden hover:shadow-xl hover:border-primary transition-all duration-300 group flex flex-col'
              >
                <div className='h-56 overflow-hidden bg-surface-container'>
                  <img
                    src={t.image}
                    alt={tr(t.title)}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                  />
                </div>
                <div className='p-8 flex flex-col flex-grow'>
                  <div className='flex items-start justify-between mb-6'>
                    <span className='material-symbols-outlined text-4xl text-primary opacity-30 group-hover:opacity-100 transition-opacity'>
                      {t.icon}
                    </span>
                    <span className='font-headline-sm text-primary font-bold'>
                      {tr(t.price)}
                    </span>
                  </div>
                  <h3 className='font-headline-md text-headline-md text-primary mb-3'>
                    {tr(t.title)}
                  </h3>
                  <p className='text-on-surface-variant flex-grow'>
                    {tr(t.description)}
                  </p>
                  <div className='mt-6 flex items-center gap-2 text-primary font-label-md group-hover:gap-4 transition-all'>
                    {tr('Learn More')}
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
            {tr('Which treatment is right for you?')}
          </h2>
          <p className='font-body-lg text-body-lg mb-10 max-w-2xl mx-auto opacity-80'>
            {tr('Send us photos via WhatsApp for a free assessment.')}
          </p>
          <Link
            to='/contact'
            className='bg-secondary-fixed text-on-secondary-fixed px-10 py-5 font-headline-sm hover:brightness-110 transition-all inline-block'
          >
            {tr('Free Consultation')}
          </Link>
        </div>
      </section>
    </>
  );
}
