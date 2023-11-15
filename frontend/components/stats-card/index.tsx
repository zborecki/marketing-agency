import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { StatsCardAPI } from '#types/api/components';

export const StatsCard: FC<StatsCardAPI> = ({
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
