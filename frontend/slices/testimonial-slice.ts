'use client';

import { createSlice } from '@reduxjs/toolkit';

import { TestimonialsSlice } from '#types/redux/slices';

const initialState: TestimonialsSlice = {
  data: [],
  page: 0,
  pageCount: 0,
  total: 0
};

export const testimonialsSlice = createSlice({
  initialState,
  name: 'testimonials',
  reducers: {

  }
});

export const testimonialsReducer = testimonialsSlice.reducer;
