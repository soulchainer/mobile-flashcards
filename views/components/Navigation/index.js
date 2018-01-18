import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import {
  StackNavigator,
  TabNavigator,
} from 'react-navigation';
import DeckListScreen from '../../screens/DeckListScreen';
import DeckScreen from '../../screens/DeckScreen';
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
  tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#ffeb40',
    showLabel: true,
  },
});

const Screens = StackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null,
    },
  },
  DeckScreen: {
    screen: DeckScreen,
  },
},
{
  initialRouteName: 'Home',
  navigationOptions: {
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#000',
    },
  },
});

class Navigation extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Screens />
      </View>
    );
  }
}

export default Navigation;
