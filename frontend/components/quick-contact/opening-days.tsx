import { useLocale, useTranslations } from 'next-intl';
import { FC } from 'react';

import { Days } from '#components/quick-contact/days';
import { Hours } from '#components/quick-contact/hours';
import { OpeningDaysAPI } from '#types/api/components';
import { DayOfTheWeek } from '#types/date-and-time';

interface Props extends OpeningDaysAPI {
  closingTime: string;
  openingTime: string;
}

export const OpeningDays: FC<Props> = ({
  closingTime, end, isEveryday, openingTime, start
}) => {
  const locale = useLocale();
  const t = useTranslations('Component.Quick-contact');

  return (
    <p className="ma-quick-contact__opening-days">
      <span className="ma-quick-contact__days">
        {
          isEveryday ? t('everyday') : (
            <Days
              day={{
                end: end as DayOfTheWeek,
                start: start as DayOfTheWeek
              }}
              locale={locale}
            />
          )
        }
      </span>
      <span className='ma-quick-contact__hours"'>
        <Hours closingTime={closingTime} openingTime={openingTime} />
      </span>
    </p>
  );
};
