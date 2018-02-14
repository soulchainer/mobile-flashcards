import React, { Component } from 'react';
import {
  Text,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import {
  inject,
  observer,
} from 'mobx-react/native';
import uuidv4 from 'uuid/v4';
import TextButton from '../../components/TextButton';
import styles from './styles';

@inject('deckStore')
@observer
class NewDeckScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'NEW DECK',
    title: 'NEW DECK',
  };

  state = {
    deckName: '',
  }

  handleTextChange = (deckName) => { this.setState(() => ({ deckName })) };
  handleSubmit = () => {
    const name = this.state.deckName;
    const { deckStore, navigation } = this.props;
    const key = uuidv4();
    const deck = {
      cards: [],
      key,
      name,
    };

    deckStore.addDeck(key, deck);
    navigation.navigate('DeckScreen', { deck });
  };

  render() {
    return (
      <KeyboardAvoidingView
        behavior='padding'
        style={styles.NewDeckScreen}
      >
        <Text style={styles.NewDeckScreenQuestion}>
          What is the title of your new deck?
        </Text>
        <TextInput
          onChangeText={this.handleTextChange}
          placeholder='Deck Title'
          style={styles.NewDeckScreenInput}
          value={this.state.deckName}
        />
        <TextButton
          onPress={this.handleSubmit}
          disabled={!this.state.deckName}
          label='Submit'
          style={styles}
        />
      </KeyboardAvoidingView>
    );
  }
}

export default NewDeckScreen;
