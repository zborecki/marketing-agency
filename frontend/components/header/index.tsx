import Link from 'next/link';

import { Hamburger } from '#components/hamburger';
import { Logo } from '#components/logo';
import { Navigation } from '#components/navigation';
import { QuickContact } from '#components/quick-contact';
import { Wrapper } from '#components/wrapper';
import { INTERNAL_ROUTE } from '#constants/routes';

export const Header = () => (
  <header className="ma-header">
    <Wrapper className="ma-header__wrapper" maxWidth="lg">
      <Link href={INTERNAL_ROUTE.HOME}>
        <Logo />
      </Link>
      <Hamburger />
      <Navigation className="ma-header__navigation" arrow />
      <QuickContact className="ma-header__quick-contact" />
    </Wrapper>
  </header>
);
