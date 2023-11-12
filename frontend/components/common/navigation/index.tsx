import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { v4 as uuid } from 'uuid';

import { navigationItems } from '#constants/navigation';
import { ArrowRightIcon } from '#icons/arrow-right-icon';
import { NavigationBlockProps } from '#types/props/blocks';
import { classNames } from '#utils/classNames';
import '#components/common/navigation/ma-navigation.scss';

export const Navigation: FC<NavigationBlockProps> = ({
  arrow = false,
  className
}) => {
  const t = useTranslations('Component.Navigation');

  return (
    <nav className={classNames('ma-navigation', className)}>
      <ul className="ma-navigation__list">
        {
          navigationItems.map(
            ({ id, route }) => (
              <li
                className={classNames('ma-navigation__item', arrow && 'ma-navigation__item--arrow')}
                key={uuid()}
              >
                <Link
                  className="ma-navigation__link"
                  href={route}
                >
                  { t(id) }
                  { arrow && <ArrowRightIcon className="ma-navigation__arrow" /> }
                </Link>
              </li>
            )
          )
        }
      </ul>
    </nav>
  );
};
