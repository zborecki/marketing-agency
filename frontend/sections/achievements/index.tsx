import { useLocale } from 'next-intl';

import { Section } from '#components/section';
import { StatsList } from '#components/stats-list';
import { getAchievementsSection } from '#services/sections';

export const AchievementsSection = async () => {
  const locale = useLocale();
  const { cards, description, title } = await getAchievementsSection({ locale });

  return (
    <Section
      className="ma-achievements"
      color="tertiary"
      subtitle={description}
      title={title}
    >
      <StatsList
        cards={cards}
        className="achievements__list"
      />
    </Section>
  );
};
