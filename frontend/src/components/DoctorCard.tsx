import { Link } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import type { Doctor } from '@/lib/doctors';

const labels = {
  years: { sq: 'vite', en: 'years', de: 'Jahre', it: 'anni' },
  lead: { sq: 'Mjeku kryesor', en: 'Lead dentist', de: 'Leitender Zahnarzt', it: 'Medico responsabile' },
  profile: { sq: 'Shiko profilin', en: 'View profile', de: 'Profil ansehen', it: 'Vedi profilo' },
};

export const yearsOfExperience = (since: number) => new Date().getFullYear() - since;

export default function DoctorCard({ doctor }: { doctor: Doctor }) {
  const { lang } = useI18n();
  return (
    <Link
      to={`/about/doctors/${doctor.slug}`}
      className="group flex flex-col bg-white border border-outline-variant rounded-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-surface-container">
        <img
          src={doctor.photo}
          alt={doctor.name}
          loading="lazy"
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-primary text-[13px] font-semibold px-3 py-1 rounded-full">
          {yearsOfExperience(doctor.since)}+ {labels.years[lang]}
        </span>
        {doctor.lead && (
          <span className="absolute top-4 right-4 bg-secondary-fixed text-on-secondary-fixed text-[12px] font-semibold px-3 py-1 rounded-full">
            {labels.lead[lang]}
          </span>
        )}
      </div>
      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-headline-sm text-headline-sm text-primary">{doctor.name}</h3>
        <p className="text-[14px] font-semibold text-secondary mt-1 mb-3">{doctor.role[lang]}</p>
        <p className="text-[14px] text-on-surface-variant leading-relaxed line-clamp-3 mb-4">{doctor.summary[lang]}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {doctor.tags.slice(0, 3).map((tag) => (
            <span key={tag.en} className="text-[12px] px-2.5 py-1 rounded-full bg-aqua-soft text-primary">
              {tag[lang]}
            </span>
          ))}
        </div>
        <span className="mt-auto inline-flex items-center gap-1 text-primary font-label-md group-hover:gap-3 transition-all">
          {labels.profile[lang]}
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </span>
      </div>
    </Link>
  );
}

export function DoctorPlaceholderCard({ label }: { label: string }) {
  return (
    <div className="flex flex-col bg-white border border-dashed border-outline-variant rounded-lg overflow-hidden">
      <div className="aspect-[4/5] grid place-items-center bg-gradient-to-br from-surface-container to-surface-container-high">
        <span className="material-symbols-outlined text-[72px] text-on-surface-variant/40">person</span>
      </div>
      <div className="p-6 space-y-3">
        <div className="h-5 w-2/3 rounded bg-surface-container" />
        <div className="h-4 w-1/2 rounded bg-surface-container" />
        <p className="text-[13px] text-on-surface-variant pt-2">{label}</p>
      </div>
    </div>
  );
}
