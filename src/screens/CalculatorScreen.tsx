import React, {useContext} from 'react';
import {Image, StyleSheet, Switch, Text, View} from 'react-native';

import {colors} from '../styles/styles';
import {CustomButton} from '../components/CustomButton';
import {useCalculator} from '../hooks/useCalculator';
import {SchemeContext} from '../context/SchemeContext';

export const CalculatorScreen = () => {
  const {
    intermediateResult,
    result,
    generateNumber,
    clear,
    rotate,
    divide,
    multiply,
    add,
    substract,
    calculate,
  } = useCalculator();

  const {
    scheme: {theme},
    setScheme,
  } = useContext(SchemeContext);

  const toggle = () => {
    theme === 'dark' ? setScheme('light') : setScheme('dark');
  };

  return (
    <View style={styles.container}>
      <View style={styles.switch}>
        <Image
          style={styles.switch_img}
          source={
            theme === 'dark'
              ? require('../assets/img/moon.png')
              : require('../assets/img/sun.png')
          }
        />
        <Switch
          value={theme === 'dark' ? false : true}
          onValueChange={toggle}
          trackColor={{false: colors.lightgray}}
          ios_backgroundColor={colors.lightgray}
        />
      </View>
      <Text
        style={[
          styles.intermediateResult,
          theme === 'dark' ? {color: colors.lightgray} : {color: colors.salmon},
        ]}
        numberOfLines={1}
        adjustsFontSizeToFit>
        {intermediateResult || ' '}
      </Text>
      <Text
        style={[
          styles.result,
          theme === 'dark' ? {color: colors.white} : {color: colors.black},
        ]}
        numberOfLines={1}
        adjustsFontSizeToFit>
        {result || ' '}
      </Text>
      <View style={styles.row}>
        <CustomButton text="C" color={colors.lightgray} operation={clear} />
        <CustomButton
          text="Rotate"
          color={colors.lightgray}
          isDouble={true}
          operation={rotate}
        />
        <CustomButton text="/" color={colors.orange} operation={divide} />
      </View>
      <View style={styles.row}>
        <CustomButton text="7" operation={generateNumber} />
        <CustomButton text="8" operation={generateNumber} />
        <CustomButton text="9" operation={generateNumber} />
        <CustomButton text="X" color={colors.orange} operation={multiply} />
      </View>
      <View style={styles.row}>
        <CustomButton text="4" operation={generateNumber} />
        <CustomButton text="5" operation={generateNumber} />
        <CustomButton text="6" operation={generateNumber} />
        <CustomButton text="-" color={colors.orange} operation={substract} />
      </View>
      <View style={styles.row}>
        <CustomButton text="1" operation={generateNumber} />
        <CustomButton text="2" operation={generateNumber} />
        <CustomButton text="3" operation={generateNumber} />
        <CustomButton text="+" color={colors.orange} operation={add} />
      </View>
      <View style={styles.row}>
        <CustomButton text="0" isDouble={true} operation={generateNumber} />
        <CustomButton text="." operation={generateNumber} />
        <CustomButton text="=" color={colors.orange} operation={calculate} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  intermediateResult: {
    fontSize: 30,
    textAlign: 'right',
    marginRight: 20,
  },
  result: {
    fontSize: 60,
    textAlign: 'right',
    marginBottom: 20,
    marginRight: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  switch: {
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    top: 10,
  },
  switch_img: {
    width: 40,
    height: 40,
    marginBottom: 5,
  },
});
