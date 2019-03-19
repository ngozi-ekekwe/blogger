module.exports = {
  moduleFileExtensions: ['jsx', 'js'],
  setupFiles: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  testURL: 'http://dirtylemon.localhost',
  transform: {
      '^.+\\.jsx?$': 'babel-jest',
  },
  snapshotSerializers: [
      'enzyme-to-json/serializer',
  ],
  verbose: true,
};
