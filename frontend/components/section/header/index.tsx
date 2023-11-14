import { FC } from 'react';

import { SectionHeaderProps } from '#types/props/sections';
import { classNames } from '#utils/classNames';

export const SectionHeader: FC<SectionHeaderProps> = ({
  className, subtitle, title
}) => (
  <div className={classNames(['ma-section-header', className])}>
    <p className="ma-section-header__subtitle">
      { subtitle }
    </p>
    <h2 className="ma-section-header__title">
      { title }
    </h2>
  </div>
);
