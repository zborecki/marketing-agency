'use client';

import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { testimonialsReducer, testimonialsSlice } from '#slices/testimonial-slice';

const reducer = combineReducers({
  [testimonialsSlice.name]: testimonialsReducer
});

export const store = configureStore({
  reducer
});
