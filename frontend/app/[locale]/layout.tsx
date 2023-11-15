import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { notFound } from 'next/navigation';
import { FC } from 'react';

import { companyName } from '#constants/common';
import { locales } from '#constants/languages';
import { GlobalStylesLayout } from '#layouts/global-styles-layout';
import { BaseLayoutProps } from '#types/props/layouts';

const font = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700']
});

export const metadata: Metadata = {
  title: companyName
};

const RootLayout: FC<BaseLayoutProps> = ({
  children,
  params: { locale }
}) => {
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
