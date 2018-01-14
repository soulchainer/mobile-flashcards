import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import Navigation from '../Navigation';
import styles from './styles';

class Root extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* StatusBar will be here */}
        <Navigation />
      </View>
    );
  }
}

export default Root;
