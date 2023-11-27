'use client';

import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { SLICE_ID } from '#constants/slices';
import { testimonialsReducer } from '#slices/testimonial-slice';

const reducer = combineReducers({
  [SLICE_ID.TESTIMONIALS]: testimonialsReducer
});

export const store = configureStore({
  reducer
});

export type AppDispatch = typeof store.dispatch;

export type ReduxState = ReturnType<typeof store.getState>;
