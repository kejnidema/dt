import { useEffect, useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const STORAGE_PREFIX = 'vct-scroll:';

function storageKey(pathname: string, search: string) {
  return `${STORAGE_PREFIX}${pathname}${search}`;
}

function readScroll(key: string) {
  const value = sessionStorage.getItem(key);
  if (value === null) return 0;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function saveScroll(key: string) {
  sessionStorage.setItem(key, String(window.scrollY));
}

function restoreScroll(top: number) {
  // Set all common scroll roots. This makes restoration reliable across browsers/nginx builds.
  window.scrollTo(0, top);
  document.documentElement.scrollTop = top;
  document.body.scrollTop = top;
}

export default function ScrollMemory() {
  const location = useLocation();
  const key = storageKey(location.pathname, location.search);
  const activeKey = useRef(key);
  const ticking = useRef(false);

  useEffect(() => {
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';
    return () => {
      window.history.scrollRestoration = previous;
    };
  }, []);

  useLayoutEffect(() => {
    // Persist the page we are leaving before React paints the next route.
    saveScroll(activeKey.current);

    activeKey.current = key;
    const top = readScroll(key); // first visit => 0, revisits => remembered position

    restoreScroll(top);

    // Run again after layout/images have had a chance to affect page height.
    const frame = requestAnimationFrame(() => restoreScroll(top));
    const timeout = window.setTimeout(() => restoreScroll(top), 75);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
    };
  }, [key]);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        saveScroll(activeKey.current);
        ticking.current = false;
      });
    };

    const onBeforeUnload = () => saveScroll(activeKey.current);

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('beforeunload', onBeforeUnload);

    return () => {
      saveScroll(activeKey.current);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('beforeunload', onBeforeUnload);
    };
  }, []);

  return null;
}
