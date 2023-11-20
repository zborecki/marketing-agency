import { useLocale } from 'next-intl';

import { AboutCompany } from '#components/footer/about-company';
import { Bottom } from '#components/footer/bottom';
import { Contacts } from '#components/footer/contacts';
import { Links } from '#components/footer/links';
import { Wrapper } from '#components/wrapper';
import { getContact, getSocialMedia } from '#services/contact';

export const Footer = async () => {
  const locale = useLocale();
  const { email, phoneNumber } = await getContact();
  const { socialMedia } = await getSocialMedia({ locale });

  return (
    <footer className="ma-footer">
      <Wrapper className="ma-footer__main">
        <AboutCompany />
        <Links />
        <Contacts
          email={email}
          phoneNumber={phoneNumber}
          socialMedia={socialMedia}
        />
      </Wrapper>
      <Bottom />
    </footer>
  );
};
