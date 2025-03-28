module.exports = {
  extends: '@platformbuilders/eslint-config-builders/react',
  ignorePatterns: [
    'jest',
    'src/**/*.spec.{ts,tsx}',
    'src/**/__tests__/**/*',
    'src/**/__test__/**/*',
    'dist',
    'node_modules'
  ],
  overrides: [
    {
      files: ['src/components/Avatar/index.tsx'],
      rules: {
        'sonarjs/cognitive-complexity': 'off',
      },
    },
  ],
};
