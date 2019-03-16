import getConfig from 'next/config';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

export default {
  // Server config
  apiEndpoint: serverRuntimeConfig.API_ENDPOINT,
  jwtSecret: serverRuntimeConfig.JWT_SECRET,
};
