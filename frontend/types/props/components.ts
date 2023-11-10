import { PropsWithChildren } from 'react';

import { BaseProps } from '#types/props/common';

export interface WrapperProps extends BaseProps, PropsWithChildren {
  variant?: 'primary' | 'secondary';
}
