import { useTranslations } from 'next-intl';

const ServicesPage = () => {
  const t = useTranslations('Page.Services');

  return (
    <main>
      { t('meta.title') }
    </main>
  );
};

export default ServicesPage;
