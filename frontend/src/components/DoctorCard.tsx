import { useI18n } from '@/lib/i18n';

interface DoctorCardProps {
  firstName: string;
  lastName: string;
  specialization: string;
  biographyDe: string;
  biographyEn: string;
  imageUrl?: string;
  languages: string[];
  credentials: { title: string; institution: string; year: number }[];
  isLead?: boolean;
}

export default function DoctorCard({
  firstName,
  lastName,
  specialization,
  biographyDe,
  biographyEn,
  imageUrl,
  languages,
  credentials,
  isLead,
}: DoctorCardProps) {
  const { localized, t } = useI18n();
  return (
    <div className="bg-white border border-outline-variant rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
      {/* Image */}
      <div className="aspect-[4/3] bg-surface-container overflow-hidden">
        {imageUrl ? (
          <img src={imageUrl} alt={`Dr. ${lastName}`} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-primary text-on-primary">
            <span className="material-symbols-outlined text-6xl">person</span>
          </div>
        )}
      </div>

      <div className="p-6">
        {isLead && (
          <span className="inline-block bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded-sm text-label-md font-bold mb-3">
            {t('Lead Doctor')}
          </span>
        )}

        <h3 className="font-headline-sm text-headline-sm text-primary mb-1">
          Dr. {firstName} {lastName}
        </h3>

        <p className="text-label-md text-secondary font-bold mb-4">{specialization}</p>

        <p className="text-on-surface-variant text-sm mb-4">
          {localized({ de: biographyDe, en: biographyEn })}
        </p>

        {/* Credentials */}
        {credentials.length > 0 && (
          <div className="mb-4">
            <p className="text-label-md text-primary mb-2">
              {t('Education:')}
            </p>
            <ul className="space-y-1">
              {credentials.map((c, i) => (
                <li key={i} className="text-sm text-on-surface-variant flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] text-secondary mt-0.5">
                    school
                  </span>
                  <span>
                    {c.title}, {c.institution} ({c.year})
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Languages */}
        <div className="flex flex-wrap gap-2">
          {languages.map((l) => (
            <span
              key={l}
              className="text-xs px-2 py-1 bg-surface-container-low rounded-sm text-on-surface-variant border border-outline-variant"
            >
              {l}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
