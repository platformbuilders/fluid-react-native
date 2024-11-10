import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import Separator from '..';

import theme from '../../../theme';

describe('<Separator />', () => {
  it('should render Separator', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Separator text="Teste Separator" />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
