import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import TextButton from '../../components/TextButton';
import styles from './styles';

class DeckScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.newDeck.name,
  });

  render() {
    const { params } = this.props.navigation.state;
    const newDeck = params && params.newDeck;
    const { cards, name } = newDeck ? newDeck : this.props;

    /* These two function will redirect to the proper screens, when done */
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