import { StyleProp, TextStyle } from 'react-native';
import { PhotoQuality } from 'react-native-image-picker';
import { ImageSource } from './Image';

export type AvatarProps = {
  ref?: any;
  image?: ImageSource;
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
  style?: any;
};
