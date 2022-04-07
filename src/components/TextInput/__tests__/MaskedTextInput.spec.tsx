import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import { theme } from '../../../test/helpers';
import MaskedTextInput from '../MaskedTextInput';

describe('<MaskedTextInput />', () => {
  it('should render textinput', () => {
    const wrapper = renderer.create(
      <ThemeProvider theme={theme}>
        <MaskedTextInput
          id="test"
          variant="lg"
          accessibility=""
          maskType="cpf"
        />
      </ThemeProvider>,
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
