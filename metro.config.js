const { withNativeWind } = require('nativewind/metro');
const { getDefaultConfig } = require('@react-native/metro-config');
const { makeMetroConfig } = require('@rnx-kit/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = makeMetroConfig({
  ...defaultConfig,
  projectRoot: __dirname
});

module.exports = withNativeWind(config, {
  input: './src/app/globals.css'
});
