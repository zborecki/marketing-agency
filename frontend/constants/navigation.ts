import { INTERNAL_ROUTE } from './routes';

import { RouteItem } from '#types/items';
import { routeName } from '#utils/route-name';

export const PRIMARY_NAVIGATION: RouteItem[] = [
  {
    name: routeName({ route: '/about-us' }),
    url: INTERNAL_ROUTE.ABOUT_US
  },
  {
    name: routeName({ route: '/services' }),
    url: INTERNAL_ROUTE.SERVICES
  },
  {
    name: routeName({ route: '/blog' }),
    url: INTERNAL_ROUTE.BLOG
  },
  {
    name: routeName({ route: '/contacts' }),
    url: INTERNAL_ROUTE.CONTACTS
  }
];
