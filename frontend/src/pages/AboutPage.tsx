import { useI18n } from '@/lib/i18n';
import DoctorCard from '@/components/DoctorCard';
import { images } from '@/lib/images';

export default function AboutPage() {
  const { t: tr } = useI18n();

  const doctors = [
    {
      firstName: 'Besnik',
      lastName: 'Skenderi',
      specialization: tr('Dental Aesthetics & Veneers'),
      biographyDe: 'Spezialist für ästhetische Zahnmedizin mit über 15 Jahren Erfahrung. Master in Aesthetic Dentistry von der Universität Mailand.',
      biographyEn: 'Specialist in aesthetic dentistry with over 15 years of experience. Master in Aesthetic Dentistry from University of Milan.',
      languages: ['Deutsch', 'English', 'Shqip'],
      credentials: [
        { title: 'Dr. med. dent.', institution: 'Universität Tirana', year: 2008 },
        { title: 'Master Aesthetic Dentistry', institution: 'Universität Mailand', year: 2012 },
      ],
      imageUrl: images.clinic,
      isLead: true,
    },
  ];

  return (
    <>
      <div className="relative overflow-hidden bg-primary">
        <img
          src={images.team}
          alt=""
          className="absolute inset-x-0 top-0 w-full h-full object-contain object-top opacity-90"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(0, 6, 19, 0.05) 0%, rgba(0, 6, 19, 0.35) 25%, #000613 40%, #000613 100%)',
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-primary via-primary/90 to-transparent backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/38 via-primary/12 to-transparent" />
        <div className="absolute -left-24 top-24 w-96 h-96 rounded-full bg-secondary-fixed/15 blur-3xl" />
        <div className="absolute -right-24 bottom-24 w-96 h-96 rounded-full bg-white/8 blur-3xl" />

        {/* Hero */}
        <section className="relative py-section-padding text-on-primary">
          <div className="max-w-[1200px] mx-auto px-gutter grid lg:grid-cols-[0.95fr_1.05fr] gap-12 items-end min-h-[520px]">
            <div className="bg-primary/48 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12 shadow-xl">
              <p className="font-label-md uppercase tracking-[0.25em] text-secondary-fixed mb-4">
                Veneer Clinic Tirana
              </p>
              <h1 className="font-display-lg text-display-lg mb-6">
                {tr('About Us')}
              </h1>
              <p className="font-body-lg text-body-lg opacity-90">
                {tr('German precision meets Albanian hospitality. Our team combines international experience with state-of-the-art technology.')}
              </p>
            </div>
            <div className="hidden lg:block rounded-2xl border border-white/20 bg-primary/32 backdrop-blur-[2px] p-6 text-on-primary shadow-lg">
              <span className="material-symbols-outlined text-secondary-fixed text-5xl mb-4 block">groups</span>
              <h2 className="font-headline-md text-headline-md mb-3">{tr('Our Team')}</h2>
              <p className="opacity-85">
                {tr('Individual care from consultation to aftercare.')}
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="relative pb-section-padding">
          <div className="max-w-[1200px] mx-auto px-gutter">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: 'verified',
                  title: tr('Quality'),
                  desc: tr('CE-certified materials and German standards.'),
                },
                {
                  icon: 'favorite',
                  title: tr('Patient First'),
                  desc: tr('Individual care from consultation to aftercare.'),
                },
                {
                  icon: 'science',
                  title: tr('Technology'),
                  desc: tr('CAD/CAM, 3D scanners and Digital Smile Design.'),
                },
              ].map((v) => (
                <div key={v.title} className="bg-primary/38 backdrop-blur-[2px] border border-white/25 rounded-xl p-8 text-center shadow-lg text-on-primary">
                  <span className="material-symbols-outlined text-4xl text-secondary-fixed mb-4 block">{v.icon}</span>
                  <h3 className="font-headline-sm text-headline-sm mb-3">{v.title}</h3>
                  <p className="opacity-85">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Doctors */}
        <section className="relative pb-section-padding">
          <div className="max-w-[1200px] mx-auto px-gutter">
            <div className="bg-surface/88 backdrop-blur-sm border border-white/35 rounded-2xl p-8 md:p-12 shadow-xl">
              <h2 className="font-headline-md text-headline-md text-primary text-center mb-12">
                {tr('Our Team')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {doctors.map((d) => (
                  <DoctorCard key={d.lastName} {...d} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Google Review */}
      <section className="py-section-padding bg-surface-container-low">
        <div className="max-w-[900px] mx-auto px-gutter">
          <div className="bg-white border border-outline-variant rounded-2xl p-8 md:p-10 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary text-on-primary flex items-center justify-center font-headline-sm">
                  A
                </div>
                <div>
                  <h2 className="font-headline-sm text-headline-sm text-primary">Anna Müller</h2>
                  <p className="text-sm text-on-surface-variant">Google Maps Review</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-secondary text-2xl" aria-label="5 star review">
                ★★★★★
              </div>
            </div>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
              “{tr('The clinic is modern, clean and very professional. The team explained every step clearly and made me feel comfortable from the first consultation to the final result.')}”
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Rr.%20Ibrahim%20Rugova%2C%20Tirana%2C%20Albania"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-label-md hover:gap-4 transition-all"
            >
              {tr('View on Google Maps')}
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      {/* Clinic */}
      <section className="py-section-padding bg-surface">
        <div className="max-w-[1200px] mx-auto px-gutter">
          <div className="text-center mb-12">
            <h2 className="font-headline-md text-headline-md text-primary mb-4">
              {tr('Our Clinic')}
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              {tr('Modern treatment rooms, digital workflows and a calm environment for your dental journey.')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[220px]">
            {images.surgery.slice(0, 5).map((image, index) => (
              <div
                key={image}
                className={`rounded-2xl overflow-hidden border border-outline-variant shadow-sm bg-surface-container ${
                  index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <img
                  src={image}
                  alt={`${tr('Our Clinic')} ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-section-padding bg-surface-container-low">
        <div className="max-w-[1200px] mx-auto px-gutter">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 items-stretch">
            <div className="bg-white border border-outline-variant rounded-2xl p-8 shadow-sm flex flex-col justify-center">
              <span className="material-symbols-outlined text-secondary text-5xl mb-4">location_on</span>
              <h2 className="font-headline-md text-headline-md text-primary mb-4">
                {tr('Visit Us in Tirana')}
              </h2>
              <p className="text-on-surface-variant mb-6">
                Rr. Ibrahim Rugova, Tirana, Albania
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Rr.%20Ibrahim%20Rugova%2C%20Tirana%2C%20Albania"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-label-md hover:gap-4 transition-all"
              >
                {tr('Open in Google Maps')}
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
            <div className="rounded-2xl overflow-hidden border border-outline-variant shadow-xl min-h-[360px] bg-surface-container">
              <iframe
                title="Veneer Clinic Tirana location"
                src="https://www.google.com/maps?q=Rr.%20Ibrahim%20Rugova%2C%20Tirana%2C%20Albania&output=embed"
                className="w-full h-full min-h-[360px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section-padding bg-primary text-on-primary">
        <div className="max-w-[1200px] mx-auto px-gutter text-center">
          <h2 className="font-display-lg text-display-lg mb-6">
            {tr('Meet Our Team')}
          </h2>
          <p className="font-body-lg text-body-lg mb-10 max-w-2xl mx-auto opacity-80">
            {tr('Schedule a free consultation and meet our team in person.')}
          </p>
          <a
            href="/contact"
            className="bg-secondary-fixed text-on-secondary-fixed px-10 py-5 font-headline-sm hover:brightness-110 transition-all inline-block"
          >
            {tr('Book Appointment')}
          </a>
        </div>
      </section>
    </>
  );
}
