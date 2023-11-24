'use client';

import { useKeenSlider } from 'keen-slider/react';
import { FC } from 'react';
import { v4 as uuid } from 'uuid';

import { Pagination } from '#components/pagination';
import { TestimonialCard } from '#components/testimonial-card';
import { TestimonialsProps } from '#types/props/lists';
import 'keen-slider/keen-slider.min.css';

export const Testimonials: FC<TestimonialsProps> = ({
  initialTestimonials
}) => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 30
    }
  });

  return (
    <>
      <ul className="keen-slider" ref={sliderRef}>
        {
        initialTestimonials.map(({ logo, opinion, signature }) => (
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
      <Pagination />
    </>
  );
};
