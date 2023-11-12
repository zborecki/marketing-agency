import { PropsWithChildren } from 'react';

import { BaseProps } from '#types/props/common';

export interface SectionProps extends BaseProps, PropsWithChildren {
  as?: 'div' | 'section';
  color?: 'blue' | 'gray' | 'white';
}

export interface WrapperProps extends BaseProps, PropsWithChildren {
  variant?: 'primary' | 'secondary';
}
