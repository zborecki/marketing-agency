import { Metadata } from 'next';

import { Divider } from '#components/common/divider';
import { AdvantagesSection } from '#components/sections/advantages';
import { HeroSection } from '#components/sections/hero';
import { StatsSection } from '#components/sections/stats';
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
      <StatsSection />
      <Divider />
      <AdvantagesSection />
    </main>
  </BaseLayout>
);

export default HomePage;
