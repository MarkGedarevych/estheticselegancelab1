'use client';

import { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface BlogFAQSectionProps {
  faqs: FAQ[];
  title?: string;
}

export default function BlogFAQSection({ faqs, title = "Frequently Asked Questions" }: BlogFAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12">
      <h2 className="font-[family-name:var(--font-heading)] text-3xl font-medium text-[var(--color-text-main)] mb-8 text-center">
        {title}
      </h2>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[var(--color-section)] rounded-2xl overflow-hidden transition-all"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left"
            >
              <span className="font-medium text-[var(--color-text-main)] pr-4">
                {faq.question}
              </span>
              <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-primary)]/30 flex items-center justify-center transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                <svg 
                  className="w-4 h-4 text-[var(--color-text-main)]" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="px-6 pb-5 text-[var(--color-text-muted)] leading-relaxed">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

