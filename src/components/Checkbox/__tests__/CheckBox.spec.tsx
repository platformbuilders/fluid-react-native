import React from 'react';
import { fireEvent, render } from 'react-native-testing-library';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import CheckBox from '..';
import theme from '../../../theme';

describe('<CheckBox />', () => {
  it('should render checkbox component', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <CheckBox id="testing" accessibility="" />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should trigger onPress function', () => {
    const onPressEvent = jest.fn();

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <CheckBox
          label="Jest Checkbox"
          id="testing"
          accessibility="checkbox"
          onPress={onPressEvent}
        />
      </ThemeProvider>,
    );

    const component = getByText('Jest Checkbox');

    fireEvent.press(component);

    expect(onPressEvent).toHaveBeenCalled();
  });
});
