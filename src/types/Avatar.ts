import React from 'react';
export type AvatarType = {
  ref?: React.RefObject<AvatarRef>;
  image?: string;
  name?: string;
  showBorder?: boolean;
  borderWidth?: number;
  imageQuality?: number;
  borderColor?: string;
  displayCamera?: boolean;
  size?: number;
  onPress?: () => void;
  onUpload?: (data?: string) => void;
  id?: string;
  accessibility: string;
  accessibilityLabel?: string;
  testID?: string;
};

export type AvatarRef = {
  getUploadImage(): string | undefined;
  clearUploadImage(): void;
  takePicture(): Promise<void>;
  openPicker(): Promise<void>;
};
