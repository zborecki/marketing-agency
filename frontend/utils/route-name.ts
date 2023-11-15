import { INTERNAL_ROUTE } from '#constants/routes';

interface Parameters {
  route: `${INTERNAL_ROUTE}`;
}

export const routeName = ({ route }: Parameters) => route.slice(1);
