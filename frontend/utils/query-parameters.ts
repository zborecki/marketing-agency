export const getQueryParams = (queryParams: Record<string, string>): string => {
  const queryString = new URLSearchParams(Object.entries(queryParams)).toString();

  return queryString ? `?${queryString}` : '';
};
