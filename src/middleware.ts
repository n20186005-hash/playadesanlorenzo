import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware({
  ...routing,
  // Completely disable automatic locale detection and redirection
  // This is crucial for Google Search Console to index the site without "Redirect error"
  localeDetection: false,
  // Do not redirect the root path to a locale prefix
  // It will be served at the root URL (/) using the defaultLocale ('es')
  localePrefix: 'as-needed'
});

export const config = {
  // Match all pathnames except for
  // - ... if they start with `/api`, `/_next` or `/_vercel`
  // - ... the ones containing a dot (e.g. `favicon.ico`)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};