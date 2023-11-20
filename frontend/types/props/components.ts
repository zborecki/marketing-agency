import { PropsWithChildren } from 'react';

import { SocialMediaAPI } from '#types/api/components';
import { BaseProps } from '#types/props/common';

export interface DividerProps extends BaseProps {
  maxWidth?: 'container' | 'full';
}

export interface NavigationProps extends BaseProps {
  arrow?: boolean;
}

export interface SocialMediaProps extends BaseProps {
  socialMedia: SocialMediaAPI[];
}

export interface TooltipProps extends BaseProps, PropsWithChildren {
  label: string;
}

export interface WrapperProps extends BaseProps, PropsWithChildren {
  maxWidth?: 'lg' | 'md';
}
