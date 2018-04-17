import React from 'react';
import { View } from 'react-native';
import { colors } from '../constants';

const CardSection = (props) => (
  <View style={styles.containerStyle}>
    {props.children}
  </View>
);
const styles = {
  containerStyle: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderRadius: 1,
    borderColor: colors.cardSectionBorderColor
  }
};
export { CardSection };
