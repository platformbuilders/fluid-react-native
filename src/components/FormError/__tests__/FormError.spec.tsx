import React from 'react';
import renderer, { act } from 'react-test-renderer';
import { render } from 'react-native-testing-library';
import { ThemeProvider } from 'styled-components/native';
import FormError from '..';
import theme from '../../../theme';

describe('<FormError />', () => {
  // Espionar console.warn para testar warnBoolean
  const originalWarn = console.warn;
  beforeEach(() => {
    console.warn = jest.fn();
  });
  
  afterEach(() => {
    console.warn = originalWarn;
  });
  
  it('should render the form error component', () => {
    let wrapper;
    
    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <FormError id="" accessibility="" error="testing error" large />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render the form error component with centered', () => {
    let wrapper;
    
    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <FormError
            id=""
            accessibility=""
            error="testing error"
            large
            centered
          />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render the form error component with error', () => {
    let wrapper;
    
    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <FormError id="" accessibility="" error />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  
  it('should render children when provided', () => {
    let wrapper;
    
    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <FormError id="with_children" accessibility="form">
            <div>Child element</div>
          </FormError>
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  
  it('should call warnBoolean when error is a truthy boolean', () => {
    act(() => {
      renderer.create(
        <ThemeProvider theme={theme}>
          <FormError id="boolean_error" accessibility="form" error={true} />
        </ThemeProvider>,
      );
    });

    // Verificar se console.warn foi chamado com a mensagem correta
    expect(console.warn).toHaveBeenCalledWith(
      "@platformbuilders/fluid-react-native: received a truthy boolean error instead of string, which won't be rendered.",
    );
  });
  
  it('should not call warnBoolean when error is a string', () => {
    act(() => {
      renderer.create(
        <ThemeProvider theme={theme}>
          <FormError id="string_error" accessibility="form" error="Error message" />
        </ThemeProvider>,
      );
    });

    // Verificar que console.warn não foi chamado
    expect(console.warn).not.toHaveBeenCalled();
  });
  
  it('should not call warnBoolean when error is false', () => {
    act(() => {
      renderer.create(
        <ThemeProvider theme={theme}>
          <FormError id="false_error" accessibility="form" error={false} />
        </ThemeProvider>,
      );
    });

    // Verificar que console.warn não foi chamado
    expect(console.warn).not.toHaveBeenCalled();
  });
  
  it('should not render error text when error is a boolean', () => {
    const { queryByTestId } = render(
      <ThemeProvider theme={theme}>
        <FormError id="no_text" accessibility="form" error={true} />
      </ThemeProvider>,
    );

    // Verificar que o texto de erro não foi renderizado
    expect(queryByTestId('error_no_text')).toBeNull();
  });
  
  it('should use default id when not provided', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <FormError error="Error with default id" />
      </ThemeProvider>,
    );

    // Verificar que o id padrão 'form_error' foi usado
    expect(getByTestId('error_form_error')).toBeTruthy();
  });
  
  it('should use error text as accessibility label when accessibility is not provided', () => {
    const errorText = "Accessibility from error";
    const { getByA11yLabel } = render(
      <ThemeProvider theme={theme}>
        <FormError error={errorText} />
      </ThemeProvider>,
    );

    // Verificar que o texto de erro foi usado como rótulo de acessibilidade
    expect(getByA11yLabel(`Erro ${errorText}`)).toBeTruthy();
  });
  
  it('should apply custom style when provided', () => {
    let wrapper;
    
    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <FormError 
            error="Styled error" 
            style={{ marginTop: 20 }}
          />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
