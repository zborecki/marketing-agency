import type { Schema, Attribute } from '@strapi/strapi';

export interface DateStartEnd extends Schema.Component {
  collectionName: 'components_date_start_ends';
  info: {
    displayName: 'Opening days';
    icon: 'calendar';
    description: '';
  };
  attributes: {
    start: Attribute.Enumeration<
      [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ]
    >;
    end: Attribute.Enumeration<
      [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ]
    >;
    isEveryday: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'date.start-end': DateStartEnd;
    }
  }
}
