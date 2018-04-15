import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableHighlight, Platform} from 'react-native';
import { TextInput } from '../components/TextInput';
import { PrimaryButton } from '../components/Buttons';
import colors from '../config/colors';
import SwipeCards from './SwipeCards';

             

class Events extends Component{
    render() {
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Events Page </Text>
          </View>
        );
      }
    }
    

export default Events;

