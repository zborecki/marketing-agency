import { FC } from 'react';

import { WrapperProps } from '#types/props/components';
import { classNames } from '#utils/classNames';
import '#components/wrapper/ma-wrapper.scss';

export const Wrapper: FC<WrapperProps> = ({
  children, className, variant = 'primary'
}) => (
  <div className={classNames(['ma-wrapper', `ma-wrapper--${variant}`, className])}>
    { children }
  </div>
);
