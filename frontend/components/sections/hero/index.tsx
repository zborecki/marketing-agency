import { useLocale } from 'next-intl';

import { SectionWrapper } from '#components/common/section-wrapper';
import { getHeroSection } from '#services/sections';
import { markdownToHtml } from '#utils/markdown-to-html';
import '#components/sections/hero/ma-hero.scss';

export const HeroSection = async () => {
  const locale = useLocale();
  const hero = await getHeroSection({ locale });
  const description = await markdownToHtml({ markdown: hero.description });
  const title = await markdownToHtml({ markdown: hero.title });

  return (
    <section>
      <SectionWrapper
        as="div"
        className="ma-hero__panel ma-hero__panel--primary"
        color="blue"
        padding={false}
      >
        <h1
          className="ma-hero__title"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </SectionWrapper>
      <SectionWrapper
        as="div"
        className="ma-hero__panel ma-hero__panel--secondary"
        color="white"
        padding={false}
      >
        <p
          className="ma-hero__description"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </SectionWrapper>
    </section>
  );
};
