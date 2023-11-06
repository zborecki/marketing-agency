import createMiddleware from 'next-intl/middleware';

import { defaultLocale, locales } from '#constants/languages';

export default createMiddleware({
  defaultLocale,
  locales,
  pathnames: {
    '/': '/',
    '/about-us': {
      en: '/about-us',
      pl: '/o-nas'
    },
    '/blog': '/blog',
    '/contacts': {
      en: '/contacts',
      pl: '/kontakt'
    },
    '/services': {
      en: '/services',
      pl: '/uslugi'
    }
  }
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
