import React from 'react';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components';

import { themeFormatter } from '@platformbuilders/theme-toolkit';

import { Header, Icon } from '../src';
import { IconFonts } from '../src/enums';

import theme from './theme';

const containerStyle = {
  backgroundColor: '#fff',
  padding: 20,
  flex: 1,
};

const App = () => (
  <View style={containerStyle}>
    <ThemeProvider theme={themeFormatter(theme)}>
      <Header title="Cadastro" />
      <Icon
        accessibility="pix icon"
        type={IconFonts.FontAwesome}
        name="check"
        color="#000"
        size={20}
      />
    </ThemeProvider>
  </View>
);

export default App;
