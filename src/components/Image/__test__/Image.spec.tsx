import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import Image from '..';
import theme from '../../../theme';

const uri =
  'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';

jest.mock('rn-placeholder', () => {
  const RealPlaceholder = jest.requireActual('rn-placeholder');

  const MockShine = jest.fn().mockImplementation((props) => {
    // Mock para o componente Shine
    return <RealPlaceholder.Shine {...props} />;
  });

  return {
    ...RealPlaceholder,
    Shine: MockShine,
  };
});

describe('<Image />', () => {
  it('should render Image component correctly', () => {
    const render = renderer.create(
      <ThemeProvider theme={theme}>
        <Image source={{ uri }} id="testing" accessibility="testing_image" />
      </ThemeProvider>,
    );

    expect(render.toJSON()).toMatchSnapshot();
  });

  it('should render with no placeholder', () => {
    const render = renderer.create(
      <ThemeProvider theme={theme}>
        <Image
          id="testing"
          accessibility="testing_image"
          displayPlaceholder={false}
          source={{ uri }}
        />
      </ThemeProvider>,
    );

    expect(render.toJSON()).toMatchSnapshot();
  });

  it('should render with custom placeholder animation color', () => {
    const render = renderer.create(
      <ThemeProvider theme={theme}>
        <Image
          id="testing"
          accessibility="testing_image"
          animationColor="red"
          source={{ uri }}
        />
      </ThemeProvider>,
    );

    expect(render.toJSON()).toMatchSnapshot();
  });

  it('should render with custom placeholder animation and container colors', () => {
    const render = renderer.create(
      <ThemeProvider theme={theme}>
        <Image
          id="testing"
          accessibility="testing_image"
          animationColor="red"
          animationContainerColor="blue"
          source={{ uri }}
        />
      </ThemeProvider>,
    );

    expect(render.toJSON()).toMatchSnapshot();
  });
});
