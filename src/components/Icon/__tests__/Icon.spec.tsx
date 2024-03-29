import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import Icon from '..';
import theme from '../../../theme';

describe('<Icon />', () => {
  it('should render icon component correctly', () => {
    const render = renderer.create(
      <ThemeProvider theme={theme}>
        <Icon name="book" id="testing" accessibility="testing_icon" />
      </ThemeProvider>,
    );

    expect(render.toJSON()).toMatchSnapshot();
  });
});
