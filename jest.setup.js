import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

require('dotenv').config();
require('next/config').setConfig({
  serverRuntimeConfig: {
    API_ENDPOINT: process.env.API_ENDPOINT,
    JWT_SECRET: process.env.JWT_SECRET
  },
  publicRuntimeConfig: {
    API_ENDPOINT: process.env.API_ENDPOINT,
    JWT_SECRET: process.env.JWT_SECRET
  },
});

configure({ adapter: new Adapter() });
