import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { Header, ListItem, List } from '../commonComponents';
import { pizzaData } from '../constants';

class MainMenu extends Component {
  render() {
    return (
    <View style={{ flex: 1 }}>
        <Header title={'Foodie'} />
        <List>
          <FlatList
            data={pizzaData}
            renderItem={({ item }) => <ListItem data={item} />}
          />
        </List>
      </View>
    );
  }
}

export default MainMenu;
