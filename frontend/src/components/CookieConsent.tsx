import { useEffect, useState } from 'react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  useEffect(() => setVisible(localStorage.getItem('cookie-consent') !== 'accepted'), []);
  if (!visible) return null;
  return (
    <div className="fixed left-4 right-4 bottom-4 z-[60] max-w-3xl mx-auto bg-white border border-outline-variant rounded-xl shadow-2xl p-5 flex flex-col md:flex-row gap-4 items-start md:items-center">
      <div className="flex-1 text-sm text-on-surface-variant">
        <strong className="text-primary">Cookies & Datenschutz.</strong> Wir nutzen notwendige Cookies und optionale Analyse-Cookies, um diese Website zu verbessern.
      </div>
      <div className="flex gap-3">
        <button onClick={() => setVisible(false)} className="px-4 py-2 border border-outline-variant rounded-sm">Ablehnen</button>
        <button onClick={() => { localStorage.setItem('cookie-consent', 'accepted'); setVisible(false); }} className="px-4 py-2 bg-primary text-on-primary rounded-sm">Akzeptieren</button>
      </div>
    </div>
  );
}
