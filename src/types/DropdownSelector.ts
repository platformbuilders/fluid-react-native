import { PickerItemProps, PickerProps } from '@react-native-picker/picker';
import { HitSlopType } from './Common';
import { FontType } from './IconType';
import { TypographyVariants } from './Variants';

export type DropdownSelectorType = {
  // component content
  id: string;
  accessibility: string;
  options: PickerItemProps[];
  // layout
  large?: boolean;
  contrast?: boolean;
  centered?: boolean;
  iconSize?: number;
  iconTouchableEnabled?: boolean;
  status?: string;
  error?: string | boolean;
  iconHitSlop?: HitSlopType;
  iconName?: string;
  label?: string;
  style?: any;
  leftIconColor?: string;
  iconColor?: string;
  borderedBackgroundColor?: string;
  borderedHeight?: number;
  borderedColor?: string;
  borderedRadius?: number;
  fixedLabelVariant?: TypographyVariants;
  rightIconName?: string;
  leftIconName?: string;
  iconType?: FontType;
  // state handlers
  onPressIcon?(arg?: any): void;
  onRightIconPress?(x?: any): void;
  selectedValue?: any;
  setSelectedValue?(itemValue?: any, itemIndex?: number): void;
} & PickerProps;
