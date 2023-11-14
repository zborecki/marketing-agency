import { FC } from 'react';

import { WrapperProps } from '#types/props/components';
import { classNames } from '#utils/classNames';

export const Wrapper: FC<WrapperProps> = ({
  children,
  className,
  maxWidth = 'md'
}) => (
  <div className={classNames(['ma-wrapper', `ma-wrapper--${maxWidth}`, className])}>
    { children }
  </div>
);
