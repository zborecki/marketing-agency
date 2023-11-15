'use client';

import { FC } from 'react';

import { DayOfTheWeek } from '#types/date-and-time';
import { abbreviatedDayOfTheWeek } from '#utils/abbreviated-day-of-the-week';

interface Props {
  day: {
    [key in 'end' | 'start']: DayOfTheWeek;
  };
  locale: string;
}

export const Days: FC<Props> = ({ day, locale }) => (
  `${abbreviatedDayOfTheWeek(day.start, locale)} - ${abbreviatedDayOfTheWeek(day.end, locale)}`
);
