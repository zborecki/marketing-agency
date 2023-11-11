import { ENDPOINT } from '#constants/endpoints';
import { cmsApi } from '#lib/api';
import { TLocaleRequest } from '#types/api/requests';
import { IHeroSectionResponse } from '#types/api/responses';

export const getHeroSection = async ({ locale }: TLocaleRequest) => (
  await cmsApi.get<IHeroSectionResponse>(`${ENDPOINT.HERO_SECTION}?locale=${locale}`)
).data.data;
