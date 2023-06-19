import React from 'react';
import { NativeModules } from 'react-native';
import mockRNDeviceInfo from 'react-native-device-info/jest/react-native-device-info-mock';
import { beforeAll } from '@jest/globals';

jest.mock('@platformbuilders/helpers/native', () => ({
  isIOS: jest.fn(),
  scale: jest.fn(),
  moderateScale: jest.fn(),
  useSpacingsWithSafeArea: () => ({
    topSpacing: 20,
    bottomSpacing: 20,
  }),
}));

jest.mock('rn-placeholder', () => {
  const RealPlaceholder = jest.requireActual('rn-placeholder');

  const MockShine = jest.fn().mockImplementation((props) => {
    // Mock para o componente Shine
    return <RealPlaceholder.Shine {...props} />;
  });

  return {
    ...RealPlaceholder,
    Shine: MockShine,
    timing: jest.fn(),
  };
});

jest.mock('react-native-device-info', () => mockRNDeviceInfo);

// Mock the ImagePickerManager native module to allow us to unit test the JavaScript code
NativeModules.ImagePickerManager = {
  showImagePicker: jest.fn(),
  launchCamera: jest.fn(),
  launchImageLibrary: jest.fn(),
};

NativeModules.ReactNativeHaptic = {
  generate: jest.fn(),
};

// Reset the mocks before each test
beforeAll(() => {
  jest.resetAllMocks();
});
