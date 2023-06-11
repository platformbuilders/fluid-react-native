/* eslint-disable @typescript-eslint/no-var-requires */
const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
  preset: 'react-native',
  moduleDirectories: ['node_modules', 'src'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.test.json',
      importHelpers: true,
    },
  },
  transform: {
    ...tsjPreset.preset,
  },
  transformIgnorePatterns: [
    'node_modules/(?!react-native-haptic|rn-placeholder)/',
    'node_modules/jest-runner/',
  ],
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    '<rootDir>/src/test/mocks.tsx',
  ],
  cacheDirectory: '.jest/cache',
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 65,
      lines: 75,
      statements: 75,
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
