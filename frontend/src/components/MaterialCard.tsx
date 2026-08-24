import { Link } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';

interface MaterialCardProps {
  icon: string;
  title: string;
  description: string;
  priceFrom: string;
  germanyPrice?: string;
  badge?: string;
  linkTo?: string;
}

export default function MaterialCard({
  icon,
  title,
  description,
  priceFrom,
  germanyPrice,
  badge,
  linkTo,
}: MaterialCardProps) {
  const { lang } = useI18n();
  const labels = lang === 'de'
    ? { pricePerTooth: 'Preis pro Zahn', dePrice: 'DE Preis:', details: 'Details ansehen' }
    : lang === 'it'
      ? { pricePerTooth: 'Prezzo per dente', dePrice: 'Prezzo DE:', details: 'Vedi dettagli' }
      : lang === 'sq'
        ? { pricePerTooth: 'Çmimi për dhëmb', dePrice: 'Çmimi DE:', details: 'Shiko detajet' }
        : { pricePerTooth: 'Price per tooth', dePrice: 'DE price:', details: 'View details' };

  return (
    <div className="bg-surface-container-low border border-outline-variant p-8 rounded-xl flex flex-col hover:shadow-xl transition-all duration-300 group">
      <div className="mb-6 flex justify-between items-start">
        <span className="material-symbols-outlined text-4xl text-primary opacity-30 group-hover:opacity-100 transition-opacity">
          {icon}
        </span>
        {badge && (
          <span className="bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded-sm text-label-md font-bold">
            {badge}
          </span>
        )}
      </div>

      <h3 className="font-headline-md text-headline-md mb-2 text-primary">
        {title}
      </h3>

      <p className="text-on-surface-variant mb-8 flex-grow">{description}</p>

      <div className="border-t border-outline-variant pt-6 mt-auto">
        <p className="text-label-md text-on-surface-variant">{labels.pricePerTooth}</p>
        <p className="font-display-lg text-[32px] text-primary">{priceFrom}</p>
        {germanyPrice && (
          <p className="text-label-md text-secondary font-bold mt-1 line-through opacity-50">
            {labels.dePrice} {germanyPrice}
          </p>
        )}
      </div>

      {linkTo && (
        <Link
          to={linkTo}
          className="mt-4 text-primary font-label-md uppercase tracking-wider flex items-center gap-2 hover:gap-4 transition-all"
        >
          {labels.details}
          <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
      )}
    </div>
  );
}
