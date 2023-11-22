import { getResponse } from '#services/common';
import { LocaleRequest } from '#types/api/requests';
import { ContactResponse, SocialMediaResponse } from '#types/api/responses';

export const getContact = async () => (
  getResponse<ContactResponse>({
    endpoint: '/contact'
  })
);

export const getSocialMedia = async ({ locale }: LocaleRequest) => (
  getResponse<SocialMediaResponse>({
    endpoint: '/social-media',
    locale
  })
);
