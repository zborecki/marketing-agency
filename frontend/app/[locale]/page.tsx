import { useTranslations } from 'next-intl';

import { BaseLayout } from '#layouts/base-layout';

const HomePage = () => {
  const t = useTranslations('Page.Home');

  return (
    <BaseLayout>
      <main>
        { t('meta.title') }
      </main>
    </BaseLayout>
  );
};

export default HomePage;
