import { useLocale } from 'next-intl';

import { SectionContainer } from '#components/section/container';
import { StatsList } from '#components/stats-list';
import { getStatsSection } from '#services/sections';

export const StatsSection = async () => {
  const locale = useLocale();
  const { cards } = await getStatsSection({ locale });

  return (
    <SectionContainer color="primary">
      <StatsList items={cards} />
    </SectionContainer>
  );
};
