import type { Schema, Attribute } from '@strapi/strapi';

export interface CardAdvantageCard extends Schema.Component {
  collectionName: 'components_card_advantage_cards';
  info: {
    displayName: 'Advantage Card';
    icon: 'attachment';
  };
  attributes: {
    content: Attribute.RichText & Attribute.Required;
  };
}

export interface CardStatsCard extends Schema.Component {
  collectionName: 'components_card_stats_cards';
  info: {
    displayName: 'Stats Card';
    description: '';
  };
  attributes: {
    value: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    type: Attribute.Enumeration<['currency', 'plus', 'years']> &
      Attribute.Required;
    description: Attribute.RichText & Attribute.Required;
  };
}

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
      'card.advantage-card': CardAdvantageCard;
      'card.stats-card': CardStatsCard;
      'date.start-end': DateStartEnd;
    }
  }
}
