import { FC } from 'react';

import { ChevronIcon } from '#icons/chevron-icon';
import { ArrowButtonProps } from '#types/props/components';
import { classNames } from '#utils/classNames';

export const ArrowButton: FC<ArrowButtonProps> = ({
  ariaLabel = 'button',
  direction = 'right',
  disabled,
  onClick
}) => (
  <button
    aria-label={ariaLabel}
    className="ma-arrow-button"
    disabled={disabled}
    title={ariaLabel}
    type="button"
    onClick={onClick}
  >
    <div className="ma-arrow-button__line" />
    <ChevronIcon
      className={classNames([
        'ma-arrow-button__chevron',
        `ma-arrow-button__chevron--${direction}`
      ])}
    />
  </button>
);
