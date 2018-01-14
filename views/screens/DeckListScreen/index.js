import React, { Component } from 'react';
import {
  FlatList,
  Text,
  View,
} from 'react-native';
import {
  inject,
  observer,
} from 'mobx-react/native';
import DeckListItem from '../../components/DeckListItem';
import styles from './styles';

@inject('deckStore')
@observer
class DeckListScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'DECKS',
  };

  renderItem = item => <DeckListItem item={item} key={item.key} />;
  renderList = decks => {
    if (decks) return (
      <FlatList
        data={decks}
        keyExtractor={item => item.key}
        renderItem={this.renderItem}
      />
    );
    return <View>Empty List</View>;
  };

  render() {
    const { deckStore } = this.props;
    const decks = deckStore.decks && deckStore.decks.values()

    return (
      <View style={styles.DeckListScreen}>
        {this.renderList(decks)}
        <Text>{JSON.stringify(decks)}</Text>
      </View>
    );
  }
}

export default DeckListScreen;
