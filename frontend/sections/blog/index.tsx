import { useLocale } from 'next-intl';

import { Section } from '#components/section';
import { getBlogSection } from '#services/sections';

export const Blog = async () => {
  const locale = useLocale();
  const { description, title } = await getBlogSection({ locale });

  return (
    <Section
      subtitle={description}
      title={title}
    >
      Blog
    </Section>
  );
};
