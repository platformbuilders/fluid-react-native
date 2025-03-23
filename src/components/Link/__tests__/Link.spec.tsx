/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import renderer, { act } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import { fireEvent, render } from '@testing-library/react-native';
import Link from '..';
import theme from '../../../theme';

const TEST_ID = 'test-link';
const ACCESSIBILITY = 'test-accessibility';

describe('<Link />', () => {
  it('should render with default props', () => {
    let wrapper;
    
    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Link id={TEST_ID} accessibility={ACCESSIBILITY}>
            Test Link
          </Link>
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render with custom variant', () => {
    let wrapper;
    
    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Link id={TEST_ID} accessibility={ACCESSIBILITY} variant="lg">
            Test Link
          </Link>
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render with custom accessibility label', () => {
    let wrapper;
    
    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Link
            id={TEST_ID}
            accessibility={ACCESSIBILITY}
            accessibilityLabel="Custom Label"
          >
            Test Link
          </Link>
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render with custom test ID', () => {
    let wrapper;
    
    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Link
            id={TEST_ID}
            accessibility={ACCESSIBILITY}
            testID="custom-test-id"
          >
            Test Link
          </Link>
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should handle onPress event', () => {
    const onPressEvent = jest.fn();

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Link id={TEST_ID} accessibility={ACCESSIBILITY} onPress={onPressEvent}>
          Test Link
        </Link>
      </ThemeProvider>,
    );

    const component = getByTestId(TEST_ID);
    
    act(() => {
      fireEvent.press(component);
    });

    expect(onPressEvent).toHaveBeenCalled();
  });

  it('should render with custom style', () => {
    let wrapper;
    
    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Link
            id={TEST_ID}
            accessibility={ACCESSIBILITY}
            style={{ marginTop: 10 }}
          >
            Test Link
          </Link>
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render without id but with accessibility', () => {
    let wrapper;
    
    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Link accessibility={ACCESSIBILITY}>Test Link</Link>
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  // Testes adicionais para aumentar a cobertura
  
  it('should render with accessibility as testID when neither id nor testID are provided', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Link accessibility={ACCESSIBILITY}>Test Link</Link>
      </ThemeProvider>,
    );
    
    const link = getByTestId(ACCESSIBILITY);
    expect(link).toBeTruthy();
  });
  
  it('should render text with proper testID derived from id', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Link id={TEST_ID} accessibility={ACCESSIBILITY}>
          Test Link
        </Link>
      </ThemeProvider>,
    );
    
    const text = getByTestId(`text_${TEST_ID}`);
    expect(text).toBeTruthy();
    expect(text.props.children).toBe('Test Link');
  });
  
  it('should use accessibility as accessibilityLabel when not provided', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Link id={TEST_ID} accessibility={ACCESSIBILITY}>
          Test Link
        </Link>
      </ThemeProvider>,
    );
    
    const link = getByTestId(TEST_ID);
    expect(link.props.accessibilityLabel).toBe(ACCESSIBILITY);
  });
  
  it('should pass additional props to Touchable component', () => {
    let wrapper;
    
    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Link 
            id={TEST_ID} 
            accessibility={ACCESSIBILITY}
            disabled={true}
            haptic="impactLight"
          >
            Test Link
          </Link>
        </ThemeProvider>,
      );
    });
    
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  
  it('should handle undefined id gracefully', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Link accessibility={ACCESSIBILITY}>
          Test Link
        </Link>
      </ThemeProvider>,
    );
    
    const link = getByTestId(ACCESSIBILITY);
    expect(link).toBeTruthy();
  });
});
