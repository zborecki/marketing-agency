import { FC } from 'react';

import { BaseProps } from '#types/props/common';

export const CalendarIcon: FC<BaseProps> = ({ className }) => (
  <svg
    className={className}
    fill="none"
    height="16"
    viewBox="0 0 16 16"
    width="16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.6667 2.6665H3.33333C2.59695 2.6665 2 3.26346 2 3.99984V13.3332C2 14.0696 2.59695 14.6665 3.33333 14.6665H12.6667C13.403 14.6665 14 14.0696 14 13.3332V3.99984C14 3.26346 13.403 2.6665 12.6667 2.6665Z"
      stroke="#232323"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.3"
    />
    <path
      d="M10.667 1.3335V4.00016"
      stroke="#232323"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.3"
    />
    <path
      d="M5.33301 1.3335V4.00016"
      stroke="#232323"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.3"
    />
    <path
      d="M2 6.6665H14"
      stroke="#232323"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.3"
    />
  </svg>
);