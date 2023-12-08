'use client';

import { useLocale } from 'next-intl';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';

import { SliderWithPagination } from '#components/slider-with-pagination';
import { TestimonialCard } from '#components/testimonial-card';
import { AppDispatch, ReduxState } from '#constants/store';
import { TestimonialCardSkeleton } from '#skeletons/testimonial-card';
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
      total={pagination.pageCount}
      onNextPage={onNextPage}
      onPreviousPage={onPreviousPage}
    >
      {
        status === 'success' ? data.map(({ logo, opinion, signature }) => (
          <li className="keen-slider__slide" key={uuid()}>
            <TestimonialCard
              logo={logo}
              opinion={opinion}
              signature={signature}
            />
          </li>
        )) : Array.from(Array(2).keys()).map(() => (
          <li className="keen-slider__slide" key={uuid()}>
            <TestimonialCardSkeleton />
          </li>
        ))
      }
    </SliderWithPagination>
  );
};
