import { ENDPOINT } from '#constants/endpoints';
import { getResponse } from '#services/common';
import { CustomerAPI } from '#types/api/components';

export const getCustomers = async () => (
  getResponse<CustomerAPI[]>({
    endpoint: ENDPOINT.CUSTOMERS
  })
);
