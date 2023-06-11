import { StyleProp, TextStyle } from 'react-native';
import { PhotoQuality } from 'react-native-image-picker';

export type AvatarType = {
  ref?: any;
  image?: string;
  name?: string;
  showBorder?: boolean;
  animatedLoading?: boolean;
  borderWidth?: number;
  imageQuality?: PhotoQuality;
  borderColor?: string;
  monogramStyle?: StyleProp<TextStyle>;
  displayMonogram?: boolean;
  size?: number;
  onPress?: () => void;
  onUpload?: (uri: string) => any;
  id?: string;
  accessibility: string;
  accessibilityLabel?: string;
  testID?: string;
};
