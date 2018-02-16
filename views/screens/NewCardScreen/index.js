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

const initialState = {
  answer: '',
  question: '',
  submitDisabled: true,
};

/**
 * Renders the New Card (Question) view
 */
@inject('deckStore')
@observer
class NewCardScreen extends Component {
  static navigationOptions = {
    title: 'Add Card',
  };

  state = initialState;

  /**
   * Handle changes in the Answer value input by the user
   */
  handleAnswerChange = (answer) => {
    this.setState({ answer }, this.updateSubmitButtonState);
  };

  /**
   * Handle changes in the Question value input by the user
   */
  handleQuestionChange = (question) => { 
    this.setState({ question }, this.updateSubmitButtonState);
  };

  /**
   * Handle the submit of the data given by the user.
   * Basically, sends the data and adds a card to the proper deck.
   */
  handleSubmit = () => {
    const { answer, question } = this.state;
    const key = uuidv4();
    const card = { answer, key, question };
    const { goBack, state } = this.props.navigation;
    const { deckId } = state.params;

    this.props.deckStore.addCardToDeck(deckId, card);
    goBack();
  };

  /**
   * Enable/Disable the «Submit» button, depending on if all the required
   * inputs to create a new card has info or not.
   */
  updateSubmitButtonState = () => {
    const { answer, question } = this.state;
    const submitDisabled = (answer === '') || (question === '');
    if (submitDisabled !== this.state.submitDisabled) {
      this.setState({ submitDisabled });
    }
  };

  render() {
    const {
      answer,
      question,
      submitDisabled,
    } = this.state;

    return (
      <KeyboardAvoidingView
        behavior='padding'
        style={styles.NewCardScreen}
      >
        <TextInput
          onChangeText={this.handleQuestionChange}
          placeholder='Question'
          style={styles.NewCardScreenInput}
          value={question}
        />
        <TextInput
          onChangeText={this.handleAnswerChange}
          multiline
          numberOfLines={4}
          placeholder='Answer'
          style={styles.NewCardScreenInput}
          value={answer}
        />
        <TextButton
          onPress={this.handleSubmit}
          disabled={submitDisabled}
          label='Submit'
          style={styles}
        />
      </KeyboardAvoidingView>
    );
  }
}

export default NewCardScreen;
