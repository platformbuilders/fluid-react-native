import 'jest';
import React from 'react';
import { Text, View, ViewStyle } from 'react-native';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import Accordion from '..';
import { theme } from '../../../test/helpers';

const mockData = [
  {
    title: 'Mock',
    content: 'Mock Content',
  },
];

describe('<Accordion />', () => {
  it('should render Accordion', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Accordion data={mockData} />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Accordion with title custom', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Accordion
          data={mockData}
          StyledTitle={() => (
            <Text style={{ color: '#e74c3c' } as ViewStyle}>Unity Test</Text>
          )}
        />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Accordion with body custom', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Accordion
          data={mockData}
          StyledBody={() => (
            <Text style={{ color: '#2980b9' } as ViewStyle}>Unity Test</Text>
          )}
        />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  it('should render Accordion with header custom', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Accordion
          data={mockData}
          StyledHeader={() => (
            <View style={{ backgroundColor: '#27ae60' } as ViewStyle} />
          )}
        />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Accordion with content custom', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Accordion
          data={mockData}
          StyledContent={() => (
            <View style={{ backgroundColor: '#f1c40f' } as ViewStyle} />
          )}
        />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Accordion with icon', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Accordion data={mockData} hasIcon />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Accordion with icon up text custom', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Accordion data={mockData} hasIcon iconUpName="chevron-up" />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Accordion with icon down text custom', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Accordion data={mockData} hasIcon iconDownName="chevron-down" />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Accordion with icon color red', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Accordion
          data={mockData}
          hasIcon
          iconUpName="chevron-up"
          activeIconColor="#e74c3c"
        />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Accordion with icon color grey inactive', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Accordion
          data={mockData}
          hasIcon
          iconUpName="chevron-up"
          inactiveIconColor="#95a5a6"
        />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Accordion with markdown', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Accordion data={mockData} isMarkdown />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render Accordion with onChange function', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <Accordion data={mockData} onChange={() => {}} />
      </ThemeProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
