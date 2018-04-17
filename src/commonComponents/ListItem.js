import React from 'react';
import { Image, Text, TouchableHighlight, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './';
import { colors, fontSizes } from '../constants';

const ListItem = ({ data }) => (
<CardSection>
  <TouchableHighlight
    underlayColor={colors.listItemActiveColor}
    onPress={() =>
      Actions.item({ title: data.name, image: data.img, desc: data.desc })}
  >
  <View>
    <Image style={styles.imageStyle} source={data.img} />
    <Text style={styles.headingStyle}>{data.name}</Text>
  </View>
  </TouchableHighlight>
</CardSection>
);
const styles = {
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  },
  headingStyle: {
    padding: 2,
    fontSize: fontSizes.itemHeadingFontSize,
    textAlign: 'center'
  },
  container: {
    alignItems: 'center'
  }


};
export { ListItem };
