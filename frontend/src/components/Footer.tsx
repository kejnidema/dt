import { Link } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';

export default function Footer() {
  const { lang } = useI18n();

  const t = {
    de: {
      brand: 'Veneer Clinic Tirana',
      tagline: 'Premium Boutique-Zahnmedizin in Tirana. Spezialisiert auf Veneers und digitale Lächeln-Gestaltung für Patienten aus ganz Europa.',
      treatments: 'Behandlungen',
      patients: 'Patienten-Service',
      contact: 'Kontakt',
      veneerProcedure: 'Veneer Procedure',
      digitalSmile: 'Digital Smile Design',
      implantology: 'Implantology',
      journey: 'Patient Journey',
      costComparison: 'Cost Comparison',
      privacy: 'Privacy Policy',
      imprint: 'Imprint',
      address: 'Rr. Ibrahim Rugova, 1001 Tirana, Albanien',
      phone: '+355 69 00 00 000',
      email: 'info@veneerclinictirana.com',
      copyright: '© 2024 Veneer Clinic Tirana. All Rights Reserved. German Quality, Albanian Hospitality.',
    },
    en: {
      brand: 'Veneer Clinic Tirana',
      tagline: 'Premium boutique dentistry in Tirana. Specializing in veneers and digital smile design for patients across Europe.',
      treatments: 'Treatments',
      patients: 'Patient Services',
      contact: 'Contact',
      veneerProcedure: 'Veneer Procedure',
      digitalSmile: 'Digital Smile Design',
      implantology: 'Implantology',
      journey: 'Patient Journey',
      costComparison: 'Cost Comparison',
      privacy: 'Privacy Policy',
      imprint: 'Imprint',
      address: 'Rr. Ibrahim Rugova, 1001 Tirana, Albania',
      phone: '+355 69 00 00 000',
      email: 'info@veneerclinictirana.com',
      copyright: '© 2024 Veneer Clinic Tirana. All Rights Reserved. German Quality, Albanian Hospitality.',
    },
  }[lang === 'de' ? 'de' : 'en'];

  return (
    <footer className="bg-primary text-on-primary w-full mt-auto">
      <div className="max-w-[1200px] mx-auto px-gutter py-section-padding grid grid-cols-1 md:grid-cols-4 gap-gutter">
        {/* Brand */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-on-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary-fixed text-lg">tooth</span>
            </div>
            <span className="font-headline-md text-headline-md">{t.brand}</span>
          </div>
          <p className="font-body-md text-outline-variant leading-relaxed">{t.tagline}</p>
        </div>

        {/* Treatments */}
        <div>
          <h4 className="font-label-md text-label-md uppercase tracking-widest text-secondary-fixed mb-6">
            {t.treatments}
          </h4>
          <ul className="space-y-4">
            <li>
              <Link to="/veneers/emax" className="text-outline-variant hover:text-secondary-fixed transition-all underline-offset-4 hover:underline">
                {t.veneerProcedure}
              </Link>
            </li>
            <li>
              <Link to="/veneers" className="text-outline-variant hover:text-secondary-fixed transition-all underline-offset-4 hover:underline">
                {t.digitalSmile}
              </Link>
            </li>
            <li>
              <Link to="/treatments" className="text-outline-variant hover:text-secondary-fixed transition-all underline-offset-4 hover:underline">
                {t.implantology}
              </Link>
            </li>
          </ul>
        </div>

        {/* Patients */}
        <div>
          <h4 className="font-label-md text-label-md uppercase tracking-widest text-secondary-fixed mb-6">
            {t.patients}
          </h4>
          <ul className="space-y-4">
            <li>
              <Link to="/journey" className="text-outline-variant hover:text-secondary-fixed transition-all underline-offset-4 hover:underline">
                {t.journey}
              </Link>
            </li>
            <li>
              <Link to="/veneers/cost-comparison" className="text-outline-variant hover:text-secondary-fixed transition-all underline-offset-4 hover:underline">
                {t.costComparison}
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="text-outline-variant hover:text-secondary-fixed transition-all underline-offset-4 hover:underline">
                {t.privacy}
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-label-md text-label-md uppercase tracking-widest text-secondary-fixed mb-6">
            {t.contact}
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-[18px] text-outline-variant">location_on</span>
              <span className="text-outline-variant">{t.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-outline-variant">call</span>
              <span className="text-outline-variant">{t.phone}</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-outline-variant">mail</span>
              <span className="text-outline-variant">{t.email}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-[1200px] mx-auto px-gutter py-8 border-t border-on-primary/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-body-md text-outline-variant text-center md:text-left">{t.copyright}</p>
        <div className="flex gap-6">
          <Link to="/privacy" className="text-outline-variant hover:text-secondary-fixed transition-all">
            {t.privacy}
          </Link>
          <Link to="/imprint" className="text-outline-variant hover:text-secondary-fixed transition-all">
            {t.imprint}
          </Link>
        </div>
      </div>
    </footer>
  );
}
