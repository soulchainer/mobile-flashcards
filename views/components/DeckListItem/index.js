import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {
  inject,
} from 'mobx-react/native';
import styles from './styles';

/**
 * Used to render each of the deck objects.
 * @returns {Object} Object that represents the state persisted in the device.
 */
@inject('deckStore')
class DeckListItem extends Component {
  render() {
    const {
      deck: { cards, name },
      height,
      onItemPress
    } = this.props;

    return (
      <TouchableHighlight onPress={onItemPress}>
        <View style={[styles.DeckListItem, { height }]}>
          <Text style={styles.DeckListItemName}>{name}</Text>
          <Text style={styles.DeckListItemCardNumber}>
            {`${(cards && cards.length) || 0} cards`}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

export default DeckListItem;
