import { ComponentType } from 'react';
import { Animated } from 'react-native';
import DefaultDatePicker, {
  DatePickerCustomStylesProps,
} from 'react-native-datepicker';
import styled from 'styled-components/native';
import { InputStatus } from '../../types';
import { getTheme, switchStyle } from '../../utils/helpers';

const getStatusStyle = switchStyle('status');
const brandContrast = getTheme('brand.primary.contrast');
const brandPrimary = getTheme('brand.primary.main');
const disabled = getTheme('brand.primary.light');
const successMain = getTheme('success.main');
const dangerMain = getTheme('danger.main');

const inputMainColor = (props: { dark: any }): any =>
  getStatusStyle({
    [InputStatus.Success]: successMain,
    [InputStatus.Danger]: dangerMain,
    [InputStatus.Default]: props.dark ? brandPrimary : brandContrast,
    [InputStatus.Disabled]: `${disabled}60`,
  });

export const LABEL_UPPER_STYLE = {
  top: 8,
  fontSize: 14,
};

export const LABEL_LOWER_STYLE = {
  top: 40,
  fontSize: 18,
};

interface TextProps {
  dark?: boolean;
  error?: string;
  isPlaceholder?: boolean;
}

export const TextLabel = styled.Text<TextProps>`
  line-height: 19px;
  padding-bottom: 15px;
  color: ${(props: TextProps): string =>
    props.dark ? brandPrimary(props) : brandContrast(props)};
`;

export const Label = Animated.createAnimatedComponent<ComponentType<any>>(
  TextLabel,
);

interface DatePickerProps {
  customStyles?: DatePickerCustomStylesProps;
  dark?: boolean;
  editable: boolean;
}
export const DatePicker = styled(DefaultDatePicker)<DatePickerProps>`
  width: 100%;
`;

export const BottomLine = styled.View`
  height: 1px;
  // inputMainColor precisa ser ajustado, está retornando alguma propriedade inválida
  /* background-color: ${inputMainColor}; */
`;

const commonDatePickerStyles = {
  disabled: {
    backgroundColor: 'transparent',
  },
  dateInput: {
    borderWidth: 0,
  },
  dateTouchBody: {
    width: '100%',
  },
};

export const DatePickerStyles: DatePickerCustomStylesProps = {
  ...commonDatePickerStyles,
  placeholderText: {
    position: 'absolute',
    left: 0,
    color: '#fff',
    fontSize: LABEL_LOWER_STYLE.fontSize,
  },
  dateText: {
    position: 'absolute',
    left: 0,
    color: '#fff',
    fontSize: LABEL_UPPER_STYLE.fontSize,
    fontWeight: '700',
  },
};

export const DatePickerStylesDark: DatePickerCustomStylesProps = {
  ...commonDatePickerStyles,
  placeholderText: {
    position: 'absolute',
    left: 0,
    color: '#000',
    fontSize: LABEL_LOWER_STYLE.fontSize,
  },
  dateText: {
    position: 'absolute',
    left: 0,
    color: '#000',
    fontSize: LABEL_UPPER_STYLE.fontSize,
    fontWeight: '700',
  },
};
