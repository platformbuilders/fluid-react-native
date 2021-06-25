module.exports = {
  preset: 'react-native',
  moduleDirectories: ['node_modules', 'src'],
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    '<rootDir>/src/test/mocks.ts',
  ],
  cacheDirectory: '.jest/cache',
  coverageThreshold: {
    global: {
      branches: 55,
      functions: 55,
      lines: 75,
      statements: 50,
    },
  },
};
