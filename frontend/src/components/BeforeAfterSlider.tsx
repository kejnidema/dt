import { useRef, useState, useCallback } from 'react';

interface Props {
  beforeImage: string;
  afterImage: string;
  aspectRatio?: 'tall' | 'square' | 'wide';
  beforeLabel?: string;
  afterLabel?: string;
  initialPosition?: number;
}

const aspectClasses = {
  tall: 'aspect-[4/5]',
  square: 'aspect-square',
  wide: 'aspect-video',
};

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  aspectRatio = 'tall',
  beforeLabel = 'VORHER',
  afterLabel = 'NACHHER',
  initialPosition = 50,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(initialPosition);

  const handleMove = useCallback((clientX: number) => {
    const ref = containerRef.current;
    if (!ref) return;
    const rect = ref.getBoundingClientRect();
    let x = clientX - rect.left;
    if (x < 0) x = 0;
    if (x > rect.width) x = rect.width;
    setPosition((x / rect.width) * 100);
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    handleMove(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.buttons === 1) handleMove(e.clientX);
  };

  return (
    <div className="relative group">
      <div
        ref={containerRef}
        className={`before-after-container rounded-xl ${aspectClasses[aspectRatio]} bg-surface-container-high shadow-2xl relative overflow-hidden cursor-ew-resize`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
      >
        {/* After Image (Always Visible Base) */}
        <div className="absolute inset-0">
          <img
            src={afterImage}
            alt="After"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 right-4 bg-primary/80 text-white px-4 py-1 rounded-sm text-label-md backdrop-blur-md">
            {afterLabel}
          </div>
        </div>

        {/* Before Image (Clipped Overlay) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <img
            src={beforeImage}
            alt="Before"
            className="w-full h-full object-cover"
            draggable={false}
          />
          <div className="absolute bottom-4 left-4 bg-primary/80 text-white px-4 py-1 rounded-sm text-label-md backdrop-blur-md">
            {beforeLabel}
          </div>
        </div>

        {/* Slider UI */}
        <div
          className="before-after-slider"
          style={{ left: `${position}%` }}
        >
          <div className="before-after-handle">
            <span className="material-symbols-outlined">unfold_more</span>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute -z-10 -bottom-8 -right-8 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
    </div>
  );
}
