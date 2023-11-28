import { FC } from 'react';

interface Props {
  current: number;
  total: number;
}

export const Page: FC<Props> = ({
  current, total
}) => (
  <p className="ma-pagination__page">
    <span className="ma-pagination__page--current">{ current }</span>
    { ` / ${total}` }
  </p>
);
