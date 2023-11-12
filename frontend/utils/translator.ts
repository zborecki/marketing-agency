import { createTranslator } from 'next-intl';

import { IInternalization } from '#types/common';

export interface Parameters extends IInternalization {
  namespace?: string;
}

export const translator = async ({ namespace, params: { locale } }:Parameters) => {
  const messages = (await import(`../lang/${locale}.json`)).default;

  return {
    t: createTranslator({ locale, messages, namespace })
  };
};
