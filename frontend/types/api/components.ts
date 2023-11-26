import { DayOfTheWeek } from '#types/date-and-time';
import { SocialMediaUI } from '#types/ui';

export interface ImageAPI {
  alternativeText: string;
  height: number;
  url: string;
  width: number;
}

export interface OpeningDaysAPI {
  end?: DayOfTheWeek;
  isEveryday: string;
  start?: DayOfTheWeek;
}

export interface PaginationAPI {
  page: number;
  pageCount: number;
  total: number;
}

export interface SocialMediaAPI extends SocialMediaUI {
  label?: string;
  url: string;
}

export interface StatsCardAPI {
  description: string;
  value: number;
  type: 'clients' | 'currency' | 'million' | 'plus' | 'years';
}

export interface TestimonialCardAPI {
  logo: {
    data: ImageAPI;
  };
  opinion: string;
  signature: string;
}
