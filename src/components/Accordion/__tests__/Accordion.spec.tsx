import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import Accordion from '..';
import { theme } from '../../../test/helpers';
import Typography from '../../Typography';
import { Container } from '../styles';

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
          StyledTitle={() => <Typography>Unity Test</Typography>}
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
          StyledBody={() => <Typography>Unity Test</Typography>}
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
            <Container style={{ backgroundColor: '#27ae60' }} />
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
            <Container style={{ backgroundColor: '#f1c40f' }} />
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
