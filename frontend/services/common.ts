import { cms } from '#lib/api';
import { GenericResponse } from '#types/api/responses';
import { GenericResponseProps } from '#types/props/common';

export const getResponse = async <T>({
  endpoint, locale, populate = 'deep'
}: GenericResponseProps) => (await cms.get<GenericResponse<T>>(
  `${endpoint}?populate=${populate}&locale=${locale}`
)).data.data;
