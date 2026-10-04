import { useState } from 'react';

/** Shows a neutral placeholder until the photo at `src` has loaded */
export default function PlaceholderPhoto({ src, label, className = '' }: { src?: string; label: string; className?: string }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`relative overflow-hidden bg-surface-container ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-surface-container to-surface-container-high">
          <div className="text-center text-on-surface-variant">
            <span className="material-symbols-outlined text-[40px] opacity-60">add_photo_alternate</span>
            <p className="text-[12px] uppercase tracking-wider mt-1 opacity-70">{label}</p>
          </div>
        </div>
      )}
      {src && (
        <img
          src={src}
          alt={label}
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(false)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity ${loaded ? 'opacity-100' : 'opacity-0'}`}
        />
      )}
    </div>
  );
}
