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
      {/* Hero */}
      <section className="py-section-padding bg-surface">
        <div className="max-w-[1200px] mx-auto px-gutter text-center">
          <h1 className="font-display-lg text-display-lg text-primary mb-6">
            {tr('About Us')}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            {tr('German precision meets Albanian hospitality. Our team combines international experience with state-of-the-art technology.')}
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-section-padding bg-surface-container-low">
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
              <div key={v.title} className="bg-white border border-outline-variant rounded-xl p-8 text-center">
                <span className="material-symbols-outlined text-4xl text-secondary mb-4 block">{v.icon}</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-3">{v.title}</h3>
                <p className="text-on-surface-variant">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className="py-section-padding bg-surface">
        <div className="max-w-[1200px] mx-auto px-gutter">
          <h2 className="font-headline-md text-headline-md text-primary text-center mb-12">
            {tr('Our Team')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {doctors.map((d) => (
              <DoctorCard key={d.lastName} {...d} />
            ))}
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
