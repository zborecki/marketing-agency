import { ENDPOINT } from '#constants/endpoints';
import { cms } from '#lib/api';
import { ContactResponse } from '#types/api/responses';

export const getContact = async () => (
  await cms.get<ContactResponse>(`${ENDPOINT.CONTACT}?populate=deep`)
).data.data;
