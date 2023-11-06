import { ROUTE } from '#constants/routes';

export const getRouteId = (route: `${ROUTE}`) => route.slice(1);
