import React, { FC, PropsWithChildren } from 'react';
import { StyleProp, TextStyle } from 'react-native';
import {
  generateAccessibilityProps,
  generateTestID,
} from '../../utils/accessibility';
import { ErrorText } from './styles';

const warnBoolean = (): void =>
  // eslint-disable-next-line no-console
  console.warn(
    "@platformbuilders/fluid-react-native: received a truthy boolean error instead of string, which won't be rendered.",
  );

type Props = {
  centered?: boolean;
  large?: boolean;
  error?: string | string[] | boolean;
  id?: string;
  accessibility?: string;
  style?: StyleProp<TextStyle>;
};

const FormError: FC<PropsWithChildren<Props>> = ({
  id = 'form_error',
  accessibility,
  error = '',
  centered = false,
  large = false,
  children,
  ...rest
}) => {
  if (error && typeof error === 'boolean') warnBoolean();

  const errorAccessibilityProps =
    error && typeof error === 'string'
      ? generateAccessibilityProps(
          {
            id: `error_${id}`,
            accessibility: `Erro ${accessibility || error}`,
          },
          'text',
          `Erro: ${error}`,
        )
      : {};

  const errorTestID = generateTestID(
    'error',
    id || accessibility || 'form_error',
  );

  return (
    <>
      {children}
      {error && typeof error === 'string' ? (
        <ErrorText
          centered={centered}
          large={large}
          testID={errorTestID}
          {...errorAccessibilityProps}
          {...rest}
        >
          {error}
        </ErrorText>
      ) : null}
    </>
  );
};

export default FormError;
