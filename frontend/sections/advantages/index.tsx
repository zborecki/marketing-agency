import { useLocale } from 'next-intl';
import { v4 as uuid } from 'uuid';

import { AdvantageItem } from '#components/advantage-item';
import { Section } from '#components/section';
import { getAdvantagesSection } from '#services/sections';

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
            <AdvantageItem index={index} key={uuid()}>
              { content }
            </AdvantageItem>
          ))
        }
      </ul>
    </Section>
  );
};
