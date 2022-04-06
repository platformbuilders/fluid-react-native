module.exports = {
  presets: [
    '@babel/preset-react',
    'module:metro-react-native-babel-preset',
    '@babel/preset-typescript',
    [
      '@babel/preset-env',
      {
        targets: {
          node: true,
        },
      },
    ],
  ],
};
