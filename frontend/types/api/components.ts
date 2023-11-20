import { DayOfTheWeek } from '#types/date-and-time';
import { SocialMediaUI } from '#types/ui';

export interface OpeningDaysAPI {
  end?: DayOfTheWeek;
  isEveryday: string;
  start?: DayOfTheWeek;
}

export interface SocialMediaAPI extends SocialMediaUI {
  label?: string;
  url: string;
}

export interface StatsCardAPI {
  description: string;
  value: number;
  type: 'clients' | 'currency' | 'million' | 'plus' | 'years';
}
