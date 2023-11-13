import { FC } from 'react';

import { AdvantageCardProps } from '#types/props/components';
import '#components/advantage-card/ma-advantage-card.scss';

export const AdvantageCard: FC<AdvantageCardProps> = ({ children, index }) => (
  <li>
    <h3 className="ma-advantage-card__index">
      { (index + 1).toString().padStart(2, '0') }
    </h3>
    <p className="ma-advantage-card__content">
      { children }
    </p>
  </li>
);
