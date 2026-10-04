import { getTranslations, setRequestLocale } from 'next-intl/server';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Explore from '@/components/Explore';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import Comparison from '@/components/Comparison';
import Practical from '@/components/Practical';
import MapEmbed from '@/components/MapEmbed';
import References from '@/components/References';
import Faq from '@/components/Faq';
import GuideLinks from '@/components/GuideLinks';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const faqT = await getTranslations({ locale, namespace: 'faq' });
  const metaT = await getTranslations({ locale, namespace: 'meta' });
  const heroT = await getTranslations({ locale, namespace: 'hero' });
  const pagePath = locale === 'es' ? '' : `/${locale}`;
  const faqItems = faqT.raw('items') as Array<{ q: string; a: string }>;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TouristAttraction',
        name: heroT('title'),
        description: metaT('description'),
        url: `https://www.playadesanlorenzo.com${pagePath}`,
        image: 'https://www.playadesanlorenzo.com/gallery/images%20(1).jpg',
        sameAs: [
          'https://maps.app.goo.gl/aqnvo1aDhdaWHtMQA',
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.7',
          reviewCount: '3269',
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Paseo del Muro, Av. Rufo García Rendueles',
          addressLocality: 'Gijón',
          addressRegion: 'Asturias',
          postalCode: '33203',
          addressCountry: 'ES',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 43.5410462,
          longitude: -5.6500665,
        },
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
      <Hero />
      <About />
      <Explore />
      <Gallery />
      <Reviews />
      <Comparison />
      <Practical />
      <GuideLinks />
      <MapEmbed />
      <Faq />
      <References />
    </>
  );
}
