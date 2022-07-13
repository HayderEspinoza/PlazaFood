import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import AppNavigation from './navigation/AppNavigation';
import { Light } from './theme';

const App = () => {
  return (
    <ThemeProvider theme={Light}>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
