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
      imageUrl: images.doctor,
      isLead: true,
    },
  ];

  return (
    <>
      <div className="relative overflow-hidden bg-primary">
        <img
          src={images.team}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-[center_18%] opacity-55"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/45 to-primary/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/30 to-transparent" />
        <div className="absolute -left-24 top-24 w-96 h-96 rounded-full bg-secondary-fixed/20 blur-3xl" />
        <div className="absolute -right-24 bottom-24 w-96 h-96 rounded-full bg-white/10 blur-3xl" />

        {/* Hero */}
        <section className="relative py-section-padding text-on-primary">
          <div className="max-w-[1200px] mx-auto px-gutter grid lg:grid-cols-[0.95fr_1.05fr] gap-12 items-end min-h-[520px]">
            <div className="bg-primary/65 backdrop-blur-md border border-white/15 rounded-2xl p-8 md:p-12 shadow-2xl">
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
            <div className="hidden lg:block rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm p-6 text-on-primary shadow-xl">
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
                <div key={v.title} className="bg-white/88 backdrop-blur-md border border-white/40 rounded-xl p-8 text-center shadow-xl">
                  <span className="material-symbols-outlined text-4xl text-secondary mb-4 block">{v.icon}</span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-3">{v.title}</h3>
                  <p className="text-on-surface-variant">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Doctors */}
        <section className="relative pb-section-padding">
          <div className="max-w-[1200px] mx-auto px-gutter">
            <div className="bg-surface/90 backdrop-blur-md border border-white/40 rounded-2xl p-8 md:p-12 shadow-2xl">
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
