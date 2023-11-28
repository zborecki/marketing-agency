import { getResponse } from '#services/common';
import { LocaleRequest } from '#types/api/requests';
import {
  AchievementsResponse,
  AdvantagesResponse,
  SectionResponse,
  StatsResponse,
  TestimonialsResponse
} from '#types/api/responses';

export const getAchievementsSection = async ({ locale }: LocaleRequest) => (
  getResponse<AchievementsResponse>({
    endpoint: '/achievements-section',
    locale
  })
);

export const getAdvantagesSection = async ({ locale }: LocaleRequest) => (
  getResponse<AdvantagesResponse>({
    endpoint: '/advantages-section',
    locale
  })
);

export const getHeroSection = async ({ locale }: LocaleRequest) => (
  getResponse<SectionResponse>({
    endpoint: '/hero-section',
    locale
  })
);

export const getStatsSection = async ({ locale }: LocaleRequest) => (
  getResponse<StatsResponse>({
    endpoint: '/stats-section',
    locale
  })
);

export const getTestimonialsSection = async ({ locale }: LocaleRequest) => (
  getResponse<TestimonialsResponse>({
    endpoint: '/testimonials-section',
    locale
  })
);
