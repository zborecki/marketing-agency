import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { v4 as uuidv4 } from 'uuid';

import { navigationItems } from '#constants/navigation';

export const NavigationBlock = () => {
  const t = useTranslations('Component.Navigation');

  return (
    <nav>
      <ul>
        {
          navigationItems.map(
            ({ id, route }) => (
              <li key={uuidv4()}>
                <Link href={route}>{ t(id) }</Link>
              </li>
            )
          )
        }
      </ul>
    </nav>
  );
};
