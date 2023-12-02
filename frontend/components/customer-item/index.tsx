import Image from 'next/image';
import { FC } from 'react';

import { Tooltip } from '#components/tooltip';
import { imageURL } from '#constants/common';
import { CustomerItemProps } from '#types/props/items';
import { classNames } from '#utils/classNames';

export const CustomerItem: FC<CustomerItemProps> = ({
  className,
  logo: { data: logo },
  website
}) => (
  <a
    aria-label={logo.alternativeText}
    className={classNames(['ma-customer-item', className])}
    href={website}
    rel="noreferrer"
    target="_blank"
    title={logo.alternativeText}
  >
    <Tooltip
      label={logo.alternativeText}
      offset={16}
      placement="bottom"
    >
      <Image
        alt={logo.alternativeText}
        className="ma-customer-item__logo"
        height={48}
        src={imageURL(logo.url)}
        width={logo.width}
      />
    </Tooltip>
  </a>
);
