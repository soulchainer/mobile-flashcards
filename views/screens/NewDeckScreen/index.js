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

@inject('decks')
@observer
class NewDeckScreen extends Component {
  state = {
    deckName: '',
  }

  handleTextChange = (deckName) => { this.setState(() => ({ deckName })) };
  handleSubmit = () => { this.props.decks.createDeck(this.state.deckName) };

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
      </KeyboardAvoidingView>
    );
  }
}

export default NewDeckScreen;
