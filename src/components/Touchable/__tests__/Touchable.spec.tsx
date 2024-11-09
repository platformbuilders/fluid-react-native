import React from 'react';
import Haptic from 'react-native-haptic-feedback';
import { fireEvent, render } from 'react-native-testing-library';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';

import Touchable from '..';
import theme from '../../../theme';

describe('<Touchable />', () => {
  it('should render Touchable', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Touchable id="testing" accessibility="" />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should fire onPress from Touchable', () => {
    const onPressEvent = jest.fn();

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Touchable id="testing" accessibility="" onPress={onPressEvent} />
      </ThemeProvider>,
    );

    const component = getByTestId('testing');

    fireEvent.press(component);

    expect(onPressEvent).toHaveBeenCalled();
    expect(Haptic.trigger).toHaveBeenCalled();
  });
});
