import { Logo } from '#components/logo';
import { Navigation } from '#components/navigation';
import { QuickContact } from '#components/quick-contact';
import { Wrapper } from '#components/wrapper';

export const Header = () => (
  <header className="ma-header">
    <Wrapper className="ma-header__wrapper" maxWidth="lg">
      <Logo />
      <Navigation className="ma-header__navigation" arrow />
      <QuickContact className="ma-header__quick-contact" />
    </Wrapper>
  </header>
);
