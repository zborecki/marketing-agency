import { PropsWithChildren } from 'react';

import { BaseProps } from '#types/props/common';

export interface NavigationProps extends BaseProps {
  arrow?: boolean;
}

export interface WrapperProps extends BaseProps, PropsWithChildren {
  maxWidth?: 'lg' | 'md';
}
