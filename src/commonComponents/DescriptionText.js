import React from 'react';
import { Text } from 'react-native';
import { fontSizes, colors } from '../constants';

const DescriptionText = ({ input }) => (
    <Text style={styles.textStyle}>{input}</Text>
);
const styles = {
  textStyle: {
    fontSize: fontSizes.descriptiveTextFontSize,
    color: colors.descriptiveTextColor,
    textAlign: 'center'
  },
};
export { DescriptionText };
