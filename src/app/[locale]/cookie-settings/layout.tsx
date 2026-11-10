import { getTranslations } from 'next-intl/server';
import { pageMetadata } from '@/lib/seo';
export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'cookieSettings'});
  return pageMetadata(locale, '/cookie-settings', t('title'), t('intro'));
}
export default function Layout({children}: {children: React.ReactNode}) {return children;}
