import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {colors} from '../styles/styles';

interface ButtonProps {
  operation: (item: string) => void;
  text: string;
  color?: string;
  isDouble?: boolean;
}

export const CustomButton = ({
  operation,
  text,
  color = colors.gray,
  isDouble = false,
}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={() => operation(text)}>
      <View
        style={[
          styles.container,
          {backgroundColor: color, width: isDouble ? 180 : 80},
        ]}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
  },
});
