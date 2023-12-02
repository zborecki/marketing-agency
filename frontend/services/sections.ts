import { ENDPOINT } from '#constants/endpoints';
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
    endpoint: ENDPOINT.ACHIEVEMENTS_SECTION,
    locale
  })
);

export const getAdvantagesSection = async ({ locale }: LocaleRequest) => (
  getResponse<AdvantagesResponse>({
    endpoint: ENDPOINT.ADVANTAGES_SECTION,
    locale
  })
);

export const getHeroSection = async ({ locale }: LocaleRequest) => (
  getResponse<SectionResponse>({
    endpoint: ENDPOINT.HERO_SECTION,
    locale
  })
);

export const getStatsSection = async ({ locale }: LocaleRequest) => (
  getResponse<StatsResponse>({
    endpoint: ENDPOINT.STATS_SECTION,
    locale
  })
);

export const getTestimonialsSection = async ({ locale }: LocaleRequest) => (
  getResponse<TestimonialsResponse>({
    endpoint: ENDPOINT.TESTIMONIALS_SECTION,
    locale
  })
);
