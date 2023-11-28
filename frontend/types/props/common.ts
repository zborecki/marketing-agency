import { ENDPOINT } from '#constants/endpoints';
import { LocaleRequest } from '#types/api/requests';

export interface BaseProps {
  className?: string;
}

export interface GenericPaginatedResponseProps extends GenericResponseProps {
  page?: number;
  pageSize?: number;
}

export interface GenericResponseProps extends LocaleRequest {
  endpoint: `${ENDPOINT}`;
  populate?: 'deep';
}
