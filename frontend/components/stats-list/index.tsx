import { FC } from 'react';
import { v4 as uuid } from 'uuid';

import { StatsCard } from '#components/stats-card';
import { StatsListProps } from '#types/props/lists';
import { classNames } from '#utils/classNames';

export const StatsList: FC<StatsListProps> = ({ className, cards }) => (
  <ul className={classNames(['ma-stats-list', className])}>
    {
      cards.map(({ description, value, type }) => (
        <StatsCard
          description={description}
          key={uuid()}
          type={type}
          value={value}
        />
      ))
    }
  </ul>
);
