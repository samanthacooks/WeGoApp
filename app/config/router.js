import React from 'react';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import { Button, Platform, StatusBar, View, Text } from 'react-native';
import {Icon} from 'react-native-elements';
// import Budgets from '../screens/Budgets';
// import BudgetDetails from '../screens/BudgetDetails';
// import EditBudget from '../screens/EditBudget';
// import AddBudget from '../screens/AddBudget';
import Root from '../screens/Root';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Register from '../screens/Register';
// import Update from '../screens/Update';
// import Settings from '../screens/Settings';
import Profile from '../screens/Profile';
import Events from '../screens/Events';
import SwipeCards from '../screens/SwipeCards';





// export const BudgetStack = StackNavigator({
//   Budgets:{
//     screen: Budgets,
//     navigationOptions:( { navigation }) => ({
//       title: 'Budgets',
//     }),
//   },
//   BudgetDetails:{
//     screen: BudgetDetails,
//     navigationOptions:{
//       title: 'Budget Details',
//     },
//   },
//   BudgetEdit:{
//     screen: EditBudget,
//     navigationOptions:{
//       title: 'Edit Budget',
//     },
//   },
//   BudgetAdd:{
//     screen: AddBudget,
//     navigationOptions:{
//       title: "Add Budget",
//     },
//   },
// })


// export const SettingsStack = StackNavigator({
//    Profile:{
//     screen: Profile,
//     navigationOptions:( { navigation }) => ({
//       title: 'Profile',
//     }),
//   },
//   Settings:{
//     screen: Settings,
//     navigationOptions:{
//       title: 'Settings'
//     },
//   },
//   Update:{
//     screen: Update,
//     navigationOptions:{
//     title: 'Update'
//     },
//   }
// })


// export const MeStack = StackNavigator({
//   Profile:{
//     screen: Profile,
//     navigationOptions:( { navigation }) => ({
//       title: 'Profile',
//     }),
//   },
//   Settings:{
//     screen: SettingsStack,
//     headerMode: 'screen',
//     navigationOptions:{
//     header: null,
//     title: 'Settings'
//     },
//   }
// })

export const Tabs = TabNavigator({
    Me:{
    screen: Profile,
    navigationOptions:{
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => <Icon name="person" size={35} color={tintColor} />
    }
    },
  Budgets:{
    screen: Home,
    navigationOptions:{
      tabBarLabel: 'Notifications',
      tabBarIcon: ({ tintColor }) => <Icon name="notifications" size={35} color={tintColor} />
    }
  },
  Friends:{
    screen: Home,
    navigationOptions:{
      tabBarLabel: 'Friends',
      tabBarIcon: ({ tintColor }) => <Icon name="group" size={35} color={tintColor} />
    }
  },
  Events:{
    screen: SwipeCards,
    navigationOptions:{
      tabBarLabel: 'Events',
      tabBarIcon: ({ tintColor }) => <Icon name="local-activity" size={35} color={tintColor} />
    }
  }
});

export const RootStack = StackNavigator({
  Root: {
    screen: Root,
    navigationOptions:( { navigation } ) => ({
    header: null,
    title: 'Home'
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