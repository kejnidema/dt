import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useI18n, type Lang } from '@/lib/i18n';

const navItems = [
  { labelDe: 'Behandlungen', labelEn: 'Treatments', labelIt: 'Trattamenti', labelSq: 'Trajtimet', path: '/treatments' },
  { labelDe: 'Preise', labelEn: 'Pricing', labelIt: 'Prezzi', labelSq: 'Çmimet', path: '/pricing' },
  { labelDe: 'Veneers', labelEn: 'Veneers', labelIt: 'Faccette', labelSq: 'Fasetat', path: '/veneers' },
  { labelDe: 'Galerie', labelEn: 'Gallery', labelIt: 'Galleria', labelSq: 'Galeria', path: '/veneers/gallery' },
  { labelDe: 'Reise', labelEn: 'Travel', labelIt: 'Viaggio', labelSq: 'Udhëtimi', path: '/journey' },
  { labelDe: 'Über uns', labelEn: 'About Us', labelIt: 'Chi siamo', labelSq: 'Rreth nesh', path: '/about' },
];

const languageOptions: Lang[] = ['de', 'en', 'it', 'sq'];

const labelFor = (lang: Lang, item: (typeof navItems)[number]) =>
  lang === 'de' ? item.labelDe : lang === 'it' ? item.labelIt : lang === 'sq' ? item.labelSq : item.labelEn;

const bookNowLabel = (lang: Lang) =>
  lang === 'de' ? 'Termin buchen' : lang === 'it' ? 'Prenota ora' : lang === 'sq' ? 'Rezervo tani' : 'Book Now';

function isNavActive(pathname: string, itemPath: string) {
  const matchesItem = pathname === itemPath || pathname.startsWith(`${itemPath}/`);
  if (!matchesItem) return false;

  // If another nav item is a more specific match, only underline that one.
  return !navItems.some(
    (other) =>
      other.path !== itemPath &&
      other.path.startsWith(`${itemPath}/`) &&
      (pathname === other.path || pathname.startsWith(`${other.path}/`)),
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { lang, setLang } = useI18n();

  // Close mobile menu on navigation
  const closeMenu = () => setMenuOpen(false);

  // Shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`w-full sticky top-0 z-50 bg-surface border-b border-outline-variant transition-shadow duration-300 h-20 ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-gutter flex justify-between items-center h-full">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-secondary-fixed text-2xl">tooth</span>
          </div>
          <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-primary hidden sm:block">
            Veneer Clinic Tirana
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = isNavActive(location.pathname, item.path);
            const label = labelFor(lang, item);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`font-label-md text-label-md transition-colors duration-200 ${
                  isActive
                    ? 'text-primary border-b-2 border-primary pb-1'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <div className="hidden sm:flex border border-outline-variant rounded-sm overflow-hidden" aria-label="Language selector">
            {languageOptions.map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                className={`font-label-md text-label-md px-3 py-1.5 transition-colors ${
                  lang === code ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Book Now */}
          <Link
            to="/contact"
            className="bg-primary text-on-primary px-6 py-2.5 font-label-md text-label-md rounded-sm hover:opacity-90 active:opacity-80 transition-all"
          >
            {bookNowLabel(lang)}
          </Link>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 text-primary"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-surface border-b border-outline-variant shadow-lg">
          <nav className="flex flex-col p-6 gap-4">
            {navItems.map((item) => {
              const isActive = isNavActive(location.pathname, item.path);
              const label = labelFor(lang, item);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={`font-label-md text-label-md py-2 ${
                    isActive
                      ? 'text-primary font-bold'
                      : 'text-on-surface-variant hover:text-primary'
                  }`}
                >
                  {label}
                </Link>
              );
            })}
            <div className="flex items-center gap-3 pt-4 border-t border-outline-variant">
              <div className="flex border border-outline-variant rounded-sm overflow-hidden" aria-label="Language selector">
                {languageOptions.map((code) => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setLang(code)}
                    className={`font-label-md text-label-md px-3 py-1.5 ${
                      lang === code ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:text-primary'
                    }`}
                  >
                    {code.toUpperCase()}
                  </button>
                ))}
              </div>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="bg-primary text-on-primary px-6 py-3 font-label-md rounded-sm w-full text-center"
              >
                {bookNowLabel(lang)}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
