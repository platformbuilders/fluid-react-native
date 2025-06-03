import React, { FC } from 'react';
import { CheckBoxType } from '../../types';
import FormError from '../FormError';
import { CheckBox, Label, Wrapper, containerStyle } from './styles';

const CheckboxComponent: FC<CheckBoxType> = ({
  id,
  accessibility,
  label = '',
  error = '',
  labelBefore = '',
  checked = false,
  onPress = (): void => {},
  style,
  labelStyle,
  rightTextStyle,
  checkBoxColor,
  ...rest
}) => (
  <FormError
    id={id || accessibility}
    accessibility={accessibility}
    error={error}
  >
    <Wrapper style={style}>
      <Label {...(labelStyle as any)}>{label}</Label>
      <CheckBox
        testID={`check_${id || accessibility}`}
        accessibilityLabel={`Check ${accessibility}`}
        style={containerStyle}
        isChecked={checked}
        onClick={onPress}
        checkBoxColor={checkBoxColor}
        {...(rest as any)}
      />
      <Label {...(rightTextStyle as any)}>{labelBefore}</Label>
    </Wrapper>
  </FormError>
);

export default CheckboxComponent;
