import React from 'react';
import { RadioButtonType } from '../../types';
import { CheckedRadio, Label, Radio, Wrapper } from './styles';

const defaultSize = 20;

const RadioButton: React.FC<RadioButtonType> = ({
  id,
  accessibility,
  radioButtonColor,
  checkedRadioButtonColor,
  size = defaultSize,
  internalSize = defaultSize - 7,
  checked = false,
  onPress = () => {},
  label,
  labelStyle = {},
  ...rest
}) => (
  <Wrapper
    id={id || accessibility}
    accessibility={accessibility}
    onPress={onPress}
    {...rest}
  >
    <Radio
      id=""
      accessibility={''}
      onPress={onPress}
      radioButtonColor={radioButtonColor}
      size={size}
    >
      {checked && (
        <CheckedRadio
          checkedRadioButtonColor={checkedRadioButtonColor}
          internalSize={internalSize}
        />
      )}
    </Radio>
    {label && <Label style={labelStyle}>{label}</Label>}
  </Wrapper>
);

export default RadioButton;
