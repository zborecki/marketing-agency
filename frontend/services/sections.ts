import { ENDPOINT } from '#constants/endpoints';
import { cms } from '#lib/api';
import { LocaleRequest } from '#types/api/requests';
import {
  AchievementsResponse,
  AdvantagesResponse,
  HeroResponse,
  StatsResponse
} from '#types/api/responses';

export const getAchievementsSection = async ({ locale }: LocaleRequest) => (
  await cms.get<AchievementsResponse>(
    `${ENDPOINT.ACHIEVEMENTS_SECTION}?populate=deep&locale=${locale}`
  )
).data.data;

export const getAdvantagesSection = async ({ locale }: LocaleRequest) => (
  await cms.get<AdvantagesResponse>(
    `${ENDPOINT.ADVANTAGES_SECTION}?populate=deep&locale=${locale}`
  )
).data.data;

export const getHeroSection = async ({ locale }: LocaleRequest) => (
  await cms.get<HeroResponse>(
    `${ENDPOINT.HERO_SECTION}?locale=${locale}`
  )
).data.data;

export const getStatsSection = async ({ locale }: LocaleRequest) => (
  await cms.get<StatsResponse>(
    `${ENDPOINT.STATS_SECTION}?populate=deep&locale=${locale}`
  )
).data.data;
