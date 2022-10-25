export type AvatarType = {
  ref?: any;
  image?: string;
  name?: string;
  showBorder?: boolean;
  borderWidth?: number;
  borderColor?: string;
  displayCamera?: boolean;
  size?: number;
  onPress?: (x: any) => void;
  onUpload?: (x: any) => any;
  id?: string;
  accessibility: string;
  accessibilityLabel?: string;
  testID?: string;
};
