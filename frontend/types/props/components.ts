import { PropsWithChildren } from 'react';

import { BaseProps } from '#types/props/common';

export interface AdvantageCardProps extends PropsWithChildren {
  index: number;
}

export interface SectionHeaderProps extends BaseProps {
  subtitle: string;
  title: string;
}

export interface SectionProps extends PropsWithChildren, SectionHeaderProps {
  color?: 'blue' | 'gray' | 'white';
}

export interface SectionWrapperProps extends BaseProps, PropsWithChildren {
  as?: 'div' | 'section';
  color?: 'blue' | 'gray' | 'white';
  padding?: boolean;
}

export interface WrapperProps extends BaseProps, PropsWithChildren {
  variant?: 'primary' | 'secondary';
}
