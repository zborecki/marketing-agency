import { useLocale } from 'next-intl';

import { Section } from '#components/section';
import { Testimonials } from '#components/testimonials';
import { getPaginatedTestimonials } from '#services/pagination';
import { getTestimonialsSection } from '#services/sections';

export const TestimonialsSection = async () => {
  const locale = useLocale();
  const { description, title } = await getTestimonialsSection({ locale });
  const testimonials = await getPaginatedTestimonials({ locale });

  return (
    <Section
      color="secondary"
      subtitle={description}
      title={title}
    >
      <Testimonials initialTestimonials={testimonials} />
    </Section>
  );
};
