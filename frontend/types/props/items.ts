import { PropsWithChildren } from 'react';

import { BaseProps } from '#types/props/common';

export interface AdvantageItemProps extends BaseProps, PropsWithChildren {
  index: number;
}

export interface NavigationItemProps extends PropsWithChildren {
  arrow?: boolean;
  url: string;
}
