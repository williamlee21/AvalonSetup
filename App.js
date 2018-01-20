import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './Components/Home';
import Setup from './Components/Setup';
import Narration from './Components/Narration';

const RootNavigator = StackNavigator({
  Main: {
      screen: Home,
      navigationOptions: {
        headerTitle: 'Welcome to Avalon',
      },
  },
  Setup: {
    screen: Setup,
    navigationOptions: {
      headerTitle: 'Setup'
    }
  },
  Narration: {
    screen: Narration,
    navigationOptions: {
      HeaderTitle: 'Story time!!'
    }
  }
});

export default RootNavigator