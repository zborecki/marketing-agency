import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { FC } from 'react';

import { companyName } from '#constants/common';
import { locales } from '#constants/languages';
import { ReduxProvider } from '#providers/redux-provider';
import { ThemeProvider } from '#providers/theme-provider';
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
  const messages = useMessages();
  const isValidLocale = locales.some((currentLocale) => currentLocale === locale);

  if (!isValidLocale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={font.className}>
        <ReduxProvider>
          <ThemeProvider>
            <NextIntlClientProvider locale={locale} messages={messages}>
              { children }
            </NextIntlClientProvider>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
};

export default RootLayout;
