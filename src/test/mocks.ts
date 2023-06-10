/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
/* eslint-env jest */

import { NativeModules } from 'react-native';
import mockRNDeviceInfo from 'react-native-device-info/jest/react-native-device-info-mock';
import { beforeAll } from '@jest/globals';

jest.mock('@platformbuilders/helpers/native', () => ({
  generateHaptic: jest.fn(),
  isIOS: jest.fn(),
}));
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
