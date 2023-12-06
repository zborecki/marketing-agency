import { ENDPOINT } from '#constants/endpoints';
import { getResponse } from '#services/common';
import { ArticleRequest, LocaleRequest } from '#types/api/requests';
import { ArticleResponse, RecommendedArticleResponse } from '#types/api/responses';

export const getArticle = async ({ slug }: ArticleRequest) => (
  getResponse<ArticleResponse>({
    endpoint: `${ENDPOINT.ARTICLES}/${slug}`
  })
);

export const getRecommendedArticles = async ({ locale }: LocaleRequest) => (
  getResponse<RecommendedArticleResponse[]>({
    additionalQueryParameters: '&fields[0]=title&fields[1]=publishedAt&fields[2]=slug',
    endpoint: `${ENDPOINT.ARTICLES}`,
    locale
  })
);
