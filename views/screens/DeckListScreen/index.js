import React, { Component } from 'react';
import {
  Dimensions,
  FlatList,
  Text,
  View,
} from 'react-native';
import {
  inject,
  observer,
} from 'mobx-react/native';
import { Constants } from 'expo';
import DeckListItem from '../../components/DeckListItem';
import TextButton from '../../components/TextButton';
import {
  ELEVATION,
  TABBAR_HEIGHT,
} from '../../../constants';
import styles from './styles';

let { height } = Dimensions.get('window');
height = height - Constants.statusBarHeight - TABBAR_HEIGHT - ELEVATION;
const ITEM_HEIGHT = height / 3;

@inject('deckStore')
@observer
class DeckListScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'DECKS',
    title: 'DECKS',
  };

  getItemLayout = (data, index) => (
    {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
  );

  renderItem = ({ item }) => (
    <DeckListItem
      onItemPress={() => {
        this.props.navigation.navigate('DeckScreen', { deck: item });
      }}
      deck={item}
      height={ITEM_HEIGHT}
      key={item.key}
    />
  );

  renderPlaceholder = () => (
    <View style={styles.DeckListScreenPlaceholder}>
      <Text
        style={styles.DeckListScreenPlaceholderText}>
        There are no decks
      </Text>
      <TextButton
        onPress={() => this.props.navigation.navigate('NewDeckScreen')}
        label='Add a deck'
      />
    </View>
  );

  renderSeparator = () => <View style={styles.DeckListScreenSeparator} />;

  render() {
    const { deckStore } = this.props;
    const decks = deckStore.decks && deckStore.decks.values()

    return (
      <View style={styles.DeckListScreen}>
        <FlatList
          data={decks}
          getItemLayout={this.getItemLayout}
          ItemSeparatorComponent={this.renderSeparator}
          ListEmptyComponent={this.renderPlaceholder}
          keyExtractor={item => item.key}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

export default DeckListScreen;
