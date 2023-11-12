import { TDayOfTheWeek } from '#types/common';

export interface IOpeningDaysAPI {
  end?: TDayOfTheWeek;
  isEveryday: string;
  start?: TDayOfTheWeek;
}

export interface IStatsCardAPI {
  description: string;
  value: number;
  type: 'currency' | 'plus' | 'years';
}
