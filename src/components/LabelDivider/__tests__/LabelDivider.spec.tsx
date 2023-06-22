import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import Label from '..';

import theme from '../../../theme';

describe('<Label />', () => {
  it('should render Label', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Label text="label" />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
