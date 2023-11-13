import { FC } from 'react';

import { Wrapper } from '#components/common/wrapper';
import { SectionWrapperProps } from '#types/props/components';
import { classNames } from '#utils/classNames';
import '#components/common/section-wrapper/ma-section-wrapper.scss';

export const SectionWrapper: FC<SectionWrapperProps> = ({
  as: As = 'section',
  children,
  className,
  color = 'gray',
  padding = true
}) => (
  <As className={classNames(['ma-section-wrapper', `ma-section-wrapper--${color}`, className])}>
    <Wrapper className={classNames(['ma-section-wrapper__wrapper', padding && 'ma-section-wrapper__wrapper--default-padding'])}>
      { children }
    </Wrapper>
  </As>
);
