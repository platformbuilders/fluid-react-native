import React, { FC } from 'react';
import { CheckBoxType } from '../../types';
import { generateAccessibilityProps } from '../../utils';
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
  // Define o label padrão baseado no conteúdo do label
  const defaultLabel =
    typeof label === 'string' && label ? `checbox de ${label}` : 'checbox de ';

  // Gera propriedades de acessibilidade padronizadas
  const accessibilityProps = generateAccessibilityProps(
    {
      id,
      accessibility,
      accessibilityLabel: accessibilityLabel || defaultLabel,
      checked,
      disabled,
    },
    'checkbox',
    defaultLabel,
    typeof label === 'string'
      ? `Marcar ou desmarcar ${label}`
      : 'Marcar ou desmarcar',
  );

  // Gera ID de teste padronizado
  const prefix = 'checkbox';
  let checkboxTestID;

  // Se tiver ID, formata como "prefix_id"
  if (id) {
    checkboxTestID = `${prefix}_${id}`;
  }
  // Se não tiver ID mas tiver accessibility, formata como "prefix_accessibility"
  else if (accessibility) {
    checkboxTestID = `${prefix}_${accessibility}`;
  }
  // Fallback para o testID fornecido com prefixo
  else if (testID) {
    checkboxTestID = `${prefix}_${testID}`;
  } else {
    checkboxTestID = `${prefix}_checkbox`;
  }

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
        <Label style={labelStyle} accessibilityLabel="">
          {label}
        </Label>
      </Wrapper>
    </FormError>
  );
};

export default CheckboxComponent;
