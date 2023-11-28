'use client';

import { createSlice } from '@reduxjs/toolkit';

import { SLICE_ID } from '#constants/slices';
import { fetchPaginatedTestimonials } from '#thunks/testimonial-thunks';
import { TestimonialsSlice } from '#types/redux/slices';

const initialState: TestimonialsSlice = {
  data: [],
  pagination: {
    page: 0,
    pageCount: 0,
    total: 0
  },
  status: 'idle'
};

export const testimonialsSlice = createSlice({
  extraReducers: ({ addCase }) => {
    addCase(fetchPaginatedTestimonials.fulfilled, (state, { payload }) => ({
      ...state,
      data: payload.data,
      pagination: payload.pagination,
      status: 'success'
    }));
    addCase(fetchPaginatedTestimonials.pending, (state) => ({
      ...state,
      status: 'loading'
    }));
    addCase(fetchPaginatedTestimonials.rejected, (state) => ({
      ...state,
      status: 'error'
    }));
  },
  initialState,
  name: SLICE_ID.TESTIMONIALS,
  reducers: {

  }
});

export const testimonialsReducer = testimonialsSlice.reducer;
