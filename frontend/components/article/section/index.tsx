import Image from 'next/image';
import { FC } from 'react';

import { imageURL } from '#constants/common';
import { ArticleSectionAPI } from '#types/api/components';

export const ArticleSection: FC<ArticleSectionAPI> = ({
  content, heading, image
}) => (
  <section className="ma-article__section">
    <h2 className="ma-article__title--small">{ heading }</h2>
    <div className="ma-article__content">
      <p className="ma-article__paragraph">{ content }</p>
      {
        image && (
          <Image
            alt={image.alternativeText}
            height={475}
            src={imageURL(image.url)}
            title={image.alternativeText}
            width={750}
          />
        )
      }
    </div>
  </section>
);
