import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';

const navItems = [
  { labelDe: 'Behandlungen', labelEn: 'Treatments', path: '/treatments' },
  { labelDe: 'Preise', labelEn: 'Pricing', path: '/pricing' },
  { labelDe: 'Veneers', labelEn: 'Veneers', path: '/veneers' },
  { labelDe: 'Galerie', labelEn: 'Gallery', path: '/veneers/gallery' },
  { labelDe: 'Reise', labelEn: 'Travel', path: '/journey' },
  { labelDe: 'Über uns', labelEn: 'About Us', path: '/about' },
];

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
            const label = lang === 'de' ? item.labelDe : item.labelEn;
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
          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === 'de' ? 'en' : 'de')}
            className="hidden sm:flex font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors px-3 py-1.5 border border-outline-variant rounded-sm"
          >
            {lang === 'de' ? 'EN' : 'DE'}
          </button>

          {/* Book Now */}
          <Link
            to="/contact"
            className="bg-primary text-on-primary px-6 py-2.5 font-label-md text-label-md rounded-sm hover:opacity-90 active:opacity-80 transition-all"
          >
            {lang === 'de' ? 'Termin buchen' : 'Book Now'}
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
              const label = lang === 'de' ? item.labelDe : item.labelEn;
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
              <button
                onClick={() => setLang(lang === 'de' ? 'en' : 'de')}
                className="font-label-md text-label-md text-on-surface-variant hover:text-primary px-3 py-1.5 border border-outline-variant rounded-sm"
              >
                {lang === 'de' ? 'EN' : 'DE'}
              </button>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="bg-primary text-on-primary px-6 py-3 font-label-md rounded-sm w-full text-center"
              >
                {lang === 'de' ? 'Termin buchen' : 'Book Now'}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
