import React, { FC } from 'react';
import { isEmpty } from 'lodash';
import { moderateScale } from 'react-native-size-matters';
import { Picker } from '@react-native-picker/picker';
import { DropdownSelectorType } from '../../types';

import FormError from '../FormError';
import {
  BorderedAreaWrapper,
  BorderedColumnWrapper,
  BorderedWrapper,
  FixedLabel,
  Icon,
  Wrapper,
} from './styles';

const DropdownSelector: FC<DropdownSelectorType> = ({
  id,
  accessibility,
  large = false,
  contrast = false,
  centered = false,
  iconSize = 20,
  iconTouchableEnabled = false,
  iconName,
  label = '',
  error = '',
  style = {},
  iconHitSlop = {},
  onPressIcon = (): any => {},
  onRightIconPress = (): any => {},
  rightIconName,
  leftIconName = '',
  leftIconColor,
  iconColor,
  borderedBackgroundColor,
  borderedHeight = moderateScale(50),
  borderedColor,
  borderedRadius,
  iconType = 'material',
  fixedLabelVariant = 'caption2',
  selectedValue,
  setSelectedValue = (): void => {},
  options,
  testID,
  ...rest
}) => {
  const hasError = !isEmpty(error);

  const _renderPickerInput = (): JSX.Element => {
    return (
      <Picker
        testID={testID || id || accessibility}
        selectedValue={selectedValue}
        onValueChange={(itemValue: any, itemIndex: number) => {
          setSelectedValue(itemValue, itemIndex);
        }}
        {...rest}
      >
        {options.map((option) => (
          <Picker.Item
            label={option.label}
            key={option.value || option.label}
            value={option.value || option.label}
            {...option}
          />
        ))}
      </Picker>
    );
  };

  const _renderIcon = (iconProp: string, isLeft?: boolean) => (
    <Icon
      type={iconType}
      id={`id_${iconProp}`}
      accessibility={`icon_${accessibility}`}
      size={iconSize}
      name={iconProp || ''}
      contrast={contrast}
      error={hasError}
      touchable={iconTouchableEnabled}
      onPress={!!rightIconName ? onRightIconPress : onPressIcon}
      hitSlop={iconHitSlop}
      iconColor={isLeft ? leftIconColor : iconColor}
    />
  );

  return (
    <Wrapper style={style}>
      <FormError
        id={id || accessibility}
        accessibility={accessibility}
        centered={centered}
        error={error}
        large={large}
      >
        <BorderedWrapper
          borderedBackgroundColor={borderedBackgroundColor}
          borderedHeight={borderedHeight}
          borderedColor={borderedColor}
          borderedRadius={borderedRadius}
          error={hasError}
        >
          <BorderedAreaWrapper>
            {!isEmpty(leftIconName) && _renderIcon(leftIconName, true)}
            <BorderedColumnWrapper hasLeftIcon={!isEmpty(leftIconName)}>
              <FixedLabel
                hasLeftIcon={!isEmpty(leftIconName)}
                variant={fixedLabelVariant}
              >
                {label}
              </FixedLabel>
              {_renderPickerInput()}
            </BorderedColumnWrapper>
            {!isEmpty(iconName) && _renderIcon(iconName || '')}
          </BorderedAreaWrapper>
        </BorderedWrapper>
      </FormError>
    </Wrapper>
  );
};

export default DropdownSelector;
