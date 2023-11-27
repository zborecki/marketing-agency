import { PaginationAPI, TestimonialCardAPI } from '#types/api/components';

export interface TestimonialsSlice {
  data: TestimonialCardAPI[];
  pagination: PaginationAPI;
  status: 'error' | 'idle' | 'loading' | 'success';
}
