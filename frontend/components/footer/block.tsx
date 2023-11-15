import { FC, PropsWithChildren } from 'react';

import { BaseProps } from '#types/props/common';
import { classNames } from '#utils/classNames';

interface Props extends BaseProps, PropsWithChildren {
  title: string;
}

export const Block: FC<Props> = ({ children, className, title }) => (
  <div className={classNames(['ma-footer__block', className])}>
    <h2 className="ma-footer__title">{ title }</h2>
    { children }
  </div>
);
