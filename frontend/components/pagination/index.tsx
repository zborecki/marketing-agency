import { FC } from 'react';

import { ArrowButton } from '#components/arrow-button';
import { Page } from '#components/pagination/page';
import { PaginationProps } from '#types/props/components';
import { classNames } from '#utils/classNames';

export const Pagination: FC<PaginationProps> = ({
  className, current, onNextPage, onPreviousPage, total
}) => (
  <div className={classNames(['ma-pagination', className])}>
    <ArrowButton
      ariaLabel="Previous"
      direction="left"
      disabled={current === 1}
      onClick={onPreviousPage}
    />
    <Page current={current} total={total} />
    <ArrowButton
      ariaLabel="Next"
      disabled={current === total}
      onClick={onNextPage}
    />
  </div>
);
