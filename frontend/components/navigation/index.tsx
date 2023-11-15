import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { v4 as uuid } from 'uuid';

import { NavigationItem } from '#components/navigation/navigation-item';
import { PRIMARY_NAVIGATION } from '#constants/navigation';
import { NavigationProps } from '#types/props/components';
import { classNames } from '#utils/classNames';

export const Navigation: FC<NavigationProps> = ({
  arrow = false,
  className
}) => {
  const t = useTranslations('Component.Navigation');

  return (
    <nav className={classNames('ma-navigation', className)}>
      <ul className="ma-navigation__list">
        {
          PRIMARY_NAVIGATION.map(({ name, url }) => (
            <NavigationItem
              arrow={arrow}
              key={uuid()}
              url={url}
            >
              { t(name) }
            </NavigationItem>
          ))
        }
      </ul>
    </nav>
  );
};
