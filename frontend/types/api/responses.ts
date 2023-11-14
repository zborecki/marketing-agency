import { OpeningDaysAPI, StatsCardAPI } from '#types/api/components';

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

export interface StatsResponse {
  data: {
    cards: StatsCardAPI[];
  }
}
