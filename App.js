import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Provider } from 'mobx-react/native';
import deckStore from './state/store';
import Root from './views/components/Root';
import { setLocalNotification } from './utils/notifications';

class App extends Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider deckStore={deckStore}>
        <Root />
      </Provider>
    );
  }
}

export default App;
