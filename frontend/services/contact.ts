import { ENDPOINT } from '#constants/endpoints';
import { cmsApi } from '#lib/api';
import { IContactResponse } from '#types/api/responses';

export const getContact = async () => (
  await cmsApi.get<IContactResponse>(`${ENDPOINT.CONTACT}?populate=deep`)
).data.data;
