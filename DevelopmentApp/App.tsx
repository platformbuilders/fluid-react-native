import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components';

import { themeFormatter } from '@platformbuilders/theme-toolkit';

import { Header } from '../src';
import { HeaderTheme } from '../src/enums';

import theme from './theme';

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView>
      <ThemeProvider theme={themeFormatter(theme)}>
        <Header
          title="Cadastro"
          subtitle="O seu saldo é de R$2.500,00"
          theme={HeaderTheme.PRIMARY}
        />
      </ThemeProvider>
    </SafeAreaView>
  </SafeAreaProvider>
);

export default App;
