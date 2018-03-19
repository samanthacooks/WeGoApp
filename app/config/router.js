import React from 'react';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button, Platform, StatusBar } from 'react-native';
import Budgets from '../screens/Budgets';
import BudgetDetails from '../screens/BudgetDetails';
import EditBudget from '../screens/EditBudget';
import AddBudget from '../screens/AddBudget';
import Root from '../screens/Root';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Update from '../screens/Update';
import Settings from '../screens/Settings';
import Profile from '../screens/Profile';





export const BudgetStack = StackNavigator({
  Budgets:{
    screen: Budgets,
    navigationOptions:( { navigation }) => ({
      title: 'Budgets',
    }),
  },
  BudgetDetails:{
    screen: BudgetDetails,
    navigationOptions:{
      title: 'Budget Details',
    },
  },
  BudgetEdit:{
    screen: EditBudget,
    navigationOptions:{
      title: 'Edit Budget',
    },
  },
  BudgetAdd:{
    screen: AddBudget,
    navigationOptions:{
      title: "Add Budget",
    },
  },
})


export const SettingsStack = StackNavigator({
   Profile:{
    screen: Profile,
    navigationOptions:( { navigation }) => ({
      title: 'Profile',
    }),
  },
  Settings:{
    screen: Settings,
    navigationOptions:{
      title: 'Settings'
    },
  },
  Update:{
    screen: Update,
    navigationOptions:{
    title: 'Update'
    },
  }
})


export const MeStack = StackNavigator({
  Profile:{
    screen: Profile,
    navigationOptions:( { navigation }) => ({
      title: 'Profile',
    }),
  },
  Settings:{
    screen: SettingsStack,
    headerMode: 'screen',
    navigationOptions:{
    header: null,
    title: 'Settings'
    },
  }
})

export const Tabs = TabNavigator({
    Me:{
    screen: SettingsStack,
    navigationOptions:{
      tabBarLabel: Platform.OS == 'ios' ? 'Profile' : 'Me',
      tabBarIcon: ({ tintColor }) => <Icon name='ios-contact' size={35} color={"#007AFF"}/>
    },
  },
  Budgets:{
    screen: BudgetStack,
    navigationOptions:{
      tabBarLabel: Platform.OS == 'ios' ? 'Budgets' : 'Budget',
      tabBarIcon: ({ tintColor }) => <Icon name='ios-calculator' size={35} color={"#7309ed"}/>
    },
  }
});

export const RootStack = StackNavigator({
  Root: {
    screen: Root,
    navigationOptions:( { navigation } ) => ({
    header: null,
    title: 'Budget Guru'
    })
  },
  Login:{
      screen: Login,
      navigationOptions:{
        title: 'Login'
      }
  },
  Register:{
      screen: Register,
      navigationOptions:{
        title: 'Register'
    }
  },
  Home:{
    screen: Tabs,
    headerMode: 'screen',
    navigationOptions:( { navigation } ) => ({
    header: null,
    title: 'Budget Guru'
    })

  }
});