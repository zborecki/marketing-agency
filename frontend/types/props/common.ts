import { KeenSliderHooks, KeenSliderInstance } from 'keen-slider';

import { ENDPOINT } from '#constants/endpoints';
import { LocaleRequest } from '#types/api/requests';

export interface BaseProps {
  className?: string;
}

export interface GenericPaginatedResponseProps extends GenericResponseProps {
  page?: number;
  pageSize?: number;
}

export interface GenericResponseProps extends LocaleRequest {
  endpoint: `${ENDPOINT}`;
  populate?: 'deep';
}

export type SlideshowAnimation = {
  duration?: number
  easing?: (t: number) => number
};

export type SlideshowInstance = KeenSliderInstance<{}, {}, KeenSliderHooks>;
