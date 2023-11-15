import { Divider as Component } from '@nextui-org/react';
import { FC } from 'react';

import { } from '#types/props/common';
import { DividerProps } from '#types/props/components';
import { classNames } from '#utils/classNames';

export const Divider: FC<DividerProps> = ({ className, maxWidth = 'container' }) => (
  <Component className={classNames(['ma-divider', `ma-divider--${maxWidth}`, className])} />
);
