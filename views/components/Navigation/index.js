import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import DeckListScreen from '../../screens/DeckListScreen';
import NewDeckScreen from '../../screens/NewDeckScreen';
import styles from './styles';

const Tabs = TabNavigator({
  DeckListScreen: {
    screen: DeckListScreen,
  },
  NewDeckScreen: {
    screen: NewDeckScreen,
  },
}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
    showLabel: true,
  },
});

class Navigation extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Tabs />
      </View>
    );
  }
}

export default Navigation;
