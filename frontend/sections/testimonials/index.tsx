import { useLocale } from 'next-intl';

import { Section } from '#components/section';
import { Content } from '#sections/testimonials/content';
import { getTestimonialsSection } from '#services/sections';

export const TestimonialsSection = async () => {
  const locale = useLocale();
  const { description, title } = await getTestimonialsSection({ locale });

  return (
    <Section
      color="secondary"
      subtitle={description}
      title={title}
    >
      <Content />
    </Section>
  );
};
