import { AboutCompany } from '#components/footer/about-company';
import { Bottom } from '#components/footer/bottom';
import { Contacts } from '#components/footer/contacts';
import { Links } from '#components/footer/links';
import { Wrapper } from '#components/wrapper';
import { getContact } from '#services/contact';

export const Footer = async () => {
  const { email, phoneNumber } = await getContact();

  return (
    <footer className="ma-footer">
      <Wrapper className="ma-footer__main">
        <AboutCompany />
        <Links />
        <Contacts email={email} phoneNumber={phoneNumber} />
      </Wrapper>
      <Bottom />
    </footer>
  );
};
