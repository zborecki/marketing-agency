import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { IStatsCardAPI } from '#types/api/components';
import '#components/stats-card/ma-stats-card.scss';

export const StatsCard: FC<IStatsCardAPI> = ({
  description, value, type
}) => {
  const t = useTranslations('Component.Stats-card');

  return (
    <div className="ma-stats-card">
      <h2 className="ma-stats-card__title">
        { value }
        <span className="ma-stats-card__title--small">
          { ` ${t(type === 'years' && value <= 1 ? 'year' : `${type}`)}` }
        </span>
      </h2>
      <p className="ma-stats-card__description">{ description }</p>
    </div>
  );
};
