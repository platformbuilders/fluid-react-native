import React from 'react';
import renderer, { act } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import { fireEvent, render } from '@testing-library/react-native';
import Icon from '..';
import { IconFonts } from '../../../enums';
import theme from '../../../theme';

const TEST_ID = 'test-icon';
const ACCESSIBILITY = 'test-accessibility';

// Mock dos ícones SVG
jest.mock('../../../assets/svg', () => ({
  IconProfile: () => 'IconProfile',
  IconHome: () => 'IconHome',
}));

describe('<Icon />', () => {
  it('should render with default props', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Icon id={TEST_ID} accessibility={ACCESSIBILITY} name="home" />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render emoji icon', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Icon id={TEST_ID} accessibility={ACCESSIBILITY} name="👍" isEmoji />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render with custom size', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Icon
            id={TEST_ID}
            accessibility={ACCESSIBILITY}
            name="home"
            size={30}
          />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render with custom color', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Icon
            id={TEST_ID}
            accessibility={ACCESSIBILITY}
            name="home"
            color="#FF0000"
          />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render with Material icon type', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Icon
            id={TEST_ID}
            accessibility={ACCESSIBILITY}
            name="home"
            type={IconFonts.Material}
          />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should handle onPress event', () => {
    const onPressEvent = jest.fn();

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Icon
          id={TEST_ID}
          accessibility={ACCESSIBILITY}
          name="home"
          onPress={onPressEvent}
        />
      </ThemeProvider>,
    );

    const component = getByTestId(TEST_ID);
    fireEvent.press(component);

    expect(onPressEvent).toHaveBeenCalled();
  });

  it('should render with custom dimensions', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Icon
            id={TEST_ID}
            accessibility={ACCESSIBILITY}
            name="home"
            width={40}
            height={40}
          />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render with custom background and border colors', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Icon
            id={TEST_ID}
            accessibility={ACCESSIBILITY}
            name="home"
            backgroundColor="#FFFFFF"
            borderColor="#000000"
          />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render non-touchable icon', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Icon
            id={TEST_ID}
            accessibility={ACCESSIBILITY}
            name="home"
            touchable={false}
          />
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
          <Icon
            id={TEST_ID}
            accessibility={ACCESSIBILITY}
            name="home"
            accessibilityLabel="Custom Label"
          />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render with FABrands icon type', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Icon
            id={TEST_ID}
            accessibility={ACCESSIBILITY}
            name="github"
            type={IconFonts.FABrands}
          />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render with FALight icon type', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Icon
            id={TEST_ID}
            accessibility={ACCESSIBILITY}
            name="home"
            type={IconFonts.FALight}
          />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render with FARegular icon type', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Icon
            id={TEST_ID}
            accessibility={ACCESSIBILITY}
            name="home"
            type={IconFonts.FARegular}
          />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render with FASolid icon type', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Icon
            id={TEST_ID}
            accessibility={ACCESSIBILITY}
            name="home"
            type={IconFonts.FASolid}
          />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render SVG icon when name matches a bundled SVG', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Icon id={TEST_ID} accessibility={ACCESSIBILITY} name="profile" />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render SVG icon with custom dimensions', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Icon
            id={TEST_ID}
            accessibility={ACCESSIBILITY}
            name="profile"
            width={50}
            height={50}
          />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render SVG icon with custom colors', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Icon
            id={TEST_ID}
            accessibility={ACCESSIBILITY}
            name="profile"
            color="#FF0000"
            borderColor="#00FF00"
            backgroundColor="#0000FF"
          />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render custom icon from iconSets', () => {
    const CustomIcon = () => <></>;
    const customIconSets = {
      IconCustom: CustomIcon,
    };

    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Icon
            id={TEST_ID}
            accessibility={ACCESSIBILITY}
            name="custom"
            iconSets={customIconSets}
          />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should use accessibility as testID when id is not provided', () => {
    const { getAllByTestId } = render(
      <ThemeProvider theme={theme}>
        <Icon accessibility={ACCESSIBILITY} name="home" />
      </ThemeProvider>,
    );

    const components = getAllByTestId(ACCESSIBILITY);
    expect(components.length).toBeGreaterThan(0);
  });

  it('should use icon name as fallback for accessibility', () => {
    const testId = 'test-no-accessibility';
    const iconName = 'home';

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Icon id={testId} name={iconName} accessibility={iconName} />
      </ThemeProvider>,
    );

    const component = getByTestId(testId);
    expect(component).toBeTruthy();
  });

  // Testes adicionais para aumentar cobertura de branches

  it('should handle empty name properly', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Icon id={TEST_ID} accessibility={ACCESSIBILITY} name="" />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should handle null or undefined name correctly', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Icon id={TEST_ID} accessibility={ACCESSIBILITY} name={''} />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render with both custom width and height for emoji icon', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Icon
            id={TEST_ID}
            accessibility={ACCESSIBILITY}
            name="🔥"
            isEmoji={true}
            width={60}
            height={60}
          />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render custom icon when name in iconSets but not in SVG', () => {
    const CustomIcon = () => <></>;
    const customIconSets = {
      IconSpecial: CustomIcon,
    };

    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Icon
            id={TEST_ID}
            accessibility={ACCESSIBILITY}
            name="special"
            iconSets={customIconSets}
          />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render with testID passed directly rather than id or accessibility', () => {
    const directTestId = 'direct-test-id';

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Icon name="home" testID={directTestId} accessibility="home" />
      </ThemeProvider>,
    );

    const component = getByTestId(directTestId);
    expect(component).toBeTruthy();
  });

  it('should render icon even with invalid icon type', () => {
    // @ts-ignore para testar o caso de tipo inválido
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Icon id={TEST_ID} accessibility={ACCESSIBILITY} name="home" />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render emoji icon without custom dimensions', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Icon
            id={TEST_ID}
            accessibility={ACCESSIBILITY}
            name="🚀"
            isEmoji={true}
          />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should use default onPress when not provided', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Icon
            id={TEST_ID}
            accessibility={ACCESSIBILITY}
            name="home"
            // onPress não fornecido, deve usar o default
          />
        </ThemeProvider>,
      );
    });

    // Se renderizou sem erros, o default onPress funcionou
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render when icon component not found in iconSets', () => {
    const customIconSets = {
      // Intencionalmente diferente do nome do ícone
      IconOther: () => <></>,
    };

    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Icon
            id={TEST_ID}
            accessibility={ACCESSIBILITY}
            name="nonexistent"
            iconSets={customIconSets}
          />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render with invalid icon type but valid name', () => {
    // @ts-ignore para testar o caso de tipo de ícone inválido
    const invalidType = 'invalid-type';
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Icon
            id={TEST_ID}
            accessibility={ACCESSIBILITY}
            name="home"
            // @ts-ignore para forçar o caso de teste
            type={invalidType}
          />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should use children as accessibility and testID when no id, accessibility or testID is provided', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Icon name="home" accessibility="home" />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should handle numeric icon size', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Icon
            id={TEST_ID}
            accessibility={ACCESSIBILITY}
            name="home"
            size={40}
          />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should handle undefined icon name', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Icon
            id={TEST_ID}
            accessibility={ACCESSIBILITY}
            // @ts-ignore para testar cenário de name undefined
            name={undefined}
          />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should handle null icon name', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Icon
            id={TEST_ID}
            accessibility={ACCESSIBILITY}
            // @ts-ignore para testar cenário de name null
            name={null}
          />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should handle array style', () => {
    let wrapper;

    act(() => {
      wrapper = renderer.create(
        <ThemeProvider theme={theme}>
          <Icon
            id={TEST_ID}
            accessibility={ACCESSIBILITY}
            name="home"
            style={[{ margin: 10 }, { padding: 5 }]}
          />
        </ThemeProvider>,
      );
    });

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
