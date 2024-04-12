export default ({config}) => ({
  ...config,
  name: 'Fluid React Native',
  slug: 'fluid-react-native',
  extra: {
    storybookEnabled: process.env.STORYBOOK_ENABLED,
  },
});
