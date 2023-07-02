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
      branches: 75,
      functions: 65,
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
    '!**/styles.ts',
    '!**/*.enum.ts',
    '!src/enums/index.ts', // No need to test exported files
    '!src/utils/helpers/index.ts', // No need to test exported files
    '!src/theme/animations.ts', // No need to test exported files
    '!src/index.ts', // No need to test exported files
    '!src/components/index.ts', // No need to test exported files
    '!**/*.d.ts', // No need to test types declarations
  ],
};
