'use client';

import { useKeenSlider } from 'keen-slider/react';
import { FC } from 'react';

import { Pagination } from '#components/pagination';
import { SliderWithPaginationProps } from '#types/props/lists';
import 'keen-slider/keen-slider.min.css';

export const SliderWithPagination: FC<SliderWithPaginationProps> = ({
  children,
  current,
  isLoaded,
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
        { children }
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
