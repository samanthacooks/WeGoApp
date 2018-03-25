import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View, 
  StyleSheet
} from 'react-native';
import App from './app/index.js'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});



AppRegistry.registerComponent('wegorn', () => App);