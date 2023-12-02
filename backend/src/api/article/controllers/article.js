'use strict';

const { sanitize } = require('@strapi/utils');
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::article.article', ({ strapi }) => ({
  findOne: async (context) => {
    const { params, state } = context;
    const {
      image, locale, sections, slug, teaser, title
    } = await strapi.db.query('api::article.article').findOne({
      populate: [
        'image',
        'sections',
        'sections.image'
      ],
      where: {
        slug: params.id
      }
    });

    return await sanitize.contentAPI.output(
      {
        data: {
          image: {
            alternativeText: image.alternativeText ?? '',
            height: image.height,
            url: image.url,
            width: image.width
          },
          locale,
          sections: sections.map((section) => ({
            content: section.content,
            heading: section.heading,
            image: section.image ? {
              alternativeText: section.image.alternativeText ?? '',
              height: section.image.height,
              url: section.image.url,
              width: section.image.width
            } : null,
          })),
          slug,
          teaser,
          title
        }
      }, 
      strapi.contentType('api::article.article'), 
      { 
        auth: state.auth 
      }
    );
  }
}));
