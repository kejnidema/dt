import { useI18n } from '@/lib/i18n';

interface TrustItem {
  icon: string;
  title: Record<'de' | 'en', string>;
  subtitle: Record<'de' | 'en', string>;
}

const trustItems: TrustItem[] = [
  {
    icon: 'verified_user',
    title: { de: 'ISO-Zertifiziert', en: 'ISO Certified' },
    subtitle: { de: 'Deutsche Qualitätsstandards', en: 'German quality standards' },
  },
  {
    icon: 'star',
    title: { de: '4.9/5 Google Reviews', en: '4.9/5 Google Reviews' },
    subtitle: { de: '500+ glückliche Patienten', en: '500+ happy patients' },
  },
  {
    icon: 'flight_takeoff',
    title: { de: '2 Std. von Frankfurt', en: '2 hrs from Frankfurt' },
    subtitle: { de: 'Täglich Direktflüge', en: 'Daily direct flights' },
  },
  {
    icon: 'payments',
    title: { de: '-70% Kosten', en: '-70% Costs' },
    subtitle: { de: 'Beste Preisgarantie', en: 'Best price guarantee' },
  },
];

export default function TrustBar() {
  const { lang } = useI18n();

  return (
    <section className="bg-primary py-12">
      <div className="max-w-[1200px] mx-auto px-gutter">
        <div className="flex flex-wrap justify-between items-center gap-8 md:gap-12 text-on-primary">
          {trustItems.map((item) => (
            <div key={item.icon} className="flex items-center gap-4 group cursor-default">
              <div className="w-12 h-12 rounded-full bg-on-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-secondary-fixed">{item.icon}</span>
              </div>
              <div>
                <p className="font-headline-sm text-[18px] leading-tight">{item.title[lang]}</p>
                <p className="text-label-md opacity-70">{item.subtitle[lang]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
