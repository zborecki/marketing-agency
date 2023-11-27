import { useLocale } from 'next-intl';

import { Section } from '#components/section';
import { SliderWithPagination } from '#components/slider-with-pagination';
import { Content } from '#sections/testimonials/content';
import { getPaginatedTestimonials } from '#services/pagination';
import { getTestimonialsSection } from '#services/sections';

export const TestimonialsSection = async () => {
  const locale = useLocale();
  const { description, title } = await getTestimonialsSection({ locale });
  const { data, pagination } = await getPaginatedTestimonials({ locale });

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
