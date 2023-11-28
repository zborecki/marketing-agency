import { Metadata } from 'next';

import { AchievementsSection } from '#/sections/achievements';
import { AdvantagesSection } from '#/sections/advantages';
import { HeroSection } from '#/sections/hero';
import { StatsSection } from '#/sections/stats';
import { Divider } from '#components/divider';
import { companyName } from '#constants/common';
import { BaseLayout } from '#layouts/base-layout';
import { CustomersSection } from '#sections/customers';
import { TestimonialsSection } from '#sections/testimonials';
import { Internalization } from '#types/locales';
import { translator } from '#utils/translator';

export async function generateMetadata({ params }: Internalization): Promise<Metadata> {
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
      <AchievementsSection />
      <TestimonialsSection />
      <CustomersSection />
    </main>
  </BaseLayout>
);

export default HomePage;
