import { FC } from 'react';

import { SectionContainer } from '#components/section/container';
import { SectionHeader } from '#components/section/header';
import { SectionProps } from '#types/props/sections';
import { classNames } from '#utils/classNames';

export const Section: FC<SectionProps> = ({
  children,
  className,
  color = 'primary',
  subtitle,
  title
}) => (
  <SectionContainer
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
  </SectionContainer>
);
