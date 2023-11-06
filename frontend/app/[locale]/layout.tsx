import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { notFound } from 'next/navigation';
import { FC } from 'react';

import { locales } from '#constants/languages';
import { GlobalStylesLayout } from '#layouts/global-styles-layout';
import { LocaleLayoutProps } from '#types/props/layouts';

const font = Poppins({
  subsets: ['latin'],
  weight: ['400']
});

export const metadata: Metadata = {
  title: 'Marketing Agency'
};

const RootLayout: FC<LocaleLayoutProps> = ({ children, params: { locale } }) => {
  const isValidLocale = locales.some((currentLocale) => currentLocale === locale);

  if (!isValidLocale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={font.className}>
        <GlobalStylesLayout>
          { children }
        </GlobalStylesLayout>
      </body>
    </html>
  );
};

export default RootLayout;
