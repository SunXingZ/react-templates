/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import {AppRouter, AppTheme} from './src/configs';
import {ThemeProvider} from 'react-native-elements';

const App = () => {
  return (
    <ThemeProvider theme={AppTheme}>
      <AppRouter
      // onStateChange={(state) => {}}
      />
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
