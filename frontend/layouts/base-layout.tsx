import { FC, PropsWithChildren } from 'react';

import { Footer } from '#components/footer';
import { Header } from '#components/header';

export const BaseLayout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <Header />
    { children }
    <Footer />
  </>
);
