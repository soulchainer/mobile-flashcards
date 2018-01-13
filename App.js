import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  observer,
  Provider,
} from 'mobx-react/native';
import deckStore from './state/store';

@observer
class App extends Component {
  componentDidMount() {
    // this would be a great place for recovering persisted state
  }
  render() {
    return (
      <Provider decks={deckStore}>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
          <Text>{JSON.stringify(deckStore)}</Text>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
