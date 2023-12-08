'use client';

import { useLocale } from 'next-intl';
import { FC } from 'react';

import { CalendarIcon } from '#icons/calendar-icon';
import { DateBadgeProps } from '#types/props/components';
import { classNames } from '#utils/classNames';
import { getShortDate } from '#utils/get-short-date';

export const DateBadge: FC<DateBadgeProps> = ({
  className, date
}) => {
  const locale = useLocale();
  const shortDate = getShortDate({ date, locale });

  return (
    <div className={classNames(['ma-date-badge', className])}>
      <CalendarIcon className="ma-date-badge__icon" />
      <span className="ma-date-badge__date">
        { shortDate }
      </span>
    </div>
  );
};
