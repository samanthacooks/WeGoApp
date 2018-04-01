import React, { Component } from 'react';
import { Drawer, RootStack, Tabs, LeftDrawerButton } from './config/router.js'
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import Root from './screens/Root';
import { StackNavigator, TabNavigator } from 'react-navigation';

class App extends Component {

  render () {
      return ( <RootStack /> )
  }
}


export default App;