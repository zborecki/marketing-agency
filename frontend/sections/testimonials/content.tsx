'use client';

import { useLocale } from 'next-intl';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SliderWithPagination } from '#components/slider-with-pagination';
import { AppDispatch, ReduxState } from '#constants/store';
import { fetchPaginatedTestimonials } from '#thunks/testimonial-thunks';

export const Content = () => {
  const dispatch = useDispatch<AppDispatch>();
  const locale = useLocale();
  const [page, setPage] = useState<number>(1);
  const { data, pagination, status } = useSelector((state: ReduxState) => state.testimonials);

  useEffect(() => {
    dispatch(fetchPaginatedTestimonials({ locale, page }));
  }, [page]);

  const onNextPage = useCallback(() => {
    setPage((previousPage) => previousPage + 1);
  }, []);

  const onPreviousPage = useCallback(() => {
    setPage((previousPage) => previousPage - 1);
  }, []);

  return (
    <SliderWithPagination
      current={pagination.page}
      isLoaded={status === 'success'}
      items={data}
      total={pagination.pageCount}
      onNextPage={onNextPage}
      onPreviousPage={onPreviousPage}
    />
  );
};
