import { ENDPOINT } from '#constants/endpoints';
import { cms } from '#lib/api';
import { LocaleRequest } from '#types/api/requests';
import { ContactResponse, SocialMediaResponse } from '#types/api/responses';

export const getContact = async () => (
  await cms.get<ContactResponse>(`${ENDPOINT.CONTACT}?populate=deep`)
).data.data;

export const getSocialMedia = async ({ locale }: LocaleRequest) => (
  await cms.get<SocialMediaResponse>(`${ENDPOINT.SOCIAL_MEDIA}?populate=deep&locale=${locale}`)
).data.data;
