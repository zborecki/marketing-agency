import { createTranslator } from 'next-intl';

import { Internalization } from '#types/locales';

export interface Parameters extends Internalization {
  namespace?: string;
}

export const translator = async ({ namespace, params: { locale } }: Parameters) => {
  const messages = (await import(`../lang/${locale}.json`)).default;

  return {
    t: createTranslator({ locale, messages, namespace })
  };
};
