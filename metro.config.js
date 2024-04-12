const path = require('path');
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {generate} = require('@storybook/react-native/scripts/generate');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */

generate({
  configPath: path.resolve(__dirname, './.storybook'),
  useJs: true,
});

const config = {};

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.transformer.unstable_allowRequireContext = true;

module.exports = mergeConfig(defaultConfig, config);
