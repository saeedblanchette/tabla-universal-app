const { withExpo } = require('@expo/next-adapter')
const withFonts = require('next-fonts')
const withPlugins = require('next-compose-plugins');

// const withTM = require('next-transpile-modules')([      'app',
// "react-native",
// 'react-native-web',
// // 'react-native-svg',
// "@react-native/assets",
// "expo",
// "@expo/vector-icons",

// 'solito',
// 'moti',
// "@react-native/assets",
// "expo",
// "expo-asset",
// "expo-font",
// "expo-modules-core",
// "@expo/vector-icons",

// 'react-native-reanimated',
// 'nativewind',
// 'react-native-gesture-handler'])
/** @type {import('next').NextConfig} */
const nextConfig = {
  // reanimated (and thus, Moti) doesn't work with strict mode currently...
  // https://github.com/nandorojo/moti/issues/224
  // https://github.com/necolas/react-native-web/pull/2330j
  // https://github.com/nandorojo/moti/issues/224
  // once that gets fixed, set this back to true
  reactStrictMode: false,
  transpilePackages: [
    'solito',
    'app',
    "react-native",
    'react-native-web',
    'react-native-svg',
    "@react-native/assets",
    "expo",
    'moti',
    "expo",
    "expo-asset",
    "expo-font",
    "expo-modules-core",
  
    'react-native-reanimated',
    'nativewind',
    'react-native-gesture-handler'
  ],
}
module.exports = withPlugins([ withFonts, [withExpo, { projectRoot: __dirname }]], nextConfig);
