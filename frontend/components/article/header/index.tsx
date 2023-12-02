import { FC } from 'react';

import { ArticleHeaderProps } from '#types/props/components';

export const ArticleHeader: FC<ArticleHeaderProps> = ({
  teaser, title
}) => (
  <header className="ma-article__header">
    <h2 className="ma-article__title">{ title }</h2>
    <p className="ma-article__teaser">{ teaser }</p>
  </header>
);
