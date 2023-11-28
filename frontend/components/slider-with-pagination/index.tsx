'use client';

import { useKeenSlider } from 'keen-slider/react';
import { FC } from 'react';
import { v4 as uuid } from 'uuid';

import { Pagination } from '#components/pagination';
import { TestimonialCard } from '#components/testimonial-card';
import { TestimonialCardSkeleton } from '#skeletons/testimonial-card';
import { SliderWithPaginationProps } from '#types/props/lists';
import 'keen-slider/keen-slider.min.css';

export const SliderWithPagination: FC<SliderWithPaginationProps> = ({
  current,
  isLoaded,
  items,
  onNextPage,
  onPreviousPage,
  slider = {
    gap: 30,
    perView: 2
  },
  total
}) => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: slider.perView,
      spacing: slider.gap
    }
  });

  return (
    <div className="ma-slider-with-pagination">
      <ul className="keen-slider mb-14" ref={sliderRef}>
        {
          isLoaded ? items.map(({ logo, opinion, signature }) => (
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
      </ul>
      {
        isLoaded ? (
          <Pagination
            current={current}
            total={total}
            onNextPage={onNextPage}
            onPreviousPage={onPreviousPage}
          />
        ) : <div className="h-[26px]" />
      }
    </div>
  );
};
