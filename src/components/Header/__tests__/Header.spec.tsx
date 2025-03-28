import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import { fireEvent, render } from '@testing-library/react-native';

import Header, { DEFAULT_LEFT_ICON_NAME, DEFAULT_RIGHT_ICON_NAME } from '..';
import { HeaderTheme } from '../../../enums';
import theme from '../../../theme';

const onPressLeftIcon = jest.fn();
const onPressRightIcon = jest.fn();

describe('<Header />', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should render Header', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Header
          title="Cadastro"
          subtitle="O seu saldo é de R$2.500,00"
          theme={HeaderTheme.PRIMARY}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should trigger onPressLeftIcon function when left icon is pressed', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Header
          title="Cadastro"
          subtitle="O seu saldo é de R$2.500,00"
          theme={HeaderTheme.PRIMARY}
          onPressLeftIcon={onPressLeftIcon}
          onPressRightIcon={onPressRightIcon}
        />
      </ThemeProvider>,
    );

    const component = getByTestId(DEFAULT_LEFT_ICON_NAME);

    fireEvent.press(component);

    expect(onPressLeftIcon).toHaveBeenCalledTimes(1);
    expect(onPressRightIcon).not.toHaveBeenCalled();
  });

  it('should trigger onPressRightIcon function when right icon is pressed', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Header
          title="Cadastro"
          subtitle="O seu saldo é de R$2.500,00"
          theme={HeaderTheme.PRIMARY}
          onPressLeftIcon={onPressRightIcon}
          onPressRightIcon={onPressRightIcon}
        />
      </ThemeProvider>,
    );

    const component = getByTestId(DEFAULT_RIGHT_ICON_NAME);

    fireEvent.press(component);

    expect(onPressRightIcon).toHaveBeenCalledTimes(1);
    expect(onPressLeftIcon).not.toHaveBeenCalled();
  });
});
