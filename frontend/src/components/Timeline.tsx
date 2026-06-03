export interface TimelineStep {
  number: number;
  icon: string;
  title: string;
  description: string;
  imageUrl?: string;
}

interface TimelineProps {
  steps: TimelineStep[];
}

export default function Timeline({ steps }: TimelineProps) {
  return (
    <div className="relative">
      {steps.map((step, index) => {
        const isEven = index % 2 === 0;
        return (
          <div
            key={step.number}
            className={`flex flex-col ${
              isEven ? 'md:flex-row' : 'md:flex-row-reverse'
            } items-center mb-24 last:mb-0 gap-12 group`}
          >
            {/* Text Content */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className={`max-w-md ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                <span className="font-display-lg text-display-lg text-outline-variant/30 select-none block">
                  {String(step.number).padStart(2, '0')}
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-4">
                  {step.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {step.description}
                </p>
              </div>
            </div>

            {/* Center Icon */}
            <div className="hidden md:flex flex-col items-center relative">
              <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center bg-surface-bright z-10 group-hover:border-secondary transition-colors">
                <span className="material-symbols-outlined text-primary">
                  {step.icon}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute top-12 bottom-[-96px] w-[1px] bg-outline-variant" />
              )}
            </div>

            {/* Image */}
            <div className="w-full md:w-1/2">
              {step.imageUrl ? (
                <img
                  src={step.imageUrl}
                  alt={step.title}
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
              ) : (
                <div className="w-full h-80 bg-surface-container rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-6xl text-outline-variant">
                    {step.icon}
                  </span>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
