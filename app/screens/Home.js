import React, {Component} from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Notifications </Text>
      </View>
    );
  }
}


export default Home;