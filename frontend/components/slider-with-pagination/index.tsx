'use client';

import { useKeenSlider } from 'keen-slider/react';
import { FC, useCallback, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { Pagination } from '#components/pagination';
import { TestimonialCard } from '#components/testimonial-card';
import { SliderWithPaginationProps } from '#types/props/lists';
import 'keen-slider/keen-slider.min.css';

export const SliderWithPagination: FC<SliderWithPaginationProps> = ({
  current,
  initialItems,
  slider = {
    gap: 30,
    perView: 2
  },
  total
}) => {
  const [items] = useState<any[]>(initialItems);
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: slider.perView,
      spacing: slider.gap
    }
  });

  const fetchOtherItems = useCallback(() => {

  }, []);

  return (
    <div className="ma-slider-with-pagination">
      <ul className="keen-slider" ref={sliderRef}>
        {
          items.map(({ logo, opinion, signature }) => (
            <li className="keen-slider__slide" key={uuid()}>
              <TestimonialCard
                logo={logo}
                opinion={opinion}
                signature={signature}
              />
            </li>
          ))
        }
      </ul>
      <Pagination
        current={current}
        total={total}
        onNextPage={() => {}}
        onPreviousPage={() => {}}
      />
    </div>
  );
};
