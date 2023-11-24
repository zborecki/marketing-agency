import { PropsWithChildren } from 'react';

import { TestimonialCardAPI } from '#types/api/components';
import { BaseProps } from '#types/props/common';

export interface DividerProps extends BaseProps {
  maxWidth?: 'container' | 'full';
}

export interface NavigationProps extends BaseProps {
  arrow?: boolean;
}

export interface TestimonialCardProps extends BaseProps, TestimonialCardAPI {
  full?: boolean;
}

export interface TooltipProps extends BaseProps, PropsWithChildren {
  label: string;
}

export interface WrapperProps extends BaseProps, PropsWithChildren {
  maxWidth?: 'lg' | 'md';
}
