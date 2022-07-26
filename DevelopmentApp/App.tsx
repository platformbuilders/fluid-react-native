import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components';

import { themeFormatter } from '@platformbuilders/theme-toolkit';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Header } from '../src';
import { HeaderTheme } from '../src/enums';

import { HomeWrapper, SafeAreaViewComponent } from './styles';
import theme from './theme';

const Stack = createNativeStackNavigator();

const Home = () => {
  return (
    <HomeWrapper>
      <Header
        title="Cadastro"
        subtitle="O seu saldo é de R$2.500,00"
        theme={HeaderTheme.PRIMARY}
      />
    </HomeWrapper>
  );
};

const App = () => (
  <SafeAreaProvider>
    <SafeAreaViewComponent>
      <ThemeProvider theme={themeFormatter(theme)}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaViewComponent>
  </SafeAreaProvider>
);

export default App;
