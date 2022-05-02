/* eslint-disable no-sparse-arrays */
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        root: ['./src'],
        extensions: ['.js', '.tsx', '.ts', '.ios.js', 'android.js'],
        alias: {
          components: ['./src/components'],
          screens: ['./src/screens'],
          routes: ['./src/navigation'],
          services: ['./src/services'],
        },
      },
      ,
    ],
    'react-native-reanimated/plugin',
  ],
};
