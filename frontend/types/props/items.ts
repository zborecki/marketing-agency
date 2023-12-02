import { PropsWithChildren } from 'react';

import { CustomerAPI } from '#types/api/components';
import { BaseProps } from '#types/props/common';

export interface AdvantageItemProps extends BaseProps, PropsWithChildren {
  index: number;
}

export type CustomerItemProps = BaseProps & CustomerAPI;

export interface NavigationItemProps extends PropsWithChildren {
  arrow?: boolean;
  url: string;
}
