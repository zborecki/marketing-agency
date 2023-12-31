import { createAsyncThunk } from '@reduxjs/toolkit';

import { ENDPOINT } from '#constants/endpoints';
import { SLICE_ID } from '#constants/slices';
import { getPaginatedResponse } from '#services/common';
import { TestimonialCardAPI } from '#types/api/components';
import { PaginationRequest } from '#types/api/requests';

export const fetchPaginatedTestimonials = createAsyncThunk(
  `${SLICE_ID.TESTIMONIALS}/fetchPaginatedTestimonials`,
  async ({ locale, page }: PaginationRequest) => (
    getPaginatedResponse<TestimonialCardAPI>({
      endpoint: ENDPOINT.TESTIMONIALS,
      locale,
      page,
      pageSize: 2
    })
  )
);
