import { SocialMediaAPI, StatsCardAPI, TestimonialCardAPI } from '#types/api/components';
import { BaseProps } from '#types/props/common';

export interface SocialMediaProps extends BaseProps {
  socialMedia: SocialMediaAPI[];
}

export interface StatsListProps extends BaseProps {
  cards: StatsCardAPI[];
}

export interface TestimonialsProps {
  initialTestimonials: TestimonialCardAPI[];
}
