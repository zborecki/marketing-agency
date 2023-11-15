import { DayOfTheWeek } from '#types/date-and-time';

export interface OpeningDaysAPI {
  end?: DayOfTheWeek;
  isEveryday: string;
  start?: DayOfTheWeek;
}

export interface StatsCardAPI {
  description: string;
  value: number;
  type: 'clients' | 'currency' | 'million' | 'plus' | 'years';
}
