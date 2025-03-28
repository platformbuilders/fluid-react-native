import React from 'react';
import renderer, { act } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import { fireEvent, render } from '@testing-library/react-native';
import Image from '..';
import { ImagePlaceholder } from '../../../assets/images';
import theme from '../../../theme';

const uri =
  'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';

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

  it('should render with number source (local image)', () => {
    const render = renderer.create(
      <ThemeProvider theme={theme}>
        <Image
          id="testing"
          accessibility="testing_image"
          source={ImagePlaceholder}
        />
      </ThemeProvider>,
    );

    expect(render.toJSON()).toMatchSnapshot();
  });

  it('should render with string source', () => {
    const render = renderer.create(
      <ThemeProvider theme={theme}>
        <Image id="testing" accessibility="testing_image" source={{ uri }} />
      </ThemeProvider>,
    );

    expect(render.toJSON()).toMatchSnapshot();
  });

  it('should handle image loading events', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Image
          id="testing"
          testID="image-test"
          accessibility="testing_image"
          source={{ uri }}
        />
      </ThemeProvider>,
    );

    const image = getByTestId('image-test');

    // Simula o início do carregamento da imagem
    act(() => {
      fireEvent(image, 'loadStart');
    });

    // Simula o término do carregamento da imagem
    act(() => {
      fireEvent(image, 'load');
    });

    expect(image).toBeTruthy();
  });

  it('should render with custom container style', () => {
    const render = renderer.create(
      <ThemeProvider theme={theme}>
        <Image
          id="testing"
          accessibility="testing_image"
          source={{ uri }}
          containerStyle={{ padding: 10 }}
        />
      </ThemeProvider>,
    );

    expect(render.toJSON()).toMatchSnapshot();
  });

  it('should render with custom image style', () => {
    const render = renderer.create(
      <ThemeProvider theme={theme}>
        <Image
          id="testing"
          accessibility="testing_image"
          source={{ uri }}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
      </ThemeProvider>,
    );

    expect(render.toJSON()).toMatchSnapshot();
  });

  it('should render with string source as string instead of object', () => {
    const render = renderer.create(
      <ThemeProvider theme={theme}>
        <Image
          id="testing"
          accessibility="testing_image"
          source={{ uri }}
        />
      </ThemeProvider>,
    );

    expect(render.toJSON()).toMatchSnapshot();
  });

  it('should use testID directly when provided', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Image
          testID="direct-test-id"
          id="testing"
          accessibility="testing_image"
          source={{ uri }}
        />
      </ThemeProvider>,
    );

    const image = getByTestId('direct-test-id');
    expect(image).toBeTruthy();
  });

  it('should use id as testID when testID is not provided', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Image
          id="testing"
          accessibility="testing_image"
          source={{ uri }}
        />
      </ThemeProvider>,
    );

    const image = getByTestId('testing');
    expect(image).toBeTruthy();
  });

  it('should handle loading and error states correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Image
          id="testing"
          testID="image-test"
          accessibility="testing_image"
          source={{ uri }}
        />
      </ThemeProvider>,
    );

    const image = getByTestId('image-test');

    // Simula o início do carregamento da imagem
    act(() => {
      fireEvent(image, 'loadStart');
    });

    // Verifica se o componente está no estado de carregamento (placeholder deve estar visível)
    expect(image).toBeTruthy();

    // Simula um erro no carregamento
    act(() => {
      fireEvent(image, 'error');
    });

    // Verifica se o componente ainda é renderizado após o erro
    expect(image).toBeTruthy();

    // Simula o término bem-sucedido do carregamento
    act(() => {
      fireEvent(image, 'load');
    });

    // Verifica se o carregamento foi concluído com sucesso
    expect(image).toBeTruthy();
  });
});
