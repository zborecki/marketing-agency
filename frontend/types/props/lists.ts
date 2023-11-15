import { StatsCardAPI } from '#types/api/components';
import { BaseProps } from '#types/props/common';

export interface StatsListProps extends BaseProps {
  items: StatsCardAPI[];
}
