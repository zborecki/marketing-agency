import { FC } from 'react';

import { BaseProps } from '#types/props/common';

export const ChevronIcon: FC<BaseProps> = ({ className }) => (
  <svg
    className={className}
    fill="none" height="8"
    viewBox="0 0 5 8" width="5"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 1L3.82322 3.82322C3.92085 3.92085 3.92085 4.07915 3.82322 4.17678L1 7" stroke="black"
      strokeLinecap="round" strokeWidth="2"
    />
  </svg>
);
