import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import Search from '..';
import theme from '../../../theme';

jest.useFakeTimers();

describe('<Search />', () => {
  it('should render search', () => {
    const onChange = jest.fn();
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Search
          inputRef="$text"
          id="test"
          accessibility=""
          onChange={onChange}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render search with custom icon color', () => {
    const onChange = jest.fn();
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Search
          inputRef="$text"
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
          inputRef="$text"
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
          inputRef="$text"
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
          inputRef="$text"
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
        <Search
          inputRef="$text"
          id="test"
          accessibility=""
          onChange={onChange}
          iconSize={24}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render search with shadow', () => {
    const onChange = jest.fn();
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Search
          inputRef="$text"
          id="test"
          accessibility=""
          onChange={onChange}
          hasShadow
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render search with custom text style', () => {
    const onChange = jest.fn();
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Search
          inputRef="$text"
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
          inputRef="$text"
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
          inputRef="$text"
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
          inputRef="$text"
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
        <Search
          inputRef="$text"
          id="test"
          accessibility=""
          onChange={onChange}
          autoFocus
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render search with right icon', () => {
    const onChange = jest.fn();
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Search
          inputRef="$text"
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
          inputRef="$text"
          id="test"
          accessibility=""
          onChange={onChange}
          leftIconName="paperclip"
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
