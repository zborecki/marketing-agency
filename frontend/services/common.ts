import { cms } from '#lib/api';
import { GenericPaginatedResponse, GenericResponse } from '#types/api/responses';
import { GenericPaginatedResponseProps, GenericResponseProps } from '#types/props/common';

export const getPaginatedResponse = async <T>({
  endpoint, locale, page = 1, pageSize = 2, populate = 'deep'
}: GenericPaginatedResponseProps) => {
  const { data, meta } = (await cms.get<GenericPaginatedResponse<T>>(
    `${endpoint}?pagination[page]=${page}&pagination[pageSize]=${pageSize}&populate=${populate}&locale=${locale}`
  )).data;

  return {
    data,
    pagination: meta.pagination
  };
};

export const getResponse = async <T>({
  endpoint, locale, populate = 'deep'
}: GenericResponseProps) => (await cms.get<GenericResponse<T>>(
  `${endpoint}?populate=${populate}&locale=${locale}`
)).data.data;
