export type TDayOfTheWeek =
  'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

export interface IInternalization {
  params: {
    locale: TLanguage;
  }
}

export type TLanguage = 'en' | 'pl';

export interface INavigationItem {
  id: string;
  route: string;
}
