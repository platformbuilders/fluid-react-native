/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { fireEvent, render } from 'react-native-testing-library';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import Link from '..';
import { theme } from '../../../test/helpers';

describe('<Link />', () => {
  it('should render link', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Link id="testing" accessibility="" />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should trigger onPress function', () => {
    const onPressEvent = jest.fn();

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Link id="testing" accessibility="" onPress={onPressEvent} />
      </ThemeProvider>,
    );

    const component = getByTestId('testing');

    fireEvent.press(component);

    expect(onPressEvent).toHaveBeenCalled();
  });
});
