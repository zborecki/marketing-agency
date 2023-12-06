'use client';

import { createSlice } from '@reduxjs/toolkit';

import { SLICE_ID } from '#constants/slices';
import { fetchPaginatedRecommendedPosts } from '#thunks/recommended-posts-thunks';
import { fetchPaginatedTestimonials } from '#thunks/testimonial-thunks';
import { RecommendedPostsSlice } from '#types/redux/slices';

const initialState: RecommendedPostsSlice = {
  data: [],
  pagination: {
    page: 0,
    pageCount: 0,
    total: 0
  },
  status: 'idle'
};

export const recommendedPostsSlice = createSlice({
  extraReducers: ({ addCase }) => {
    addCase(fetchPaginatedRecommendedPosts.fulfilled, (state, { payload }) => ({
      ...state,
      data: payload.data,
      pagination: payload.pagination,
      status: 'success'
    }));
    addCase(fetchPaginatedRecommendedPosts.pending, (state) => ({
      ...state,
      status: 'loading'
    }));
    addCase(fetchPaginatedRecommendedPosts.rejected, (state) => ({
      ...state,
      status: 'error'
    }));
  },
  initialState,
  name: SLICE_ID.RECOMMENDED_POSTS,
  reducers: {

  }
});

export const recommendedPostsReducer = recommendedPostsSlice.reducer;
