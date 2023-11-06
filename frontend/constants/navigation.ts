import { ROUTE } from './routes';

import { INavigationItem } from '#types/common';
import { getRouteId } from '#utils/get-route-id';

export const navigationItems: INavigationItem[] = [
  {
    id: getRouteId('/about-us'),
    route: ROUTE.ABOUT_US
  },
  {
    id: getRouteId('/services'),
    route: ROUTE.SERVICES
  },
  {
    id: getRouteId('/blog'),
    route: ROUTE.BLOG
  },
  {
    id: getRouteId('/contacts'),
    route: ROUTE.CONTACTS
  }
];
