'use client';
import { useTranslations } from 'next-intl';

type FaqItem = {
  q: string;
  a: string;
};

export default function Faq() {
  const t = useTranslations('faq');
  const items = t.raw('items') as FaqItem[];

  return (
    <section id="faq" className="section">
      <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>
        {t('title')}
      </h2>
      <div className="grid gap-4 max-w-4xl">
        {items.map((item, index) => (
          <details
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-sm group"
          >
            <summary
              className="cursor-pointer list-none font-semibold flex items-start justify-between gap-4"
              style={{ color: 'var(--text-primary)' }}
            >
              <span>{item.q}</span>
              <span className="text-xl leading-none transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
