import { useLocale } from 'next-intl';
import { v4 as uuid } from 'uuid';

import { SectionContainer } from '#components/section/container';
import { StatsCard } from '#components/stats-card';
import { getStatsSection } from '#services/sections';

export const StatsSection = async () => {
  const locale = useLocale();
  const { cards } = await getStatsSection({ locale });

  return (
    <SectionContainer className="ma-stats" color="white">
      {
        cards.map(({ description, value, type }) => (
          <StatsCard
            description={description}
            key={uuid()}
            type={type}
            value={value}
          />
        ))
      }
    </SectionContainer>
  );
};
