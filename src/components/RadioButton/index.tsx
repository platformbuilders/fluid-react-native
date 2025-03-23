import React from 'react';
import { View } from 'react-native';
import { RadioButtonType } from '../../types';
import { generateAccessibilityProps, generateTestID } from '../../utils';
import { CheckedRadio, Label, Radio, Wrapper } from './styles';

const defaultSize = 20;

const RadioButton: React.FC<RadioButtonType> = ({
  id,
  accessibility,
  accessibilityLabel,
  testID,
  radioButtonColor,
  checkedRadioButtonColor,
  size = defaultSize,
  internalSize = defaultSize - 7,
  checked = false,
  onPress = () => {},
  label,
  labelStyle = {},
  disabled,
  ...rest
}) => {
  // Gera propriedades de acessibilidade padronizadas
  const accessibilityProps = generateAccessibilityProps(
    { 
      id, 
      accessibility, 
      accessibilityLabel, 
      checked,
      disabled
    },
    'radio',
    label || 'Botão de opção',
    label ? `${label} pode ser selecionado com um toque` : 'Esta opção pode ser selecionada com um toque'
  );

  // Gera ID de teste padronizado
  const radioTestID = generateTestID(
    { id, accessibility, testID },
    'radio'
  );

  return (
    <Wrapper
      id={id || accessibility}
      testID={radioTestID}
      {...accessibilityProps}
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
};

export default RadioButton;
