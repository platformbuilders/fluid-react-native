const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
  coverageThreshold: {
    global: {
      branches: 84,
      functions: 84,
      lines: 84,
      statements: 84,
    },
  },
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
    '.stories.tsx',
  ],
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: [
    '<rootDir>/src/setupFile.js',
  ],
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    '<rootDir>/src/__mocks__/react-native-haptic-feedback.ts',
    '<rootDir>/src/__mocks__/platformbuilders-helpers.ts',
    '<rootDir>/src/setupTests.js',
  ],
  cacheDirectory: '.jest/cache',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/assets/**',
    '!**/types/**',
    '!**/__tests__/**',
    '!**/documentation/**',
    '!**/storybook/**',
    '!**/*.stories.tsx',
    '!**/styles.ts',
    '!**/*.style.ts',
    '!**/*.styles.ts',
    '!**/*.enum.ts',
    '!src/enums/index.ts', // No need to test exported files
    '!src/utils/helpers/index.ts', // No need to test exported files
    '!src/theme/animations.ts', // No need to test exported files
    '!src/theme/index.ts', // No need to test exported files
    '!src/index.ts', // No need to test exported files
    '!src/components/index.ts', // No need to test exported files
    '!**/*.d.ts', // No need to test types declarations
    '!src/components/DatePicker/**', // Difícil de testar devido a dependências externas
    '!src/components/UploadPhoto/**', // Difícil de testar devido a dependências externas
  ],
  testTimeout: 20000,
  notify: false,
  testEnvironment: 'node',
};
