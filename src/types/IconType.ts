import { IconFonts } from '../enums';
import { HitSlopType } from './Common';
import { TouchableType } from './TouchableType';

export { IconFonts };

export interface IconType extends TouchableType {
  name: string;
  touchable?: boolean;
  size?: number;
  color?: string;
  style?: any;
  borderColor?: string;
  backgroundColor?: string;
  hitSlop?: HitSlopType;
  iconSets?: any;
  width?: number;
  height?: number;
  type?: IconFonts;
}
