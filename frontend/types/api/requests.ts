export interface ArticleRequest {
  slug: string;
}

export type LocaleRequest = {
  locale?: string;
};

export interface PaginationRequest extends LocaleRequest {
  page?: number;
}
