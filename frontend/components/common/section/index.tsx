import { FC } from 'react';

import { SectionHeader } from '#components/common/section-header';
import { SectionWrapper } from '#components/common/section-wrapper';
import { SectionProps } from '#types/props/components';
import { classNames } from '#utils/classNames';
import '#components/common/section/ma-section.scss';

export const Section: FC<SectionProps> = ({
  children,
  className,
  color = 'white',
  subtitle,
  title
}) => (
  <SectionWrapper
    as="section"
    className={classNames(['ma-section', className])}
    color={color}
  >
    <SectionHeader
      className={`ma-section__header ma-section__header--${color}`}
      subtitle={subtitle}
      title={title}
    />
    { children }
  </SectionWrapper>
);
