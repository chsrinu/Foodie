import React, { Component } from 'react';
import { View, Platform, UIManager, LayoutAnimation } from 'react-native';


export class List extends Component {
  constructor() {
      super();
      if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }
  componentWillUpdate() {
    LayoutAnimation.spring();
  }
  render() {
    return (
      <View
      style={{
        borderBottomWidth: 1, borderColor: 'red', flex: 0.99 }}
      >
      {this.props.children}
      </View>
    );
  }
}
