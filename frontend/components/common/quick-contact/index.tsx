import { FC } from 'react';

import { OpeningDays } from './opening-days';

import { getContact } from '#services/contact';
import { BaseProps } from '#types/props/common';
import { classNames } from '#utils/classNames';
import '#components/common/quick-contact/ma-quick-contact.scss';

export const QuickContact: FC<BaseProps> = async ({ className }) => {
  const {
    closingTime, openingDays, openingTime, phoneNumber
  } = await getContact();

  return (
    <div className={classNames(['ma-quick-contact', className])}>
      <h2 className="ma-quick-contact__phone-number">{ phoneNumber }</h2>
      <OpeningDays
        closingTime={closingTime}
        openingTime={openingTime}
        {...openingDays}
      />
    </div>
  );
};
