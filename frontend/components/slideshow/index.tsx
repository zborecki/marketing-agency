'use client';

import { useKeenSlider } from 'keen-slider/react';
import { FC } from 'react';

import { SlideshowProps } from '#types/props/components';
import 'keen-slider/keen-slider.min.css';

export const Slideshow: FC<SlideshowProps> = ({
  onAnimationEnded,
  onCreated,
  onUpdated,
  children,
  loop = false,
  perView = 6,
  plugins,
  spacing = 30
}) => {
  const [sliderRef] = useKeenSlider({
    animationEnded: onAnimationEnded,
    created: onCreated,
    loop,
    slides: {
      perView,
      spacing
    },
    updated: onUpdated
  }, [plugins]);

  return (
    <ul className="keen-slider" ref={sliderRef}>
      { children }
    </ul>
  );
};
