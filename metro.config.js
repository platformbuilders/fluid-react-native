const path = require('path');
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const withStorybook = require('@storybook/react-native/metro/withStorybook');
const defaultConfig = getDefaultConfig(__dirname);

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resetCache: true
};

defaultConfig.transformer.unstable_allowRequireContext = true;

const finalConfig = mergeConfig(defaultConfig, config);


module.exports = withStorybook(finalConfig, {
  enabled: true,
  configPath: path.resolve(__dirname, './.storybook'),
});