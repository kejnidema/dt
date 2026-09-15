import { Link, useParams } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import { treatments } from '@/pages/TreatmentsPage';
import { images } from '@/lib/images';

const detailCopy: Record<string, { highlights: string[]; timeline: string[]; bestFor: string }> = {
  'tartar-clean': {
    bestFor: 'Patients who want healthier gums, fresher breath and a polished smile before cosmetic treatment.',
    highlights: ['Gentle tartar removal', 'Tooth polishing', 'Gum-health check'],
    timeline: ['Short consultation', 'Ultrasonic cleaning', 'Polish and hygiene advice'],
  },
  whitening: {
    bestFor: 'Patients who want a brighter smile without changing the natural shape of their teeth.',
    highlights: ['Professional-grade whitening', 'Shade assessment', 'Fast visible improvement'],
    timeline: ['Smile shade check', 'Gum protection', 'Whitening session and aftercare'],
  },
  'megagen-implant': {
    bestFor: 'Patients missing one or more teeth who want a stable long-term replacement.',
    highlights: ['MegaGen titanium implant system', 'Digital planning', 'Natural-looking final restoration'],
    timeline: ['3D diagnostics', 'Implant placement', 'Healing period and final crown'],
  },
  'porcelain-crown': {
    bestFor: 'Patients who need to protect or restore a damaged tooth with a natural ceramic result.',
    highlights: ['German-made porcelain crown', 'Natural translucency', 'Custom shade matching'],
    timeline: ['Tooth preparation', 'Digital impression', 'Crown fitting and bonding'],
  },
  'zirconia-crown': {
    bestFor: 'Patients looking for a very strong crown for long-lasting function and aesthetics.',
    highlights: ['German-made zirconia', 'High durability', 'Excellent for posterior teeth'],
    timeline: ['Consultation and scan', 'Crown design', 'Final placement'],
  },
  'emax-crown-veneer': {
    bestFor: 'Patients who want premium aesthetics for visible teeth with lifelike ceramic translucency.',
    highlights: ['German-made E-Max ceramic', 'Excellent front-tooth aesthetics', 'Crown or veneer options'],
    timeline: ['Smile planning', 'Preparation and impression', 'Final E-Max bonding'],
  },
  'removable-prosthetic': {
    bestFor: 'Patients who need an affordable removable solution for one jaw.',
    highlights: ['One-jaw removable prosthetic', 'Functional bite support', 'Personal fit adjustments'],
    timeline: ['Consultation', 'Impressions and bite registration', 'Fitting and adjustments'],
  },
};

export default function TreatmentDetailPage() {
  const { slug } = useParams();
  const { t: tr } = useI18n();
  const treatment = treatments.find((item) => item.link === `/treatments/${slug}`);
  const copy = slug ? detailCopy[slug] : undefined;

  if (!treatment || !copy) {
    return (
      <section className="py-section-padding bg-surface">
        <div className="max-w-[900px] mx-auto px-gutter text-center">
          <h1 className="font-display-lg text-display-lg text-primary mb-6">
            {tr('Treatment not found')}
          </h1>
          <Link to="/treatments" className="bg-primary text-on-primary px-6 py-3 rounded-sm font-label-md">
            {tr('View all treatments')}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="py-section-padding bg-surface">
        <div className="max-w-[1200px] mx-auto px-gutter grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container text-on-secondary-container rounded-sm">
              <span className="material-symbols-outlined text-[18px]">{treatment.icon}</span>
              <span className="font-label-md uppercase tracking-wider">{treatment.price}</span>
            </div>
            <h1 className="font-display-lg text-display-lg text-primary">{treatment.title}</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              {treatment.description || copy.bestFor}
            </p>
            <p className="text-on-surface-variant">{copy.bestFor}</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-sm font-label-md hover:opacity-95"
            >
              {tr('Request Free Consultation')}
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl bg-surface-container aspect-[4/3]">
            <img src={treatment.image || images.clinic} alt={treatment.title} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="py-section-padding bg-surface-container-low">
        <div className="max-w-[1200px] mx-auto px-gutter grid md:grid-cols-3 gap-8">
          {copy.highlights.map((item) => (
            <div key={item} className="bg-white border border-outline-variant rounded-xl p-8">
              <span className="material-symbols-outlined text-secondary text-4xl mb-4 block">check_circle</span>
              <h2 className="font-headline-sm text-headline-sm text-primary">{item}</h2>
            </div>
          ))}
        </div>
      </section>

      <section className="py-section-padding bg-surface">
        <div className="max-w-[900px] mx-auto px-gutter">
          <h2 className="font-headline-md text-headline-md text-primary mb-8">
            {tr('Treatment Process')}
          </h2>
          <div className="space-y-5">
            {copy.timeline.map((step, index) => (
              <div key={step} className="flex gap-4 bg-white border border-outline-variant rounded-xl p-6">
                <span className="w-10 h-10 rounded-full bg-secondary-fixed text-primary font-bold flex items-center justify-center shrink-0">
                  {index + 1}
                </span>
                <p className="pt-2 text-on-surface-variant">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
