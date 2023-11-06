import { PropsWithChildren } from 'react';

import { TLanguage } from '#types/common';

export interface LocaleLayoutProps extends PropsWithChildren {
  params: {
    locale: TLanguage;
  }
}
