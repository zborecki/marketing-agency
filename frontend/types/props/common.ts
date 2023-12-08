import { KeenSliderHooks, KeenSliderInstance } from 'keen-slider';

import { LocaleRequest } from '#types/api/requests';

export interface BaseProps {
  className?: string;
}

export interface GenericPaginatedResponseProps extends GenericResponseProps {
  page?: number;
  pageSize?: number;
}

export interface GenericResponseProps extends LocaleRequest {
  additionalQueryParameters?: string;
  endpoint: `${'/'}${string}`;
  populate?: 'deep';
}

export interface ImageProps {
  alternativeText: string;
  url: string;
}

export type SlideshowAnimation = {
  duration?: number
  easing?: (t: number) => number
};

export type SlideshowInstance = KeenSliderInstance<{}, {}, KeenSliderHooks>;
