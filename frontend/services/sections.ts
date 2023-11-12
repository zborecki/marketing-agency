import { ENDPOINT } from '#constants/endpoints';
import { cmsApi } from '#lib/api';
import { TLocaleRequest } from '#types/api/requests';
import { IHeroSectionResponse, IStatsSectionResponse } from '#types/api/responses';

export const getHeroSection = async ({ locale }: TLocaleRequest) => (
  await cmsApi.get<IHeroSectionResponse>(
    `${ENDPOINT.HERO_SECTION}?locale=${locale}`
  )
).data.data;

export const getStatsSection = async ({ locale }: TLocaleRequest) => (
  await cmsApi.get<IStatsSectionResponse>(
    `${ENDPOINT.STATS_SECTION}?populate=deep&locale=${locale}`
  )
).data.data;
