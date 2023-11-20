import { useTranslations } from 'next-intl';

const currentYear = new Date().getFullYear();

export const Bottom = () => {
  const t = useTranslations('Component.Footer');

  return (
    <div className="ma-footer__bottom">
      <p className="ma-footer__copyright">
        { `\u00a9 ${t('copyright', { year: currentYear })}` }
      </p>
    </div>
  );
};
