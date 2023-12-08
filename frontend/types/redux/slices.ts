import { PaginationAPI, TestimonialCardAPI } from '#types/api/components';
import { RecommendedArticleResponse } from '#types/api/responses';

export interface RecommendedPostsSlice {
  data: RecommendedArticleResponse[];
  pagination: PaginationAPI;
  status: 'error' | 'idle' | 'loading' | 'success';
}

export interface TestimonialsSlice {
  data: TestimonialCardAPI[];
  pagination: PaginationAPI;
  status: 'error' | 'idle' | 'loading' | 'success';
}
