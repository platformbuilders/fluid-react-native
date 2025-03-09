import React from 'react';
import { View } from 'react-native';
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
    testID={id || `radio_${label || accessibility}`}
    accessibilityLabel={accessibility || label || 'Radio button'}
    accessibilityRole="radio"
    accessibilityState={{ checked }}
    accessibilityHint={`${label || 'This option'} can be selected by tapping`}
    accessibilityLiveRegion="polite"
    accessible={true}
    onPress={onPress}
    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
    {...rest}
  >
    <View
      style={{
        minWidth: 44,
        minHeight: 44,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Radio
        radioButtonColor={radioButtonColor}
        size={size}
        importantForAccessibility="no"
      >
        {checked && (
          <CheckedRadio
            checkedRadioButtonColor={checkedRadioButtonColor}
            internalSize={internalSize}
          />
        )}
      </Radio>
    </View>
    {label && <Label style={labelStyle}>{label}</Label>}
  </Wrapper>
);

export default RadioButton;
