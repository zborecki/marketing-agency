import { createAsyncThunk } from '@reduxjs/toolkit';

import { ENDPOINT } from '#constants/endpoints';
import { SLICE_ID } from '#constants/slices';
import { getPaginatedResponse } from '#services/common';
import { PaginationRequest } from '#types/api/requests';
import { RecommendedArticleResponse } from '#types/api/responses';

export const fetchPaginatedRecommendedPosts = createAsyncThunk(
  `${SLICE_ID.RECOMMENDED_POSTS}/fetchPaginatedRecommendedPosts`,
  async ({ locale, page }: PaginationRequest) => (
    getPaginatedResponse<RecommendedArticleResponse>({
      endpoint: ENDPOINT.ARTICLES,
      locale,
      page,
      pageSize: 3
    })
  )
);
