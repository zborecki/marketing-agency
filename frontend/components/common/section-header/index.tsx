import { FC } from 'react';

import { SectionHeaderProps } from '#types/props/components';
import { classNames } from '#utils/classNames';
import '#components/common/section-header/ma-section-header.scss';

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
