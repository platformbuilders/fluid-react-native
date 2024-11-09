jest.mock('@platformbuilders/helpers/native', () => ({
  isIOS: jest.fn(),
  useSpacingsWithSafeArea: () => ({
    topSpacing: 20,
    bottomSpacing: 20,
  }),
}));
