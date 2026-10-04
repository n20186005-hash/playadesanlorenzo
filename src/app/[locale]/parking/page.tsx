import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import GuidePage from '@/components/GuidePage';

type GuideCard = {
  slug: string;
  title: string;
  description: string;
  cta: string;
};

type GuideSection = {
  title: string;
  paragraphs: string[];
  items?: string[];
};

type FaqItem = {
  q: string;
  a: string;
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guideParking.meta' });
  const canonical = locale === 'es' ? '/parking' : `/${locale}/parking`;

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical,
      languages: {
        es: '/parking',
        en: '/en/parking',
        fr: '/fr/parking',
        'zh-Hant': '/zh-Hant/parking',
      },
    },
  };
}

export default async function ParkingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'guideParking' });
  const linksT = await getTranslations({ locale, namespace: 'guideLinks' });
  const faqItems = t.raw('faqItems') as FaqItem[];
  const sections = t.raw('sections') as GuideSection[];
  const cards = linksT.raw('cards') as GuideCard[];
  const relatedGuides = cards
    .filter((card) => card.slug !== 'parking')
    .map((card) => ({ href: `/${card.slug}`, title: card.title, description: card.description, cta: card.cta }));
  const pagePath = locale === 'es' ? '/parking' : `/${locale}/parking`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        name: t('title'),
        description: t('description'),
        url: `https://www.playadesanlorenzo.com${pagePath}`,
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GuidePage
        backHome={t('backHome')}
        title={t('title')}
        description={t('description')}
        lastUpdated={t('lastUpdated')}
        highlightsTitle={t('highlightsTitle')}
        highlights={t.raw('highlights') as string[]}
        sections={sections}
        faqTitle={t('faqTitle')}
        faqItems={faqItems}
        mapCta={t('mapCta')}
        relatedTitle={t('relatedTitle')}
        relatedGuides={relatedGuides}
      />
    </>
  );
}
