import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['es', 'en', 'fr', 'zh-Hant'],
  defaultLocale: 'es',
  localePrefix: 'as-needed'
});
