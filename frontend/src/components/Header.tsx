import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useI18n, type Lang } from '@/lib/i18n';
import { treatments } from '@/pages/TreatmentsPage';

const navItems = [
  { labelDe: 'Behandlungen', labelEn: 'Treatments', labelIt: 'Trattamenti', labelSq: 'Trajtimet', path: '/treatments', children: treatments },
  { labelDe: 'Preise', labelEn: 'Pricing', labelIt: 'Prezzi', labelSq: 'Çmimet', path: '/pricing' },
  { labelDe: 'Galerie', labelEn: 'Gallery', labelIt: 'Galleria', labelSq: 'Galeria', path: '/veneers/gallery' },
  { labelDe: 'Reise', labelEn: 'Travel', labelIt: 'Viaggio', labelSq: 'Udhëtimi', path: '/journey' },
  { labelDe: 'Über uns', labelEn: 'About Us', labelIt: 'Chi siamo', labelSq: 'Rreth nesh', path: '/about' },
];

const languageOptions: Lang[] = ['de', 'en', 'it', 'sq'];

const labelFor = (lang: Lang, item: { labelDe: string; labelEn: string; labelIt: string; labelSq: string }) =>
  lang === 'de' ? item.labelDe : lang === 'it' ? item.labelIt : lang === 'sq' ? item.labelSq : item.labelEn;

const bookNowLabel = (lang: Lang) =>
  lang === 'de' ? 'Termin buchen' : lang === 'it' ? 'Prenota ora' : lang === 'sq' ? 'Rezervo tani' : 'Book Now';

function pathMatches(pathname: string, itemPath: string) {
  return pathname === itemPath || pathname.startsWith(`${itemPath}/`);
}

function isNavActive(pathname: string, item: (typeof navItems)[number]) {
  if (pathMatches(pathname, item.path)) return true;

  const anotherTopLevelItemMatches = navItems.some(
    (other) => other.path !== item.path && pathMatches(pathname, other.path),
  );
  if (anotherTopLevelItemMatches) return false;

  return item.children?.some((child) => pathMatches(pathname, child.link)) ?? false;
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
            const isActive = isNavActive(location.pathname, item);
            const label = labelFor(lang, item);

            if (item.children) {
              return (
                <div key={item.path} className="relative group h-20 flex items-center">
                  <Link
                    to={item.path}
                    className={`font-label-md text-label-md transition-colors duration-200 flex items-center gap-1 ${
                      isActive
                        ? 'text-primary border-b-2 border-primary pb-1'
                        : 'text-on-surface-variant hover:text-primary'
                    }`}
                  >
                    {label}
                    <span className="material-symbols-outlined text-[18px]">expand_more</span>
                  </Link>

                  <div className="invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 focus-within:visible focus-within:opacity-100 focus-within:translate-y-0 transition-all duration-200 absolute left-0 top-full w-72 bg-white border border-outline-variant rounded-xl shadow-xl p-3">
                    {item.children.map((child) => (
                      <Link
                        key={`${child.link}-${child.title}`}
                        to={child.link}
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors"
                      >
                        <span className="material-symbols-outlined text-secondary">{child.icon}</span>
                        <span className="font-label-md text-label-md">{child.title}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

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
              const isActive = isNavActive(location.pathname, item);
              const label = labelFor(lang, item);

              if (item.children) {
                return (
                  <div key={item.path} className="space-y-2">
                    <Link
                      to={item.path}
                      onClick={closeMenu}
                      className={`font-label-md text-label-md py-2 flex items-center justify-between ${
                        isActive
                          ? 'text-primary font-bold'
                          : 'text-on-surface-variant hover:text-primary'
                      }`}
                    >
                      {label}
                      <span className="material-symbols-outlined text-[18px]">expand_more</span>
                    </Link>
                    <div className="pl-4 border-l border-outline-variant flex flex-col gap-1">
                      {item.children.map((child) => (
                        <Link
                          key={`${child.link}-${child.title}`}
                          to={child.link}
                          onClick={closeMenu}
                          className="flex items-center gap-3 py-2 text-on-surface-variant hover:text-primary"
                        >
                          <span className="material-symbols-outlined text-secondary text-[20px]">{child.icon}</span>
                          <span className="font-label-md text-label-md">{child.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

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
