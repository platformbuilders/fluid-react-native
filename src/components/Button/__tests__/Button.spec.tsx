import React from 'react';
import renderer, { act } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import { fireEvent, render } from '@testing-library/react-native';
import Button from '..';
import theme from '../../../theme';
import Typography from '../../Typography';

// Constantes para evitar duplicação de literais
const TEST_ID = 'testing';
const ACCESSIBILITY = '';

describe('<Button />', () => {
  it('should render button', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Button id={TEST_ID} accessibility={ACCESSIBILITY} />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render button when rounded', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Button id={TEST_ID} accessibility={ACCESSIBILITY} rounded />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render button with loading', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Button id={TEST_ID} accessibility={ACCESSIBILITY} loading />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should fire onPress from Button', () => {
    const onPressEvent = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Button
          testID={TEST_ID}
          accessibility={ACCESSIBILITY}
          onPress={onPressEvent}
        />
      </ThemeProvider>,
    );

    const component = getByTestId('button_' + TEST_ID);

    expect(component).not.toBe(null);
    fireEvent.press(component);
    expect(onPressEvent).toHaveBeenCalledTimes(1);
  });

  it('should render button with children', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Button id={TEST_ID} accessibility={ACCESSIBILITY}>
            <Typography>Test</Typography>
          </Button>
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render button with custom accessibility label', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Button
            id={TEST_ID}
            accessibility={ACCESSIBILITY}
            accessibilityLabel="testing"
          />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render button with test id', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Button id={TEST_ID} accessibility={ACCESSIBILITY} testID="test" />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render button with custom style', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Button
            id={TEST_ID}
            accessibility={ACCESSIBILITY}
            style={{ backgroundColor: '#2980b9' }}
          />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render button with custom text style', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Button
            id={TEST_ID}
            accessibility={ACCESSIBILITY}
            textStyle={{ color: '#2980b9' }}
          />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render button with disabled', () => {
    const onPressEvent = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Button
          testID={TEST_ID}
          accessibility={ACCESSIBILITY}
          onPress={onPressEvent}
          disabled
        />
      </ThemeProvider>,
    );

    const component = getByTestId('button_' + TEST_ID);
    fireEvent.press(component);

    expect(onPressEvent).not.toHaveBeenCalled();
  });

  it('should render button with contrast', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Button id={TEST_ID} accessibility={ACCESSIBILITY} contrast />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render button with variant', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Button
            id={TEST_ID}
            accessibility={ACCESSIBILITY}
            variant="filled"
            colorVariant="primary"
          />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render button with typography variant', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Button
            id={TEST_ID}
            accessibility={ACCESSIBILITY}
            typographyVariant="lg"
          />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  // Novos testes para aumentar a cobertura
  it('should render button with left icon', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Button
            id={TEST_ID}
            accessibility={ACCESSIBILITY}
            leftIconName="check"
          />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render button with right icon', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Button
            id={TEST_ID}
            accessibility={ACCESSIBILITY}
            rightIconName="check"
          />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render button with both left and right icons', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Button
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

  it('should render button with left icon not touchable', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Button
            id={TEST_ID}
            accessibility={ACCESSIBILITY}
            leftIconName="check"
            leftIconTouchable={false}
          />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render button with right icon not touchable', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Button
            id={TEST_ID}
            accessibility={ACCESSIBILITY}
            rightIconName="check"
            rightIconTouchable={false}
          />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render button with flat style', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Button id={TEST_ID} accessibility={ACCESSIBILITY} flat />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render button with outline variant', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Button
            id={TEST_ID}
            accessibility={ACCESSIBILITY}
            variant="outline"
          />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render button with secondary color variant', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Button
            id={TEST_ID}
            accessibility={ACCESSIBILITY}
            colorVariant="secondary"
          />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render button with min width', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Button id={TEST_ID} accessibility={ACCESSIBILITY} minWidth="200px" />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render button with max width', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Button id={TEST_ID} accessibility={ACCESSIBILITY} maxWidth="300px" />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should not fire onPress when disabled', () => {
    const onPressEvent = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Button
          testID={TEST_ID}
          accessibility={ACCESSIBILITY}
          onPress={onPressEvent}
          disabled
        />
      </ThemeProvider>,
    );

    const component = getByTestId('button_' + TEST_ID);
    fireEvent.press(component);

    expect(onPressEvent).not.toHaveBeenCalled();
  });

  it('should not fire onPress when loading', () => {
    const onPressEvent = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Button
          testID={TEST_ID}
          accessibility={ACCESSIBILITY}
          onPress={onPressEvent}
          loading
        />
      </ThemeProvider>,
    );

    const component = getByTestId('button_' + TEST_ID);
    fireEvent.press(component);

    expect(onPressEvent).not.toHaveBeenCalled();
  });

  it('should use default accessibility when not provided', () => {
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <Button id={TEST_ID} accessibility="" />
      </ThemeProvider>,
    );

    const button = getByRole('button');
    expect(button.props.accessibilityLabel).toBe('Button');
  });

  it('should use default testID when not provided', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Button accessibility="test-button" />
      </ThemeProvider>,
    );

    const button = getByTestId('button_test-button');
    expect(button).toBeDefined();
  });

  // Testes adicionais para melhorar a cobertura
  it('should use testID as fallback when id and accessibility are not provided', () => {
    const customTestId = 'custom-test-id';

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Button testID={customTestId} accessibility="" />
      </ThemeProvider>,
    );

    const button = getByTestId('button_' + customTestId);
    expect(button).toBeDefined();
  });

  it('should use default testID pattern when id, accessibility and testID are not provided', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Button accessibility="" />
      </ThemeProvider>,
    );

    const button = getByTestId('button_button');
    expect(button).toBeDefined();
  });

  it('should use children text as accessibility label when provided as string', () => {
    const buttonText = 'Submit Form';

    const { getByText, getByRole } = render(
      <ThemeProvider theme={theme}>
        <Button accessibility="">{buttonText}</Button>
      </ThemeProvider>,
    );

    expect(getByText(buttonText)).toBeDefined();
    const button = getByRole('button');
    expect(button.props.accessibilityLabel).toBe(buttonText);
  });

  it('should use accessibilityLabel over children when both are provided', () => {
    const buttonText = 'Submit';
    const accessibilityLabel = 'Submit Form';

    const { getByText, getByRole } = render(
      <ThemeProvider theme={theme}>
        <Button accessibility="" accessibilityLabel={accessibilityLabel}>
          {buttonText}
        </Button>
      </ThemeProvider>,
    );

    expect(getByText(buttonText)).toBeDefined();
    const button = getByRole('button');
    expect(button.props.accessibilityLabel).toBe(accessibilityLabel);
  });

  it('should render with contrast and loading simultaneously', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Button id={TEST_ID} accessibility={ACCESSIBILITY} contrast loading />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should set correct accessibilityStates for disabled and loading buttons', () => {
    const { getByRole: getDisabledButton } = render(
      <ThemeProvider theme={theme}>
        <Button disabled accessibility="">
          Disabled Button
        </Button>
      </ThemeProvider>,
    );

    const { getByRole: getLoadingButton } = render(
      <ThemeProvider theme={theme}>
        <Button loading accessibility="">
          Loading Button
        </Button>
      </ThemeProvider>,
    );

    const disabledButton = getDisabledButton('button');
    const loadingButton = getLoadingButton('button');

    expect(disabledButton.props.accessibilityState.disabled).toBe(true);
    expect(loadingButton.props.accessibilityState.disabled).toBe(true);
    expect(loadingButton.props.accessibilityState.busy).toBe(true);
  });
});
