import { useRef, useState, useCallback } from 'react';

interface Props {
  beforeImage: string;
  afterImage: string;
  aspectRatio?: 'tall' | 'square' | 'wide';
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
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = useCallback((clientX: number) => {
    const ref = containerRef.current;
    if (!ref) return;
    const rect = ref.getBoundingClientRect();
    let x = clientX - rect.left;
    if (x < 0) x = 0;
    if (x > rect.width) x = rect.width;
    setPosition((x / rect.width) * 100);
  }, []);

  const onMouseDown = () => setIsDragging(true);
  const onMouseUp = () => setIsDragging(false);
  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    if (touch) handleMove(touch.clientX);
  };

  const onClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className="relative group">
      <div
        ref={containerRef}
        className={`before-after-container rounded-xl ${aspectClasses[aspectRatio]} bg-surface-container-high shadow-2xl relative overflow-hidden cursor-ew-resize`}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        onTouchStart={onMouseDown}
        onTouchEnd={onMouseUp}
        onTouchMove={onTouchMove}
        onClick={onClick}
      >
        {/* After Image (Always Visible Base) */}
        <div className="absolute inset-0">
          <img
            src={afterImage}
            alt="After"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 right-4 bg-primary/80 text-white px-4 py-1 rounded-sm text-label-md backdrop-blur-md">
            NACHHER
          </div>
        </div>

        {/* Before Image (Clipped Overlay) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <img
            src={beforeImage}
            alt="Before"
            className="w-[200%] h-full object-cover max-w-none"
            style={{ maxWidth: 'none' }}
          />
          <div className="absolute bottom-4 left-4 bg-primary/80 text-white px-4 py-1 rounded-sm text-label-md backdrop-blur-md">
            VORHER
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
