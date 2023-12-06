import { Skeleton } from '@nextui-org/react';

export const ArticleCardSkeleton = () => (
  <div className="ma-article-card-skeleton">
    <figure className="ma-article-card-skeleton__thumbnail">
      <Skeleton className="ma-article-card-skeleton__cover" />
    </figure>
    <div className="ma-article-card-skeleton__content">
      <Skeleton className="ma-article-card-skeleton__title" />
      <Skeleton className="" />
      <Skeleton className="" />
    </div>
  </div>
);
