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
  labelStyle,
  rightTextStyle,
  ...rest
}) => (
  <FormError
    id={id || accessibility}
    accessibility={accessibility}
    error={error}
  >
    <Wrapper {...rest}>
      <Label {...labelStyle}>{label}</Label>
      <CheckBox
        testID={`check_${id || accessibility}`}
        accessibilityLabel={`Check ${accessibility}`}
        style={containerStyle}
        isChecked={checked}
        onClick={onPress}
      />
      <Label {...rightTextStyle}>{labelBefore}</Label>
    </Wrapper>
  </FormError>
);

export default CheckboxComponent;
