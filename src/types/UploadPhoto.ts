import { IconFonts } from './IconType';

export type UploadPhotoType = {
  image?: string;
  imageQuality?: number;
  displayCamera?: boolean;
  onPress?: (x: any) => void;
  onUpload?: (x: any) => any;
  onClearUpload?: () => any;
  id?: string;
  accessibility: string;
  accessibilityLabel?: string;
  uploadText?: string;
  uploadIconSize?: number;
  uploadIcon?: string;
  deleteIcon?: string;
  testID?: string;
  iconType?: IconFonts;
};
