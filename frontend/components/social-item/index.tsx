import { FC } from 'react';

import { Icon } from '#components/social-item/icon';
import { Tooltip } from '#components/tooltip';
import { SocialMediaAPI } from '#types/api/components';
import { capitalize } from '#utils/capitalize';

export const SocialItem: FC<SocialMediaAPI> = ({
  label, type, url
}) => (
  <Tooltip label={label ?? capitalize(type)}>
    <a
      aria-label={label ?? capitalize(type)}
      className="ma-social-item"
      href={url}
      rel="noreferrer"
      target="_blank"
    >
      <Icon className="ma-social-item__icon" type={type} />
    </a>
  </Tooltip>
);
