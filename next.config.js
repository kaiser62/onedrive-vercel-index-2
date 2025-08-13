const { i18n } = require('./next-i18next.config')

module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = config.externals || [];
      config.externals.push('plyr');
    }
    return config;
  },
};
