import React, { Component } from 'react';
import {
  Text,
} from 'react-native';
import {
  inject,
} from 'mobx-react/native';
import styles from './styles';

@inject('decks')
class DeckListItem extends Component {
  render() {
    const { item: { cards, name } } = this.props;

    return (
      <View style={styles.DeckListItem}>
        <Text style={styles.DeckListItemName}>{name}</Text>
        <Text style={styles.DeckListItemCardNumber}>
          {`${cards.length} cards`}
        </Text>
      </View>
    );
  }
}

export default DeckListItem;
