import { IOpeningDaysAPI, IStatsCardAPI } from '#types/api/components';

export interface IAvantagesSectionResponse {
  data: {
    cards: {
      content: string;
    }[];
    description: string;
    title: string;
  }
}

export interface IContactResponse {
  data: {
    closingTime: string;
    email: string;
    location: string;
    openingDays: IOpeningDaysAPI;
    openingTime: string;
    phoneNumber: string;
  }
}

export interface IHeroSectionResponse {
  data: {
    description: string;
    title: string;
  };
}

export interface IStatsSectionResponse {
  data: {
    cards: IStatsCardAPI[];
  }
}
