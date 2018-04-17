import React from 'react';
import { View, Text } from 'react-native';
import { fontSizes } from '../constants';

const Header = ({ title, bgColor = 'red', textColor = 'white' }) => (
  <View style={[styles.containerStyle, { backgroundColor: bgColor }]}>
    <Text style={[styles.textStyle, { color: textColor }]}>{title}</Text>
  </View>
);
const styles = {
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.9,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: fontSizes.appTitleFontSize,
    fontFamily: 'monospace',
    fontWeight: 'bold'
  }
};
export { Header };
