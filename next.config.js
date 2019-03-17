const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');
require('dotenv').config();

module.exports = withCss(withSass({
  serverRuntimeConfig: {
    API_ENDPOINT: process.env.API_ENDPOINT,
  },
  webpack(config, { isServer }) {
    if (process.env.ANALYZE) {
      /* eslint-disable-next-line global-require, import/no-extraneous-dependencies */
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: isServer ? 8888 : 8889,
        openAnalyzer: true,
      }));
    }

    return config;
  },
}));