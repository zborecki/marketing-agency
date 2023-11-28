import { PropsWithChildren } from 'react';

import { BaseProps } from '#types/props/common';
import { SectionUI } from '#types/ui';

export interface SectionContainerProps
  extends BaseProps, PropsWithChildren, SectionUI {
  as?: 'div' | 'section';
  padding?: boolean;
}

export interface SectionHeaderProps extends BaseProps {
  subtitle?: string;
  title?: string;
}

export type SectionProps = PropsWithChildren & SectionHeaderProps & SectionUI;
