import { PropsWithChildren } from 'react';

import { Internalization, Locale } from '#types/locales';

export type BaseLayoutProps = Internalization & PropsWithChildren;

export interface DynamicLayoutProps extends BaseLayoutProps {
  params: {
    locale: Locale;
    slug: string;
  };
}
