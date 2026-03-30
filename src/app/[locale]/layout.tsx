import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import '../globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'meta' });
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      languages: {
        'es': '/',
        'en': '/en',
        'fr': '/fr',
        'zh-Hant': '/zh-Hant',
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="alternate" hrefLang="es" href="https://sanmartinsbridge.com" />
        <link rel="alternate" hrefLang="en" href="https://sanmartinsbridge.com/en" />
        <link rel="alternate" hrefLang="fr" href="https://sanmartinsbridge.com/fr" />
        <link rel="alternate" hrefLang="zh-Hant" href="https://sanmartinsbridge.com/zh-Hant" />
        <link rel="alternate" hrefLang="x-default" href="https://sanmartinsbridge.com" />
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const theme = localStorage.getItem('theme');
              if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
              }
            })();
          `,
        }} />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
