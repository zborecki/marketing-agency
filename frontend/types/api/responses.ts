import { IOpeningDaysAPI } from './components';

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
