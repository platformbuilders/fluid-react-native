import { IconFonts } from './IconType';

export type UploadPhotoType = {
  ref?: any;
  image?: string;
  imageQuality?: number;
  displayCamera?: boolean;
  onPress?: (x: any) => void;
  onUpload?: (x: any) => any;
  id?: string;
  accessibility: string;
  accessibilityLabel?: string;
  uploadText?: string;
  iconSize?: number;
  uploadIcon?: string;
  testID?: string;
  iconType?: IconFonts;
};
