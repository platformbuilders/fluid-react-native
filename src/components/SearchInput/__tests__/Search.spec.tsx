import React from 'react';
import { fireEvent, render } from 'react-native-testing-library';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import Search from '..';
import theme from '../../../theme';

describe('<Search />', () => {
  it('should render search', () => {
    const onChange = jest.fn();
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Search id="test" accessibility="" onChange={onChange} />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render search with custom icon color', () => {
    const onChange = jest.fn();
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Search
          id="test"
          accessibility=""
          onChange={onChange}
          iconColor="#fff"
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render search with custom placeholder', () => {
    const onChange = jest.fn();
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Search
          id="test"
          accessibility=""
          onChange={onChange}
          placeholder="Test"
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render search with wrapper height', () => {
    const onChange = jest.fn();
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Search
          id="test"
          accessibility=""
          onChange={onChange}
          wrapperHeight={24}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render search with padding', () => {
    const onChange = jest.fn();
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Search
          id="test"
          accessibility=""
          onChange={onChange}
          inputPadding={24}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render search with icon size', () => {
    const onChange = jest.fn();
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Search id="test" accessibility="" onChange={onChange} iconSize={24} />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render search with shadow', () => {
    const onChange = jest.fn();
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Search id="test" accessibility="" onChange={onChange} hasShadow />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render search with custom text style', () => {
    const onChange = jest.fn();
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Search
          id="test"
          accessibility=""
          onChange={onChange}
          textStyle={{ color: '#fff' }}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render search with custom input style', () => {
    const onChange = jest.fn();
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Search
          id="test"
          accessibility=""
          onChange={onChange}
          inputStyle={{ backgroundColor: '#654654' }}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render search with custom container style', () => {
    const onChange = jest.fn();
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Search
          id="test"
          accessibility=""
          onChange={onChange}
          containerStyle={{ backgroundColor: '#123983' }}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render search with custom placeholder color', () => {
    const onChange = jest.fn();
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Search
          id="test"
          accessibility=""
          onChange={onChange}
          placeholderTextColor="#123983"
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render search with auto focus', () => {
    const onChange = jest.fn();
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Search id="test" accessibility="" onChange={onChange} autoFocus />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render search with right icon', () => {
    const onChange = jest.fn();
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Search
          id="test"
          accessibility=""
          onChange={onChange}
          rightIconName="parachute"
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render search with left icon', () => {
    const onChange = jest.fn();
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Search
          id="test"
          accessibility=""
          onChange={onChange}
          leftIconName="paperclip"
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  it('should change value of input', () => {
    const onChange = jest.fn();

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Search
          id="testing_searching"
          accessibility=""
          onChange={onChange}
          leftIconName="paperclip"
        />
      </ThemeProvider>,
    );

    const component = getByTestId('testing_searching');

    fireEvent.changeText(component, 'Value changed');
    expect(component.props.value).toBe('Value changed');
  });

  it('should change value pressing button', () => {
    const onChange = jest.fn();

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Search
          id="testing_searching"
          accessibility=""
          onChange={onChange}
          onIconPress={onChange}
          leftIconName="paperclip"
        />
      </ThemeProvider>,
    );

    const component = getByTestId('testing_searching');
    const icon = getByTestId('id_paperclip');

    fireEvent.press(icon);
    expect(component.props.value).toBe('');
  });

  it('should call onFocus, onBlur, and onSubmit when events occur', () => {
    const onFocus = jest.fn();
    const onBlur = jest.fn();
    const onSubmit = jest.fn();
    const onChangeText = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Search
          id="test"
          accessibility="Exibir ou ocultar inputs - eye"
          onChange={onChangeText}
          onFocus={onFocus}
          onBlur={onBlur}
          onSubmit={onSubmit}
        />
      </ThemeProvider>,
    );

    // Simule o evento de foco
    fireEvent(getByTestId('test'), 'focus');

    // Verifique se onFocus foi chamado
    expect(onFocus).toHaveBeenCalled();

    // Simule o evento de blur
    fireEvent(getByTestId('test'), 'blur');

    // Verifique se onBlur foi chamado
    expect(onBlur).toHaveBeenCalled();

    // Simule o evento de submit
    fireEvent(getByTestId('test'), 'onSubmitEditing');

    // Verifique se onSubmit foi chamado
    expect(onSubmit).toHaveBeenCalled();
  });
});
