import { useTranslations } from 'next-intl';

const AboutUsPage = () => {
  const t = useTranslations('Page.About-us');

  return (
    <main>
      { t('meta.title') }
    </main>
  );
};

export default AboutUsPage;
