import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import {
  inject,
} from 'mobx-react/native';
import styles from './styles';

@inject('deckStore')
class DeckListItem extends Component {
  render() {
    const { deck: { cards, name } } = this.props;

    return (
      <View style={styles.DeckListItem}>
        <Text style={styles.DeckListItemName}>{name}</Text>
        <Text style={styles.DeckListItemCardNumber}>
          {`${(cards && cards.length) || 0} cards`}
        </Text>
      </View>
    );
  }
}

export default DeckListItem;
