import { Tooltip as Component } from '@nextui-org/react';
import { FC } from 'react';

import { TooltipProps } from '#types/props/components';
import { classNames } from '#utils/classNames';

export const Tooltip: FC<TooltipProps> = ({
  className, children, label
}) => (
  <Component
    className={classNames(['ma-tooltip', className])}
    content={label}
  >
    { children }
  </Component>
);
