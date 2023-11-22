import { OpeningDaysAPI, SocialMediaAPI, StatsCardAPI } from '#types/api/components';

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

export interface GenericResponse<T> {
  data: T;
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

export interface TestimonialsResponse extends SectionResponse {
}
