import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { Block } from '#components/footer/block';

interface Props {
  email: string;
  phoneNumber: string;
}

export const Contacts: FC<Props> = ({ email, phoneNumber }) => {
  const t = useTranslations('Component.Footer');

  return (
    <Block title={t('title.contacts')}>
      <p className="ma-footer__paragraph">{ phoneNumber }</p>
      <p className="ma-footer__paragraph">{ email }</p>
    </Block>
  );
};
