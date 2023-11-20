import { FacebookIcon } from '#icons/facebook-icon';
import { InstagramIcon } from '#icons/instagram-icon';
import { BaseProps } from '#types/props/common';
import { SocialMediaUI } from '#types/ui';

type Props = BaseProps & SocialMediaUI;

export const Icon = ({ className, type }: Props) => {
  switch (type) {
    case 'facebook':
      return <FacebookIcon className={className} />;
    case 'instagram':
      return <InstagramIcon className={className} />;
    default:
      return <FacebookIcon className={className} />;
  }
};
