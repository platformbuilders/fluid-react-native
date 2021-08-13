module.exports = {
  preset: 'react-native',
  moduleDirectories: ['node_modules', 'src'],
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native-community|@react-native-picker)',
  ],
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    '<rootDir>/src/test/mocks.ts',
  ],
  cacheDirectory: '.jest/cache',
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 70,
      lines: 80,
      statements: 80,
    },
  },
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/assets/**',
    '!**/types/**',
    '!**/__tests__/**',
    '!**/documentation/**',
    '!**/storybook/**',
  ],
};
