import { getTranslations } from 'next-intl/server';
import { pageMetadata } from '@/lib/seo';
export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'privacy'});
  return pageMetadata(locale, '/privacy-policy', t('title'), t('intro'));
}
export default function Layout({children}: {children: React.ReactNode}) {return children;}
