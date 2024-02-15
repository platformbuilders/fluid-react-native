import React, { FC } from 'react';
import { Animated, View } from 'react-native';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as SvgIcons from '../../assets/svg';
import { IconFonts } from '../../enums';
import { IconType } from '../../types';
import If from '../If';
import Touchable from '../Touchable';
import { FaBrands, FaLight, FaRegular, FaSolid } from './FontAwesomeProIcons';

export const Icon: FC<IconType> = ({
  id,
  accessibility,
  accessibilityLabel,
  testID,
  name = '',
  touchable = true,
  isEmoji = false,
  size = 20,
  color = undefined,
  style = [{}],
  onPress = (): void => {},
  borderColor = 'transparent',
  backgroundColor = 'transparent',
  type = IconFonts.FontAwesome,
  iconSets,
  width,
  height,
  ...rest
}) => {
  const iconName = name?.charAt(0).toUpperCase() + name?.slice(1);
  const bundleName = `Icon${iconName}`;
  const svgIcons: any = SvgIcons[bundleName];
  const Svg: any = iconSets ? iconSets[bundleName] : svgIcons;

  const iconSet = {
    [IconFonts.FontAwesome]: FontAwesome5Icons,
    [IconFonts.Material]: MaterialIcons,
    [IconFonts.FABrands]: FaBrands,
    [IconFonts.FALight]: FaLight,
    [IconFonts.FARegular]: FaRegular,
    [IconFonts.FASolid]: FaSolid,
  };

  const IconComponent = iconSet[type];

  return (
    <Animated.View style={style}>
      <Touchable
        id={id || accessibility}
        accessibility={accessibility || iconName}
        accessibilityLabel={accessibilityLabel || accessibility}
        testID={testID || id || accessibility}
        disabled={!touchable}
        onPress={onPress}
        {...rest}
      >
        <View>
          <If condition={isEmoji}>
            <Animated.Text
              style={{
                fontSize: size,
                color,
                borderColor,
                backgroundColor,
                width,
                height,
              }}
            >
              {name}
            </Animated.Text>
          </If>
          {Svg && (
            <Svg
              width={width || size}
              height={height || size}
              color={color}
              borderColor={borderColor}
              backgroundColor={backgroundColor}
            />
          )}
          <If condition={!isEmoji && !Svg}>
            <IconComponent name={name} color={color} size={size} />
          </If>
        </View>
      </Touchable>
    </Animated.View>
  );
};

export default Icon;
