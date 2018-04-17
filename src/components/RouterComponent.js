import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
//import { MenuItem } from '../commonComponents';
import MainMenu from './MainMenu';
import { MenuItem } from '../commonComponents';


class RouterComponent extends Component {
  render() {
    return (
      <Router>
      <Scene key='root'>
        <Scene
          key='menu'
          component={MainMenu}
          hideNavBar
        />
        <Scene
          key='item'
          component={MenuItem}
        />
      </Scene>
      </Router>
    );
  }
}
export default RouterComponent;
