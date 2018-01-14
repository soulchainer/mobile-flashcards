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
import TextButton from '../../components/TextButton';
import styles from './styles';

@inject('deckStore')
@observer
class NewDeckScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'NEW DECK',
  };

  state = {
    deckName: '',
  }

  handleTextChange = (deckName) => { this.setState(() => ({ deckName })) };
  handleSubmit = () => { this.props.deckStore.createDeck(this.state.deckName) };

  render() {
    return (
      <KeyboardAvoidingView
        behavior='padding'
        style={styles.NewDeckScreen}
      >
        <Text>What is the title of your new deck?</Text>
        <TextInput
          value={this.state.deckName}
          onChangeText={this.handleTextChange}
        />
        <TextButton
          onPress={this.handleSubmit}
          label='Submit'
        />
        <Text>{JSON.stringify(this.props.deckStore.decks.values())}</Text>
        <Text>{this.state.deckName}</Text>
      </KeyboardAvoidingView>
    );
  }
}

export default NewDeckScreen;
