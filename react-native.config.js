module.exports = {
  dependencies: {
    'react-native-elements': {
      root: __dirname,
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
};
