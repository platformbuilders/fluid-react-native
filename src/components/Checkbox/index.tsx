import React, { FC } from 'react';
import { CheckBoxType } from '../../types';
import FormError from '../FormError';
import { CheckBox, Label, Wrapper, containerStyle } from './styles';

const CheckboxComponent: FC<CheckBoxType> = ({
  id,
  accessibility,
  label = '',
  error = '',
  checked = false,
  onPress = (): void => {},
  labelStyle,
  ...rest
}) => (
  <FormError
    id={id || accessibility}
    accessibility={accessibility}
    error={error}
  >
    <Wrapper accessibility={`checbox de ${label}`} onPress={onPress} {...rest}>
      <CheckBox
        testID={`check_${id || accessibility}`}
        accessibilityLabel={`Check ${accessibility}`}
        style={containerStyle}
        isChecked={checked}
        onClick={onPress}
      />
      <Label style={labelStyle}>{label}</Label>
    </Wrapper>
  </FormError>
);

export default CheckboxComponent;
