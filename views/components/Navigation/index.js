import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import {
  StackNavigator,
  TabNavigator,
} from 'react-navigation';
import CreditsScreen from '../../screens/CreditsScreen';
import DeckListScreen from '../../screens/DeckListScreen';
import DeckScreen from '../../screens/DeckScreen';
import NewCardScreen from '../../screens/NewCardScreen';
import NewDeckScreen from '../../screens/NewDeckScreen';
import QuizScreen from '../../screens/QuizScreen';
import {
  ELEVATION,
  TABBAR_HEIGHT
} from '../../../constants';
import styles from './styles';

const Tabs = TabNavigator({
  DeckListScreen: {
    screen: DeckListScreen,
  },
  NewDeckScreen: {
    screen: NewDeckScreen,
  },
  Credits: {
    screen: CreditsScreen,
  },
}, {
  animationEnabled: true,
  initialRouteName: 'DeckListScreen',
  tabBarPosition: 'top',
  tabBarOptions: {
    activeTintColor: '#fff',
    indicatorStyle: {
      backgroundColor: '#e78ec4',
      height: 4,
    },
    showLabel: true,
    style: {
      backgroundColor: '#ae3c81',
      elevation: ELEVATION,
      height: TABBAR_HEIGHT,
    },
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
  NewCardScreen: {
    screen: NewCardScreen,
  },
  QuizScreen: {
    screen: QuizScreen,
  }
},
{
  initialRouteName: 'Home',
  navigationOptions: {
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#ae3c81',
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
