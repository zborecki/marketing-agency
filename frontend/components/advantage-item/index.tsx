import { FC } from 'react';

import { AdvantageItemProps } from '#types/props/items';
import { classNames } from '#utils/classNames';
import { convertTo2DigitNumber } from '#utils/convert-to-2-digit-number';

export const AdvantageItem: FC<AdvantageItemProps> = ({
  children,
  className,
  index
}) => (
  <li className={classNames(['ma-advantage-item', className])}>
    <h2 className="ma-advantage-item__index">
      { convertTo2DigitNumber(index + 1) }
    </h2>
    <p className="ma-advantage-item__content">{ children }</p>
  </li>
);
