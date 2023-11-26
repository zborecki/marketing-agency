import { PropsWithChildren } from 'react';

import { TestimonialCardAPI } from '#types/api/components';
import { BaseProps } from '#types/props/common';

export interface ArrowButtonProps {
  ariaLabel?: string;
  direction?: 'left' | 'right';
  disabled?: boolean;
  onClick?: () => void;
}

export interface DividerProps extends BaseProps {
  maxWidth?: 'container' | 'full';
}

export interface NavigationProps extends BaseProps {
  arrow?: boolean;
}

export interface PaginationProps extends BaseProps {
  current: number;
  onNextPage: () => void;
  onPreviousPage: () => void;
  total: number;
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
