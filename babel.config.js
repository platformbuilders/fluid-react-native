module.exports = {
  presets: [
    '@babel/preset-react',
    'module:@react-native/babel-preset',
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
