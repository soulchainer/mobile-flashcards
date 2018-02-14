import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import {
  inject,
  observer,
} from 'mobx-react/native';
import TextButton from '../../components/TextButton';
import styles from './styles';

@inject('deckStore')
@observer
class DeckScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.deck.name,
  });

  /* These two function will redirect to the proper screens, when done */
  handleAddCard = () => {
    const { navigate, state } = this.props.navigation;

    navigate('NewCardScreen', { deckId: state.params.deck.key });
  }

  handleStartQuiz = () => {
    const { navigate, state } = this.props.navigation;

    navigate('QuizScreen', { deck: state.params.deck });
  }

  render() {
    const { params } = this.props.navigation.state;
    const { key, name } = params.deck;
    const { cards } = this.props.deckStore.decks.get(key);

    return (
      <View style={styles.DeckScreen}>
        <View style={styles.DeckScreenTextGroup}>
          <Text style={styles.DeckScreenTextName}>{name}</Text>
          <Text style={styles.DeckScreenTextNumber}>
            {`${cards.length} cards`}
          </Text>
        </View>
        <View style={styles.DeckScreenButtonGroup}>
          <TextButton
            onPress={this.handleAddCard}
            label='Add Card'
            style={styles}
          />
          <TextButton
            onPress={this.handleStartQuiz}
            label='Start Quiz'
            style={styles}
          />
        </View>
      </View>
    );
  }
}

export default DeckScreen;
