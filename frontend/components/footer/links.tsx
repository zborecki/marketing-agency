import { useTranslations } from 'next-intl';

import { Block } from '#components/footer/block';
import { Navigation } from '#components/navigation';

export const Links = () => {
  const t = useTranslations('Component.Footer');

  return (
    <Block className="ma-footer__links" title={t('title.about-company')}>
      <Navigation className="ma-footer__navigation" />
    </Block>
  );
};
