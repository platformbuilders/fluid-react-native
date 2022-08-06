module.exports = {
  dependencies: {
    'fluid-react-native': {
      root: __dirname,
    },
    'react-native-vector-icons': {
      platforms: {
        ios: null,
      },
    },
  },
  project: {
    android: {
      sourceDir: './DevelopmentApp/android',
    },
    ios: {
      project: './DevelopmentApp/ios/DevelopmentApp.xcodeproj',
    },
  },
  assets: ['./DevelopmentApp/assets/fonts/'],
};
