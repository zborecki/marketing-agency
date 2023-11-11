import { FC } from 'react';

import { Wrapper } from '#components/common/wrapper';
import { SectionProps } from '#types/props/components';
import { classNames } from '#utils/classNames';
import '#components/common/section/ma-section.scss';

export const Section: FC<SectionProps> = ({
  as: As = 'section',
  children,
  className,
  color = 'gray'
}) => (
  <As className={classNames(['ma-section', `ma-section--${color}`, className])}>
    <Wrapper>
      { children }
    </Wrapper>
  </As>
);
