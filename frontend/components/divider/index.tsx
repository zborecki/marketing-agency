import { Divider as Component } from '@nextui-org/react';
import { FC } from 'react';

import { BaseProps } from '#types/props/common';
import { classNames } from '#utils/classNames';

export const Divider: FC<BaseProps> = ({ className }) => (
  <Component className={classNames(['ma-divider', className])} />
);
