import { FC } from 'react';
import { v4 as uuid } from 'uuid';

import { SocialItem } from '#components/social-item';
import { SocialMediaProps } from '#types/props/components';
import { classNames } from '#utils/classNames';

export const SocialMedia: FC<SocialMediaProps> = ({
  className, socialMedia
}) => (
  <ul className={classNames(['ma-social-media', className])}>
    {
      socialMedia.map(({ label, type, url }) => (
        <li className="ma-social-media__item" key={uuid()}>
          <SocialItem
            label={label}
            type={type}
            url={url}
          />
        </li>
      ))
    }
  </ul>
);
