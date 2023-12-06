import {
  ArticleSectionAPI,
  ImageAPI,
  OpeningDaysAPI, PaginationAPI, SocialMediaAPI, StatsCardAPI
} from '#types/api/components';

export interface ArticleResponse {
  image: ImageAPI;
  locale: string;
  sections: ArticleSectionAPI[];
  slug: string;
  teaser: string;
  title: string;
}

export interface AchievementsResponse extends SectionResponse {
  cards: StatsCardAPI[];
}

export interface AdvantagesResponse extends SectionResponse {
  cards: {
    content: string;
  }[];
}

export interface ContactResponse {
  closingTime: string;
  email: string;
  location: string;
  openingDays: OpeningDaysAPI;
  openingTime: string;
  phoneNumber: string;
}

export interface GenericPaginatedResponse<T> {
  data: T[];
  meta: {
    pagination: PaginationAPI;
  }
}

export interface GenericResponse<T> {
  data: T;
}

export interface RecommendedArticleResponse {
  image: {
    data: ImageAPI;
  };
  publishedAt: string;
  slug: string;
  title: string;
}

export interface SectionResponse {
  description: string;
  title: string;
}

export interface SocialMediaResponse {
  socialMedia: SocialMediaAPI[];
}

export interface StatsResponse {
  cards: StatsCardAPI[];
}
