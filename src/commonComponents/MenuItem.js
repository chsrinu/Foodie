import React from 'react';
import { View, Image } from 'react-native';
import { DescriptionText, CustomButton } from './';

const MenuItem = ({ image, desc }) => (
  <View style={Styles.containerStyle}>
      <Image style={Styles.imageStyle} source={image} />
      <DescriptionText style={Styles.textStyle} input={desc} />
      <CustomButton style={Styles.buttonStyle} buttonName={'Order Now'} />
  </View>
);
const Styles = {
  containerStyle: {
    flex: 1,
    justifyContent: 'space-between',
  },
  imageStyle: {
    flex: 0.80,
    width: null
  },
  textStyle: {
    flex: 0.3,
    color: 'black',
  },
  buttonStyle: {
    flex: 0.02
  }
};
export { MenuItem };
