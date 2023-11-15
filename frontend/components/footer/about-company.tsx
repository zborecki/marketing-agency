import { useTranslations } from 'next-intl';

import { Logo } from '#components/logo';

export const AboutCompany = () => {
  const t = useTranslations('Component.Footer');

  return (
    <div>
      <Logo className="ma-footer__logo" />
      <p className="ma-footer__about-company">{ t('about-company') }</p>
    </div>
  );
};
