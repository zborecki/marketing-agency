import { Metadata } from 'next';

import { HeroSection } from '#components/sections/hero';
import { companyName } from '#constants/common';
import { BaseLayout } from '#layouts/base-layout';
import { IInternalization } from '#types/common';
import { translator } from '#utils/translator';

export async function generateMetadata({ params }: IInternalization): Promise<Metadata> {
  const { t } = await translator({ namespace: 'Page.Home', params });

  return {
    title: `${companyName} - ${t('meta.title')}`
  };
}

const HomePage = () => (
  <BaseLayout>
    <main>
      <HeroSection />
    </main>
  </BaseLayout>
);

export default HomePage;
