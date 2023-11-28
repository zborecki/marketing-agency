import { getPaginatedResponse } from '#services/common';
import { TestimonialCardAPI } from '#types/api/components';
import { PaginationRequest } from '#types/api/requests';

export const getPaginatedTestimonials = async ({
  locale, page
}: PaginationRequest) => (
  getPaginatedResponse<TestimonialCardAPI>({
    endpoint: '/testimonials',
    locale,
    page,
    pageSize: 2
  })
);
