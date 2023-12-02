import { PropsWithChildren } from 'react';

import { CustomerAPI, TestimonialCardAPI } from '#types/api/components';
import { BaseProps, SlideshowInstance } from '#types/props/common';

export interface ArrowButtonProps {
  ariaLabel?: string;
  direction?: 'left' | 'right';
  disabled?: boolean;
  onClick?: () => void;
}

export interface ArticleHeaderProps {
  teaser: string;
  title: string;
}

export interface DividerProps extends BaseProps {
  maxWidth?: 'container' | 'full';
}

export interface CustomersSlideshowProps {
  customers: CustomerAPI[];
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

export interface SlideshowProps extends PropsWithChildren {
  onAnimationEnded?: (instance: SlideshowInstance) => void;
  onCreated?: (instance: SlideshowInstance) => void;
  onUpdated?: (instance: SlideshowInstance) => void;
  loop?: boolean;
  perView?: number;
  plugins?: any;
  spacing?: number;
}

export interface TestimonialCardProps extends BaseProps, TestimonialCardAPI {
  full?: boolean;
}

export interface TooltipProps extends BaseProps, PropsWithChildren {
  label: string;
  offset?: number;
  placement?: 'bottom' | 'top';
}

export interface WrapperProps extends BaseProps, PropsWithChildren {
  maxWidth?: 'lg' | 'md';
}
