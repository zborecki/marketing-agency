'use client';

import { FC } from 'react';

import { formattedTime } from '#utils/formatted-hour';

interface Props {
  closingTime: string;
  openingTime: string;
}

export const Hours: FC<Props> = ({ closingTime, openingTime }) => (
  `${formattedTime({ time: openingTime })} - ${formattedTime({ time: closingTime })}`
);
