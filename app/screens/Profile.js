import React, {Component} from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { RootStack, Tabs } from '../config/router.js';
import { TabNavigator, StackNavigator } from 'react-navigation';

class Profile extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Page </Text>
      </View>
    );
  }
}


export default Profile;