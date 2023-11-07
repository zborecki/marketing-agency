'use client';

import { FC } from 'react';

import { TDayOfTheWeek } from '#types/common';
import { abbreviatedDayOfTheWeek } from '#utils/abbreviated-day-of-the-week';

interface Props {
  day: {
    [key in 'end' | 'start']: TDayOfTheWeek;
  };
  locale: string;
}

export const Days: FC<Props> = ({ day, locale }) => (
  `${abbreviatedDayOfTheWeek(day.start, locale)} - ${abbreviatedDayOfTheWeek(day.end, locale)}`
);
