import Link from 'next/link';
import { FC } from 'react';

import { ArrowRightIcon } from '#icons/arrow-right-icon';
import { NavigationItemProps } from '#types/props/items';
import { classNames } from '#utils/classNames';

export const NavigationItem: FC<NavigationItemProps> = ({
  arrow, children, url
}) => (
  <li className={classNames(['ma-navigation__item', arrow && 'ma-navigation__item--arrow'])}>
    <Link className="ma-navigation__link" href={url}>
      { children }
      { arrow && <ArrowRightIcon className="ma-navigation__arrow" /> }
    </Link>
  </li>
);
