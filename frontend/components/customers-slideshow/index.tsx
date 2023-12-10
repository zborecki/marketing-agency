'use client';

import { FC, useCallback } from 'react';
import { v4 as uuid } from 'uuid';

import { CustomerItem } from '#components/customer-item';
import { Slideshow } from '#components/slideshow';
import { CustomersSlideshowProps } from '#types/props/components';
import { onAnimate } from '#utils/on-animate';

// const animation: SlideshowAnimation = {
//   duration: 7000,
//   easing: (time) => time
// };

// const handleOnCreated = useCallback(({ moveToIdx }: SlideshowInstance) => {
//   moveToIdx(5, true, animation);
// }, []);

// const handleOnUpdated = useCallback(({ moveToIdx, track }: SlideshowInstance) => {
//   moveToIdx(track.details.abs + 5, true, animation);
// }, []);

export const CustomersSlideshow: FC<CustomersSlideshowProps> = ({
  customers
}) => {
  const handleOnAnimate = useCallback(onAnimate, []);

  return (
    <Slideshow plugins={handleOnAnimate} loop>
      {
        customers.map(({ logo, website }) => (
          <li className="keen-slider__slide flex items-center justify-center" key={uuid()}>
            <CustomerItem
              logo={logo}
              website={website}
            />
          </li>
        ))
      }
    </Slideshow>
  );
};
