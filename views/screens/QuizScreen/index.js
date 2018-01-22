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

const initialState = {
  answers: {
    correct: 0,
    incorrect: 0,
  },
  currentCard: 1,
  toggled: false,
};

// AÑADIR LOS ESTILOS QUE FALTAN Y POCO MÁS :D. DIVIDIR EN COMPONENTES
@inject('deckStore')
@observer
class QuizScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Quiz - ${navigation.state.params.deck.name}`,
  });

  constructor(props) {
    super(props);

    this.state = initialState;
    const { key } = props.navigation.state.params.deck;
    this.cards = props.deckStore.decks.get(key).cards;
    console.log(this.cards);
    console.log(props.deckStore.decks.get(key).cards);
    this.totalCards = this.cards.length;
  }

  toggleCard = () => { this.setState(({ toggled }) => { toggled: !toggled })};

  /* These two function will redirect to the proper screens, when done */
  exitQuiz = () => {
    const { navigate, state } = this.props.navigation;

    navigate('DeckScreen', { deck: state.params.deck });
  };

  handleCorrectAnswer = () => { this.nextCard('correct') };

  handleIncorrectAnswer = () => { this.nextCard('incorrect') };

  restartQuiz = () => { this.setState(initialState) };

  nextCard = (answerType) => {
    // cargar aquí directamente la nueva pregunta o el mensaje de finalización
    // del quiz, con la puntuación y los botones correspondientes. En el front.

    this.setState(({ answers, currentCard }) => ({
      answers: { ...answers, [answerType]: answers[answerType] + 1 },
      currentCard: currentCard + 1,
    }));
    // cargar la respuesta tras cambiar el estado de flipped
    // esto, por recomendación de Facebook, mejor hacerlo en componentDidUpdate()
  };

  render() {
    const { currentCard, toggled } = this.state;
    const { answer, question } = this.cards[currentCard - 1];

    return (
      <View style={styles.QuizScreen}>
        <View style={styles.QuizScreenCard}>


          <View
            style={[
              styles.QuizScreenCardFace,
              styles.QuizScreenCardQuestion,
              toggled && styles.QuizScreenCardQuestionToggled
            ]}
          >
            <View style={styles.QuizScreenTextGroup}>
              <Text>{question}</Text>
              <TextButton
                onPress={this.toggleCard}
                label='Answer'
              />
            </View>
          </View>


          <View
            style={[
              styles.QuizScreenCardFace,
              styles.QuizScreenCardAnswer,
              toggled && styles.QuizScreenCardAnswerToggled
            ]}
          >
            <View style={styles.QuizScreenTextGroup}>
              <Text>{answer}</Text>
              <TextButton
                onPress={this.toggleCard}
                label='Question'
              />
            </View>
            <View style={styles.QuizScreenButtonGroup}>
              <TextButton
                onPress={this.handleCorrectAnswer}
                label='Correct'
              />
              <TextButton
                onPress={this.handleIncorrectAnswer}
                label='Incorrect'
              />
            </View>
          </View>


        </View>
      </View>
    );
  }
}

export default QuizScreen;

/*
- Muestra una tarjeta de pregunta, `Card`.
- Muestra la pregunta en cuestión, junto a un botón para mostrar la respuesta
  (da la vuelta, flip, a la `Card`).
- Al pulsar `Answer`, se da la vuelta a la `Card` y muestra la respuesta.
- Además de la respuesta, se muestran dos botones, para que el usuario indique
  si su respuesta fue `Correct` o `Incorrect`.
- La pantalla general muestra el número de preguntas restantes.
  Algo a la **Actual/Totales**, en la esquina superior izquierda.
  Componente `QuizProgress`.
- Cuando se responde a la última pregunta, aparece una puntuación de respuestas
  correctas. Puede ser un porcentaje de respuestas correctas o simplemente el
  número de respuestas correctas.
- Junto a la puntuación, aparecen dos botones, `Restart`, para reiniciar el
  quiz (volver a la primera pregunta del mismo), o `Exit`, para salir del Quiz y volver a `DeckScreen`.
*/
