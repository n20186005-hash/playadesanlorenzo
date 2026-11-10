import type { Metadata } from 'next';
export const siteUrl = 'https://www.playadesanlorenzo.com';
export const locales = ['es', 'en', 'fr', 'zh-Hant'] as const;
export function localizedPath(locale: string, path = '') {
  return `${locale === 'es' ? '' : `/${locale}`}${path}` || '/';
}
export function pageMetadata(locale: string, path: string, title: string, description: string): Metadata {
  return {
    title, description,
    alternates: {
      canonical: localizedPath(locale, path),
      languages: {...Object.fromEntries(locales.map(l => [l, localizedPath(l, path)])), 'x-default': localizedPath('es', path)},
    },
    openGraph: {title, description, url: localizedPath(locale, path), type: 'website', locale},
  };
}
