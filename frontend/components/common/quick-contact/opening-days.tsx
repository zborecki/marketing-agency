import { useLocale, useTranslations } from 'next-intl';
import { FC } from 'react';

import { Days } from '#components/common/quick-contact/days';
import { Hours } from '#components/common/quick-contact/hours';
import { IOpeningDaysAPI } from '#types/api/components';
import { TDayOfTheWeek } from '#types/common';

interface Props extends IOpeningDaysAPI {
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
                end: end as TDayOfTheWeek,
                start: start as TDayOfTheWeek
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
