import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import Image from '..';
import { theme } from '../../../test/helpers';

describe('<Image />', () => {
  it('should render Image component correctly', () => {
    const uri =
      'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';
    const render = renderer.create(
      <ThemeProvider theme={theme}>
        <Image source={{ uri }} id="testing" accessibility="testing_image" />
      </ThemeProvider>,
    );

    expect(render.toJSON()).toMatchSnapshot();
  });
});
