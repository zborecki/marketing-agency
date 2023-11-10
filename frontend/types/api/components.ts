import { TDayOfTheWeek } from '#types/common';

export interface IOpeningDaysAPI {
  end?: TDayOfTheWeek;
  isEveryday: string;
  start?: TDayOfTheWeek;
}
