import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Must match the `.js-reveal` selectors in styles/globals.css
const REVEAL_SELECTOR = [
  'main :is(section, header) > div:not(.absolute) > :not(.grid, .flex-wrap, .absolute)',
  'main :is(section, header) > div:not(.absolute) > :is(.grid, .flex-wrap) > *',
  'footer > div > *',
].join(', ');
const STAGGER_MS = 70;
const MAX_STAGGER_STEPS = 6;
const DURATION_MS = 700;

export default function RevealOnScroll() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!document.documentElement.classList.contains('js-reveal')) return;

    const observed = new WeakSet<Element>();

    const reveal = (el: HTMLElement, index: number) => {
      const delay = Math.min(index, MAX_STAGGER_STEPS) * STAGGER_MS;
      el.style.animationDelay = `${delay}ms`;
      // A data attribute survives React re-rendering className; a class would not.
      el.dataset.revealed = '';
      el.classList.add('reveal-run');
      window.setTimeout(() => {
        el.classList.remove('reveal-run');
        el.style.animationDelay = '';
      }, delay + DURATION_MS + 50);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries
          .filter((entry) => entry.isIntersecting)
          .forEach((entry, i) => {
            reveal(entry.target as HTMLElement, i);
            io.unobserve(entry.target);
          });
      },
      { rootMargin: '0px 0px -8% 0px' },
    );

    const scan = () => {
      document.querySelectorAll(REVEAL_SELECTOR).forEach((el) => {
        if (observed.has(el) || (el as HTMLElement).dataset.revealed !== undefined) return;
        observed.add(el);
        io.observe(el);
      });
    };

    let frame = 0;
    const scheduleScan = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(scan);
    };

    scan();
    const main = document.querySelector('main');
    const mo = new MutationObserver(scheduleScan);
    if (main) mo.observe(main, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(frame);
      mo.disconnect();
      io.disconnect();
    };
  }, [pathname]);

  return null;
}
