import { SocialMediaAPI, StatsCardAPI } from '#types/api/components';
import { BaseProps } from '#types/props/common';

export interface SocialMediaProps extends BaseProps {
  socialMedia: SocialMediaAPI[];
}

export interface SliderWithPaginationProps {
  current: number;
  isLoaded?: boolean;
  items: any[];
  onNextPage: () => void;
  onPreviousPage: () => void;
  slider?: {
    gap: number;
    perView: number;
  }
  total: number;
}

export interface StatsListProps extends BaseProps {
  cards: StatsCardAPI[];
}
