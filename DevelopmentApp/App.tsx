import React from 'react';
import { SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components';

import { Button } from '../src';

import theme from './theme';

import { themeFormatter } from './themeFormatter';

const containerStyle = {
  backgroundColor: '#fff',
  padding: 20,
  flex: 1,
};

const App = () => (
  <ThemeProvider theme={themeFormatter(theme)}>
    <SafeAreaView style={containerStyle}>
      <Button accessibility="botao">Button</Button>
    </SafeAreaView>
  </ThemeProvider>
);

export default App;
