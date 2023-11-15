import { useLocale } from 'next-intl';

import { SectionContainer } from '#components/section/container';
import { getHeroSection } from '#services/sections';
import { markdownToHtml } from '#utils/markdown-to-html';

export const HeroSection = async () => {
  const locale = useLocale();
  const hero = await getHeroSection({ locale });
  const description = await markdownToHtml({ markdown: hero.description });
  const title = await markdownToHtml({ markdown: hero.title });

  return (
    <section>
      <SectionContainer
        as="div"
        className="ma-hero__panel ma-hero__panel--primary"
        color="tertiary"
        padding={false}
      >
        <h1
          className="ma-hero__title"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </SectionContainer>
      <SectionContainer
        as="div"
        className="ma-hero__panel ma-hero__panel--secondary"
        color="primary"
        padding={false}
      >
        <p
          className="ma-hero__description"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </SectionContainer>
    </section>
  );
};
