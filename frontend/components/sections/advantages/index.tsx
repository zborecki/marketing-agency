import { useLocale } from 'next-intl';
import { v4 as uuid } from 'uuid';

import { AdvantageCard } from '#components/advantage-card';
import { Section } from '#components/common/section';
import { getAdvantagesSection } from '#services/sections';
import '#components/sections/advantages/ma-advantages.scss';

export const AdvantagesSection = async () => {
  const locale = useLocale();
  const { cards, description, title } = await getAdvantagesSection({ locale });

  return (
    <Section
      className="ma-advantages"
      subtitle={description}
      title={title}
    >
      <ul className="ma-advantages__list">
        {
          cards.map(({ content }, index) => (
            <AdvantageCard index={index} key={uuid()}>
              { content }
            </AdvantageCard>
          ))
        }
      </ul>
    </Section>
  );
};
