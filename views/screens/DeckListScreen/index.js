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

@inject('decks')
class DeckListScreen extends Component {
  renderItem = item => <DeckListItem item={item} />;

  render() {
    const { decks } = this.props;

    return (
      <View style={styles.DeckListScreen}>
        <FlatList
          data={Object.values(decks)}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

export default DeckListScreen;
