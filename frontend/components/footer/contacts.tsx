import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { Block } from '#components/footer/block';
import { SocialMedia } from '#components/social-media';
import { SocialMediaAPI } from '#types/api/components';

interface Props {
  email: string;
  phoneNumber: string;
  socialMedia: SocialMediaAPI[];
}

export const Contacts: FC<Props> = ({ email, phoneNumber, socialMedia }) => {
  const t = useTranslations('Component.Footer');

  return (
    <Block title={t('title.contacts')}>
      <p className="ma-footer__paragraph">{ phoneNumber }</p>
      <a className="ma-footer__paragraph ma-interactive-text" href={`mailto:${email}`}>
        { email }
      </a>
      <SocialMedia
        className="ma-footer__social-media"
        socialMedia={socialMedia}
      />
    </Block>
  );
};
