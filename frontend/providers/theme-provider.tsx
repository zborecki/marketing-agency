'use client';

import { NextUIProvider } from '@nextui-org/react';
import { FC, PropsWithChildren } from 'react';
import 'normalize.css';
import '#theme/ma-globals.scss';

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => (
  <NextUIProvider>
    { children }
  </NextUIProvider>
);
