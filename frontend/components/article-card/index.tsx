import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { DateBadge } from '#components/date-badge';
import { imageURL } from '#constants/common';
import { INTERNAL_ROUTE } from '#constants/routes';
import { ArticleCardProps } from '#types/props/components';

export const ArticleCard: FC<ArticleCardProps> = ({
  image, publishedAt, slug, title
}) => (
  <div className="ma-article-card">
    <figure className="ma-article-card__thumbnail">
      <DateBadge className="ma-article-card__badge" date={publishedAt} />
      <Link href={`${INTERNAL_ROUTE.ARTICLE}/${slug}`}>
        <Image
          alt={image.alternativeText}
          className="ma-article-card__cover"
          height={229}
          src={imageURL(image.url)}
          title={image.alternativeText}
          width={360}
        />
      </Link>
    </figure>
    <div className="ma-article-card__content">
      <Link
        className="ma-interactive-text ma-article-card__title"
        href={`${INTERNAL_ROUTE.ARTICLE}/${slug}`}
      >
        { title }
      </Link>
    </div>
  </div>
);
