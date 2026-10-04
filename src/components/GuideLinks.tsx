'use client';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

type GuideCard = {
  slug: string;
  title: string;
  description: string;
  cta: string;
};

export default function GuideLinks() {
  const t = useTranslations('guideLinks');
  const cards = t.raw('cards') as GuideCard[];

  return (
    <section className="section">
      <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
        {t('title')}
      </h2>
      <p className="mb-8 max-w-3xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        {t('description')}
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div key={card.slug} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border" style={{ borderColor: 'var(--border-color)' }}>
            <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              {card.title}
            </h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
              {card.description}
            </p>
            <Link href={`/${card.slug}`} className="btn-primary">
              {card.cta}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
