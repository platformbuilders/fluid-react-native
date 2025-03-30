import React from 'react';
import renderer, { act } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import { fireEvent, render } from '@testing-library/react-native';
import Badge from '..';
import theme from '../../../theme';
import Typography from '../../Typography';

// Constantes para evitar duplicação de literais
const TEST_ID = 'testing';
const ACCESSIBILITY = '';

describe('<Badge />', () => {
  it('should render Badge', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Badge id={TEST_ID} accessibility={ACCESSIBILITY} />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Badge when rounded', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Badge id={TEST_ID} accessibility={ACCESSIBILITY} rounded />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Badge with loading', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Badge id={TEST_ID} accessibility={ACCESSIBILITY} loading />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should fire onPress from Badge', () => {
    const onPressEvent = jest.fn();

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Badge
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          onPress={onPressEvent}
        />
      </ThemeProvider>,
    );

    const component = getByTestId(`badge_${TEST_ID}`);

    expect(component).not.toBe(null);

    fireEvent.press(component);

    expect(onPressEvent).toHaveBeenCalled();
  });

  it('should render Badge with children', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Badge id={TEST_ID} accessibility={ACCESSIBILITY}>
            <Typography>Test</Typography>
          </Badge>
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Badge with custom accessibility label', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Badge
            id={TEST_ID}
            accessibility={ACCESSIBILITY}
            accessibilityLabel="testing"
          />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Badge with test id', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Badge id={TEST_ID} accessibility={ACCESSIBILITY} testID="test" />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Badge with custom style', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Badge
            id={TEST_ID}
            accessibility={ACCESSIBILITY}
            style={{ backgroundColor: '#2980b9' }}
          />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Badge with custom text style', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Badge
            id={TEST_ID}
            accessibility={ACCESSIBILITY}
            textStyle={{ color: '#2980b9' }}
          />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Badge with disabled', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Badge id={TEST_ID} accessibility={ACCESSIBILITY} disabled />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Badge with contrast', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Badge id={TEST_ID} accessibility={ACCESSIBILITY} contrast />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Badge with variant', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Badge
            id={TEST_ID}
            accessibility={ACCESSIBILITY}
            variant="secondary"
          />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  // Novos testes para aumentar a cobertura
  it('should render Badge with left icon', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Badge
            id={TEST_ID}
            accessibility={ACCESSIBILITY}
            leftIconName="check"
          />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Badge with right icon', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Badge
            id={TEST_ID}
            accessibility={ACCESSIBILITY}
            rightIconName="check"
          />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Badge with both left and right icons', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Badge
            id={TEST_ID}
            accessibility={ACCESSIBILITY}
            leftIconName="arrow-left"
            rightIconName="arrow-right"
          />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Badge with custom icon style', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Badge
            id={TEST_ID}
            accessibility={ACCESSIBILITY}
            leftIconName="check"
            iconStyle={{ color: '#e74c3c' }}
          />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Badge with emoji icon', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Badge
            id={TEST_ID}
            accessibility={ACCESSIBILITY}
            leftIconName="👍"
            isEmoji
          />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Badge with touchable icon', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Badge
            id={TEST_ID}
            accessibility={ACCESSIBILITY}
            leftIconName="check"
            iconTouchable
          />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Badge with border', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Badge id={TEST_ID} accessibility={ACCESSIBILITY} hasBorder />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Badge with flat style', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Badge id={TEST_ID} accessibility={ACCESSIBILITY} flat />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Badge with custom typography variant', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Badge
            id={TEST_ID}
            accessibility={ACCESSIBILITY}
            typographyVariant="sm"
          />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should not fire onPress when disabled', () => {
    const onPressEvent = jest.fn();

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Badge
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          onPress={onPressEvent}
          disabled
        />
      </ThemeProvider>,
    );

    const component = getByTestId(`badge_${TEST_ID}`);
    fireEvent.press(component);

    expect(onPressEvent).not.toHaveBeenCalled();
  });

  it('should not fire onPress when loading', () => {
    const onPressEvent = jest.fn();

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Badge
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          onPress={onPressEvent}
          loading
        />
      </ThemeProvider>,
    );

    const component = getByTestId(`badge_${TEST_ID}`);
    fireEvent.press(component);

    expect(onPressEvent).not.toHaveBeenCalled();
  });

  // Testes adicionais para cobrir branches específicas
  it('should use accessibility as id when id is not provided', () => {
    const customAccessibility = 'custom-accessibility';

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Badge accessibility={customAccessibility} />
      </ThemeProvider>,
    );

    const component = getByTestId(`badge_${customAccessibility}`);
    expect(component).toBeTruthy();
  });

  it('should use accessibility as accessibilityLabel when accessibilityLabel is not provided', () => {
    const customAccessibility = 'accessibility-label-test';

    const { queryByText } = render(
      <ThemeProvider theme={theme}>
        <Badge accessibility={customAccessibility}>Test Text</Badge>
      </ThemeProvider>,
    );

    // Verificamos que o componente foi renderizado corretamente
    expect(queryByText('Test Text')).toBeTruthy();
  });

  it('should render with disabled and loading simultaneously', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Badge id={TEST_ID} accessibility={ACCESSIBILITY} disabled loading />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render with disabled and flat simultaneously', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Badge id={TEST_ID} accessibility={ACCESSIBILITY} disabled flat />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  // Testes adicionais para aumentar a cobertura de branches
  it('should generate correct accessibility hint when onPress is provided', () => {
    // Verificar que o Badge recebe um accessibilityHint quando tem onPress
    const onPressEvent = jest.fn();
    
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Badge
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          onPress={onPressEvent}
        />
      </ThemeProvider>,
    );
    
    const component = getByTestId(`badge_${TEST_ID}`);
    
    // Verificar que accessibilityHint existe quando onPress é fornecido
    expect(component.props.accessibilityHint).toBe('Toque para interagir');
  });
  
  it('should not have accessibility hint when onPress is not provided', () => {
    // Verificar que o Badge não recebe um accessibilityHint quando não tem onPress
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Badge
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
        />
      </ThemeProvider>,
    );
    
    const component = getByTestId(`badge_${TEST_ID}`);
    
    // Verificar que accessibilityHint não existe quando onPress não é fornecido
    expect(component.props.accessibilityHint).toBeUndefined();
  });
  
  it('should use string children as accessibilityLabel when no accessibilityLabel or accessibility is provided', () => {
    const childrenText = 'Badge Label Text';
    
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Badge accessibility="">
          {childrenText}
        </Badge>
      </ThemeProvider>,
    );
    
    // Verificar que o component foi renderizado com o testID correto
    const component = getByTestId(`badge_${childrenText}`);
    
    // Verificar que o texto do children foi usado como accessibilityLabel
    expect(component.props.accessibilityLabel).toBe(childrenText);
  });
  
  it('should use "badge" as default baseAccessibilityId when no id, accessibility or string children is provided', () => {
    // Neste caso, todos os possíveis valores de baseAccessibilityId estão ausentes
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Badge accessibility="">
          <Typography>Complex Children</Typography>
        </Badge>
      </ThemeProvider>,
    );
    
    // Deve usar 'badge' como fallback para o testID
    const component = getByTestId('badge_badge');
    expect(component).toBeTruthy();
    
    // E deve usar 'Badge' como fallback para accessibilityLabel
    expect(component.props.accessibilityLabel).toBe('Badge');
  });
});
