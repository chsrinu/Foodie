import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { colors, fontSizes } from '../constants';

const CustomButton = ({ onPress, buttonName }) => (
  <TouchableOpacity style={styles.containerStyle} onPress={onPress}>
    <Text style={styles.textStyle}>{buttonName}</Text>
  </TouchableOpacity>
);
const styles = {
  containerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.buttonBgColor
  },
  textStyle: {
    color: colors.buttonTextColor,
    fontSize: fontSizes.buttonTextSize
  }
};
export { CustomButton };
