const { withNativeWind } = require('nativewind/metro');
const { getDefaultConfig } = require('@react-native/metro-config');
const { makeMetroConfig } = require('@rnx-kit/metro-config');
const path = require('path'); // 이 줄을 추가

const defaultConfig = getDefaultConfig(__dirname);

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = makeMetroConfig({
  ...defaultConfig,
  projectRoot: __dirname,
  watchFolders: [
    path.resolve(__dirname, '../../node_modules'), // 추가: 루트 node_modules 포함
  ],
});

module.exports = withNativeWind(config, {
  input: './src/theme/globals.css',
});
