import { Skeleton } from '@nextui-org/react';

export const TestimonialCardSkeleton = () => (
  <div className="ma-testimonial-card-skeleton">
    <div className="ma-testimonial-card-skeleton__wrapper">
      <Skeleton className="ma-testimonial-card-skeleton__logo" />
      <Skeleton className="ma-testimonial-card-skeleton__opinion" />
      <Skeleton className="ma-testimonial-card-skeleton__signature" />
    </div>
  </div>
);
