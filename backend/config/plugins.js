module.exports = ({ env }) => ({
  'strapi-plugin-populate-deep': {
    config: {
      defaultDepth: 3
    }
  },
  'transformer': {
    enabled: true,
    config: {
      responseTransforms: {
        removeAttributesKey: true,
      },
    }
  },
});