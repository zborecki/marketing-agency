import { NavigationBlock } from '#components/blocks/navigation';
import { QuickContactBlock } from '#components/blocks/quick-contact';
import { Logo } from '#components/logo';
import { Wrapper } from '#components/wrapper';
import '#components/header/ma-header.scss';

export const Header = () => (
  <header className="ma-header">
    <Wrapper className="ma-header__wrapper" variant="secondary">
      <Logo />
      <NavigationBlock className="ma-header__navigation" arrow />
      <QuickContactBlock className="ma-header__quick-contact" />
    </Wrapper>
  </header>
);
