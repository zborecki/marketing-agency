import { ScrollShadow } from '@nextui-org/react';
import Image from 'next/image';
import { FC } from 'react';

import { imageURL } from '#constants/common';
import { TestimonialCardProps } from '#types/props/components';
import { classNames } from '#utils/classNames';

export const TestimonialCard: FC<TestimonialCardProps> = ({
  className,
  full,
  logo: { data: logo },
  opinion,
  signature
}) => (
  <div
    className={classNames([
      'ma-testimonial-card',
      full && 'ma-testimonial-card--full',
      className
    ])}
  >
    <Image
      alt={logo.alternativeText}
      className="ma-testimonial-card__logo"
      height={48}
      src={imageURL(logo.url)}
      title={logo.alternativeText}
      width={logo.width}
    />
    <ScrollShadow className="ma-testimonial-card__content" hideScrollBar>
      <p className="ma-testimonial-card__opinion">{ opinion }</p>
    </ScrollShadow>
    <p className="ma-testimonial-card__signature">
      { signature }
    </p>
  </div>
);
