import { OpeningDaysAPI, SocialMediaAPI, StatsCardAPI } from '#types/api/components';

export interface AchievementsResponse {
  data: {
    cards: StatsCardAPI[];
    description: string;
    title: string;
  }
}

export interface AdvantagesResponse {
  data: {
    cards: {
      content: string;
    }[];
    description: string;
    title: string;
  }
}

export interface ContactResponse {
  data: {
    closingTime: string;
    email: string;
    location: string;
    openingDays: OpeningDaysAPI;
    openingTime: string;
    phoneNumber: string;
  }
}

export interface HeroResponse {
  data: {
    description: string;
    title: string;
  };
}

export interface SocialMediaResponse {
  data: {
    socialMedia: SocialMediaAPI[];
  }
}

export interface StatsResponse {
  data: {
    cards: StatsCardAPI[];
  }
}
