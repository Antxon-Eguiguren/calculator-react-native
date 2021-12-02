import React, {useContext} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {colors, globalStyles} from '../styles/styles';
import {CalculatorScreen} from './CalculatorScreen';
import {SchemeContext} from '../context/SchemeContext';

export const MainScreen = () => {
  const {
    scheme: {theme},
  } = useContext(SchemeContext);

  return (
    <SafeAreaView
      style={[
        globalStyles.container,
        theme === 'dark'
          ? {backgroundColor: colors.dark}
          : {backgroundColor: colors.light},
      ]}>
      <StatusBar
        backgroundColor={theme === 'dark' ? colors.dark : colors.light}
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <CalculatorScreen />
    </SafeAreaView>
  );
};
