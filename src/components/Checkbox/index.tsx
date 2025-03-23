import React, { FC, ReactElement } from 'react';
import { CheckBoxType } from '../../types';
import { generateAccessibilityProps, generateTestID } from '../../utils';
import FormError from '../FormError';
import { CheckBox, Label, Wrapper, containerStyle } from './styles';

const CheckboxComponent: FC<CheckBoxType> = ({
  id,
  accessibility,
  accessibilityLabel,
  testID,
  label = '',
  error = '',
  checked = false,
  onPress = (): void => {},
  labelStyle,
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
    'checkbox',
    typeof label === 'string' ? label : 'Caixa de seleção',
    typeof label === 'string' ? `Marcar ou desmarcar ${label}` : 'Marcar ou desmarcar'
  );

  // Gera ID de teste padronizado
  const checkboxTestID = generateTestID(
    { id, accessibility, testID },
    'checkbox'
  );

  return (
    <FormError
      id={id || accessibility}
      accessibility={accessibility}
      error={error}
    >
      <Wrapper 
        {...accessibilityProps}
        onPress={onPress} 
        testID={checkboxTestID}
        {...rest}
      >
        <CheckBox
          style={containerStyle}
          isChecked={checked}
          onClick={onPress}
          importantForAccessibility="no"
        />
        <Label style={labelStyle}>{label}</Label>
      </Wrapper>
    </FormError>
  );
}

export default CheckboxComponent;
