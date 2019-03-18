import getConfig from 'next/config';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

export default {
  // public config
  apiEndpoint: publicRuntimeConfig.API_ENDPOINT,
  jwtSecret: publicRuntimeConfig.JWT_SECRET
};
