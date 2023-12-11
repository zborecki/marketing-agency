'use client';

import { useLocale } from 'next-intl';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';

import { ArticleCard } from '#components/article-card';
import { SliderWithPagination } from '#components/slider-with-pagination';
import { AppDispatch, ReduxState } from '#constants/store';
import { ArticleCardSkeleton } from '#skeletons/article-card';
import { fetchPaginatedRecommendedPosts } from '#thunks/recommended-posts-thunks';

const PER_VIEW = 3;

export const Content = () => {
  const dispatch = useDispatch<AppDispatch>();
  const locale = useLocale();
  const [page, setPage] = useState<number>(1);
  const { data, pagination, status } = useSelector((state: ReduxState) => state.recommendedPosts);

  useEffect(() => {
    dispatch(fetchPaginatedRecommendedPosts({ locale, page }));
  }, [page]);

  const onNextPage = useCallback(() => {
    setPage((previousPage) => previousPage + 1);
  }, []);

  const onPreviousPage = useCallback(() => {
    setPage((previousPage) => previousPage - 1);
  }, []);

  return (
    <SliderWithPagination
      breakpoints={{
        '(max-width: 768px)': {
          slides: {
            spacing: 16,
            perView: 2
          }
        },
        '(max-width: 576px)': {
          slides: {
            perView: 1
          }
        }
      }}
      current={pagination.page}
      isLoaded={status === 'success'}
      slider={{
        gap: 30,
        perView: PER_VIEW
      }}
      total={pagination.pageCount}
      onNextPage={onNextPage}
      onPreviousPage={onPreviousPage}
    >
      {
        status === 'success' ? data.map(({
          image, publishedAt, slug, title
        }) => (
          <li className="keen-slider__slide" key={uuid()}>
            <ArticleCard
              image={image.data}
              publishedAt={publishedAt}
              slug={slug}
              title={title}
            />
          </li>
        )) : Array.from(Array(PER_VIEW).keys()).map(() => (
          <li className="keen-slider__slide" key={uuid()}>
            <ArticleCardSkeleton />
          </li>
        ))
      }
    </SliderWithPagination>
  );
};
