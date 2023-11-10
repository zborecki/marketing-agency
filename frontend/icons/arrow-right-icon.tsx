import { FC } from 'react';

import { BaseProps } from '#types/props/common';

export const ArrowRightIcon: FC<BaseProps> = ({ className }) => (
  <svg
    className={className}
    fill="none"
    height="8"
    viewBox="0 0 11 8"
    width="11"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.3536 4.35355C10.5488 4.15829 10.5488 3.84171 10.3536 3.64645L7.17157 0.464466C6.97631 0.269204 6.65973 0.269204 6.46447 0.464466C6.2692 0.659728 6.2692 0.976311 6.46447 1.17157L9.29289 4L6.46447 6.82843C6.2692 7.02369 6.2692 7.34027 6.46447 7.53553C6.65973 7.7308 6.97631 7.7308 7.17157 7.53553L10.3536 4.35355ZM0 4.5H10V3.5H0V4.5Z"
      fill="#232323"
    />
  </svg>
);
