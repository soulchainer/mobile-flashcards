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
class DeckScreen extends Component {
  render() {
    const { decks: { cards, name } } = this.props.deckStore;

    handleAddCard = () => {}
    handleStartQuiz = () => {}

    return (
      <View style={styles.DeckScreen}>
        <View style={styles.DeckScreenTextGroup}>
          <Text>{name}</Text>
          <Text>{`${cards.length} cards`}</Text>
        </View>
        <View style={styles.DeckScreenButtonGroup}>
          <TextButton
            onPress={this.handleAddCard}
            label='Add Card'
          />
          <TextButton
            onPress={this.handleStartQuiz}
            label='Star Quiz'
          />
        </View>
      </View>
    );
  }
}

export default DeckScreen;

/* - muestra el título del `Deck`
- muestra el número de tarjetas, `Card`, en el `Deck`
- muestra una opción para empezar un `Quiz` (examen) en el `Deck` actual
- muestra una opción para añadir una nueva pregunta, `Card`, al `Deck` */