module.exports = {
  presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json'
        ],
        alias: {
          '@': './src',
          '@_app': './src/app',
          '@_screens': './src/screens',
          '@_widgets': './src/widgets',
          '@_entities': './src/entities',
          '@_shared': './src/shared'
        }
      }
    ]
  ]
};
