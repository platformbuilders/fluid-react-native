import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import { fireEvent, render } from '@testing-library/react-native';
import Accordion from '..';
import theme from '../../../theme';
import Typography from '../../Typography';
import { Container } from '../styles';

// Constantes para evitar duplicação de literais
const MOCK_TITLE_1 = 'Mock Title 1';
const MOCK_CONTENT_1 = 'Mock Content 1';
const MOCK_TITLE_2 = 'Mock Title 2';
const MOCK_CONTENT_2 = 'Mock Content 2';
const UNITY_TEST = 'Unity Test';

const mockData = [
  {
    title: MOCK_TITLE_1,
    content: MOCK_CONTENT_1,
  },
  {
    title: MOCK_TITLE_2,
    content: MOCK_CONTENT_2,
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
          StyledTitle={() => <Typography>{UNITY_TEST}</Typography>}
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
          StyledBody={() => <Typography>{UNITY_TEST}</Typography>}
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

  // Novos testes para aumentar a cobertura
  it('should call onChange when section is toggled', () => {
    const onChangeMock = jest.fn();
    const { getAllByText } = render(
      <ThemeProvider theme={theme}>
        <Accordion data={mockData} onChange={onChangeMock} />
      </ThemeProvider>,
    );

    // Encontra o primeiro título e clica nele
    const firstTitle = getAllByText(MOCK_TITLE_1)[0];
    fireEvent.press(firstTitle);

    // Verifica se onChange foi chamado com o título correto
    expect(onChangeMock).toHaveBeenCalledWith(MOCK_TITLE_1);
  });

  it('should toggle section when pressed', () => {
    const { getAllByText, queryAllByText } = render(
      <ThemeProvider theme={theme}>
        <Accordion data={mockData} />
      </ThemeProvider>,
    );

    // Verifica se o título está visível
    expect(getAllByText(MOCK_TITLE_1).length).toBeGreaterThan(0);

    // Clica no primeiro título
    const firstTitle = getAllByText(MOCK_TITLE_1)[0];
    fireEvent.press(firstTitle);

    // Verifica se o conteúdo está visível após clicar
    expect(queryAllByText(MOCK_CONTENT_1).length).toBeGreaterThan(0);
  });

  it('should toggle between sections', () => {
    const { getAllByText, queryAllByText } = render(
      <ThemeProvider theme={theme}>
        <Accordion data={mockData} />
      </ThemeProvider>,
    );

    // Clica no primeiro título
    const firstTitle = getAllByText(MOCK_TITLE_1)[0];
    fireEvent.press(firstTitle);

    // Verifica se o primeiro conteúdo está visível
    expect(queryAllByText(MOCK_CONTENT_1).length).toBeGreaterThan(0);

    // Clica no segundo título
    const secondTitle = getAllByText(MOCK_TITLE_2)[0];
    fireEvent.press(secondTitle);

    // Verifica se o segundo conteúdo está visível
    expect(queryAllByText(MOCK_CONTENT_2).length).toBeGreaterThan(0);
  });

  it('should render correct icon based on section state', () => {
    const { getAllByText, getAllByTestId } = render(
      <ThemeProvider theme={theme}>
        <Accordion
          data={mockData}
          hasIcon
          iconUpName="chevron-up"
          iconDownName="chevron-down"
        />
      </ThemeProvider>,
    );

    // Verifica se os ícones estão presentes
    const icons = getAllByTestId('chevron-up');
    expect(icons.length).toBe(2);

    // Clica no primeiro título
    const firstTitle = getAllByText(MOCK_TITLE_1)[0];
    fireEvent.press(firstTitle);

    // Verifica se os ícones estão presentes após clicar
    const updatedIcons = getAllByTestId('chevron-up');
    expect(updatedIcons.length).toBe(2);
  });

  it('should handle empty data array', () => {
    // Não deve lançar erro ao renderizar com array vazio
    expect(() => {
      render(
        <ThemeProvider theme={theme}>
          <Accordion data={[]} />
        </ThemeProvider>,
      );
    }).not.toThrow();
  });
});
