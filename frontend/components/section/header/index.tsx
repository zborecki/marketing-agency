import { FC } from 'react';

import { SectionHeaderProps } from '#types/props/sections';
import { classNames } from '#utils/classNames';

export const SectionHeader: FC<SectionHeaderProps> = ({
  className, subtitle, title
}) => (
  <header className={classNames(['ma-section-header', className])}>
    <p className="ma-section-header__subtitle">
      { subtitle }
    </p>
    <h2 className="ma-section-header__title">
      { title }
    </h2>
  </header>
);
