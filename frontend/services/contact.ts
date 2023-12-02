import { ENDPOINT } from '#constants/endpoints';
import { getResponse } from '#services/common';
import { LocaleRequest } from '#types/api/requests';
import { ContactResponse, SocialMediaResponse } from '#types/api/responses';

export const getContact = async () => (
  getResponse<ContactResponse>({
    endpoint: ENDPOINT.CONTACT
  })
);

export const getSocialMedia = async ({ locale }: LocaleRequest) => (
  getResponse<SocialMediaResponse>({
    endpoint: ENDPOINT.SOCIAL_MEDIA,
    locale
  })
);
