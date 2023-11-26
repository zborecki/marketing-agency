import { PaginationAPI, TestimonialCardAPI } from '#types/api/components';

export interface TestimonialsSlice extends PaginationAPI {
  data: TestimonialCardAPI[];
}
