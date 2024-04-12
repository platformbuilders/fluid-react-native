jest.mock('@platformbuilders/helpers/native', () => ({
  isIOS: jest.fn(),
  scale: jest.fn(),
  moderateScale: jest.fn(),
  useSpacingsWithSafeArea: () => ({
    topSpacing: 20,
    bottomSpacing: 20,
  }),
}));
