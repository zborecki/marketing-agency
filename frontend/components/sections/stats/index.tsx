import { useLocale } from 'next-intl';
import { v4 as uuid } from 'uuid';

import { Section } from '#components/common/section';
import { StatsCard } from '#components/stats-card';
import { getStatsSection } from '#services/sections';
import '#components/sections/stats/ma-stats.scss';

export const StatsSection = async () => {
  const locale = useLocale();
  const { cards } = await getStatsSection({ locale });

  return (
    <Section className="ma-stats" color="white">
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
    </Section>
  );
};
