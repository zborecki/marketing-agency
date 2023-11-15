import { FC } from 'react';

import { Wrapper } from '#components/wrapper';
import { SectionContainerProps } from '#types/props/sections';
import { classNames } from '#utils/classNames';

export const SectionContainer: FC<SectionContainerProps> = ({
  as: As = 'section',
  children,
  className,
  color = 'secondary',
  padding = true
}) => (
  <As className={classNames(['ma-section-container', `ma-section-container--${color}`, className])}>
    <Wrapper className={classNames(['ma-section-container__wrapper', padding && 'ma-section-container__wrapper--default-padding'])}>
      { children }
    </Wrapper>
  </As>
);
