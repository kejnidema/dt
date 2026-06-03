import { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-surface border border-outline-variant overflow-hidden rounded-lg"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-surface-container transition-colors"
          >
            <span className="font-label-md text-primary pr-4">{item.question}</span>
            <span
              className="material-symbols-outlined flex-shrink-0 transition-transform duration-300"
              style={{
                transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
              }}
            >
              expand_more
            </span>
          </button>
          <div
            className="overflow-hidden transition-all duration-300 ease-in-out"
            style={{
              maxHeight: openIndex === index ? '500px' : '0px',
            }}
          >
            <div className="px-6 py-4 border-t border-outline-variant">
              <p className="font-body-md text-on-surface-variant">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
