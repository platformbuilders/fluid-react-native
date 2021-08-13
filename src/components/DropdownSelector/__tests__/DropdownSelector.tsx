import 'jest';
import React, { FC, useState } from 'react';
// import React from 'react';
import { fireEvent, render } from 'react-native-testing-library';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import DropdownSelector from '..';
import { theme } from '../../../test/helpers';

describe('<DropdownSelector />', () => {
  it('should render DropdownSelector', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <DropdownSelector
          id="test"
          accessibility=""
          options={[{ label: 'a', value: 'b' }, { label: 'c' }]}
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render dropdown and trigger state change', () => {
    const options = [
      { label: 'labelA', value: 'valueA' },
      { label: 'labelWithoutValue' },
    ];

    const setStateValue = jest.fn();

    const Component: FC = (): JSX.Element => {
      const [value] = useState('');

      return (
        <ThemeProvider theme={theme}>
          <DropdownSelector
            id="testing_dropdownSelector"
            accessibility=""
            options={options}
            iconName="access-point"
            selectedValue={value}
            setSelectedValue={setStateValue}
          />
        </ThemeProvider>
      );
    };

    const { getByTestId } = render(<Component />);

    const component = getByTestId('testing_dropdownSelector');
    fireEvent(component, 'onValueChange', options[1]);
    expect(setStateValue).toHaveBeenCalledWith(
      { label: options[1].label },
      undefined,
    );
  });
});
