import { ENDPOINT } from '#constants/endpoints';
import { getResponse } from '#services/common';
import { ArticleRequest } from '#types/api/requests';
import { ArticleResponse } from '#types/api/responses';

export const getArticle = async ({ slug }: ArticleRequest) => (
  getResponse<ArticleResponse>({
    endpoint: `${ENDPOINT.ARTICLES}/${slug}`
  })
);
