import Image from 'next/image';
import { FC } from 'react';

import { ArticleHeader } from '#components/article/header';
import { imageURL } from '#constants/common';
import { ImageProps } from '#types/props/common';
import { ArticleHeaderProps } from '#types/props/components';

type Props = ArticleHeaderProps & ImageProps;

export const ArticleIntroduction: FC<Props> = ({
  alternativeText, teaser, title, url
}) => (
  <section className="ma-article__introduction">
    <ArticleHeader
      teaser={teaser}
      title={title}
    />
    <Image
      alt={alternativeText}
      height={722}
      src={imageURL(url)}
      title={alternativeText}
      width={1140}
      priority
    />
  </section>
);
