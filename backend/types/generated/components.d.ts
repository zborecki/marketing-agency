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
    type: Attribute.Enumeration<
      ['clients', 'currency', 'million', 'plus', 'years']
    > &
      Attribute.Required;
    description: Attribute.RichText & Attribute.Required;
  };
}

export interface CardTestimonialCard extends Schema.Component {
  collectionName: 'components_card_testimonial_cards';
  info: {
    displayName: 'Testimonial Card';
    description: '';
  };
  attributes: {
    opinion: Attribute.RichText & Attribute.Required;
    representative: Attribute.String & Attribute.Required;
    logo: Attribute.Media & Attribute.Required;
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

export interface ItemSocialMediaItem extends Schema.Component {
  collectionName: 'components_item_social_media_items';
  info: {
    displayName: 'Social media Item';
    description: '';
  };
  attributes: {
    type: Attribute.Enumeration<['facebook', 'instagram']> & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    label: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'card.advantage-card': CardAdvantageCard;
      'card.stats-card': CardStatsCard;
      'card.testimonial-card': CardTestimonialCard;
      'date.start-end': DateStartEnd;
      'item.social-media-item': ItemSocialMediaItem;
    }
  }
}
