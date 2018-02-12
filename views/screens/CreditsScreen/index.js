import React, { Component } from 'react';
import {
  Text,
  KeyboardAvoidingView,
} from 'react-native';
import { WebBrowser } from 'expo';
import styles from './styles';

class CreditsScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'CREDITS',
    title: 'CREDITS',
  };

  _handleOpenWithWebBrowser = (url) => {
    WebBrowser.openBrowserAsync(url);
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior='padding'
        style={styles.CreditsScreen}
      >
        <Text style={styles.CreditsScreenText}>
          Splash card icon made by
        </Text>
        <Text
          onPress={() => this._handleOpenWithWebBrowser('http://www.freepik.com/')}
          style={styles.CreditsScreenLink}
        >
          Freepik
        </Text>
        <Text style={styles.CreditsScreenText}>from</Text>
        <Text
          onPress={() => this._handleOpenWithWebBrowser('http://www.flaticon.com/')}
          style={styles.CreditsScreenLink}
        >
          www.flaticon.com
        </Text>
      </KeyboardAvoidingView>
    );
  }
}

export default CreditsScreen;
