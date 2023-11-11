import { Navigation } from '#components/common/navigation';
import { QuickContact } from '#components/common/quick-contact';
import { Wrapper } from '#components/common/wrapper';
import { Logo } from '#components/logo';
import '#components/header/ma-header.scss';

export const Header = () => (
  <header className="ma-header">
    <Wrapper className="ma-header__wrapper" variant="secondary">
      <Logo />
      <Navigation className="ma-header__navigation" arrow />
      <QuickContact className="ma-header__quick-contact" />
    </Wrapper>
  </header>
);
