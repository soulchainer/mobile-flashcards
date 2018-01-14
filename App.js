import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import {
  observer,
  Provider,
} from 'mobx-react/native';
import deckStore from './state/store';
import DeckListScreen from './views/screens/DeckListScreen';

@observer
class App extends Component {
  componentDidMount() {
    // this would be a great place for recovering persisted state
  }
  render() {
    return (
      <Provider decks={deckStore}>
        <View style={styles.container}>
          <DeckListScreen />
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
