import React, { Component } from 'react';
import {
  Animated,
  Dimensions,
  Text,
  View,
} from 'react-native';
import {
  inject,
  observer,
} from 'mobx-react/native';
import TextButton from '../../components/TextButton';
import styles from './styles';

const {
  height,
  width,
} = Dimensions.get('window');

const {
  timing,
  Value: AnimatedValue,
  View: AnimatedView,
} = Animated;

const initialState = {
  answers: {
    correct: 0,
    incorrect: 0,
  },
  currentCard: 1,
  toggled: false,
};

@inject('deckStore')
@observer
class QuizScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Quiz - ${navigation.state.params.deck.name}`,
  });

  constructor(props) {
    super(props);

    this.state = initialState;
    this.animatedValue = new AnimatedValue(0);
    const { key } = props.navigation.state.params.deck;
    this.cards = props.deckStore.decks.get(key).cards;
    console.log(this.cards);
    console.log(props.deckStore.decks.get(key).cards);
    this.totalCards = this.cards.length;
  }

  animateCard = () => {
    this.animatedValue.setValue(0);
    timing(this.animatedValue, {
      toValue: 1,
      duration: 5000,
    }).start();
  }

  toggleCard = () => {
    this.setState(({ toggled }) => ({ toggled: !toggled }), this.animateCard);
  };

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
    const interpolatedQuestion = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: toggled ? [0, -height]: [-height, 0],
    });
    const interpolatedAnswer = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: toggled ? [height, 0] : [0, height],
    });

    return (
      <View style={styles.QuizScreen}>
        <View style={styles.QuizScreenCard}>


          <AnimatedView
            style={[
              styles.QuizScreenCardFace,
              styles.QuizScreenCardQuestion,
              //toggled && styles.QuizScreenCardQuestionToggled
              { transform: [{ translateY: interpolatedQuestion }] }
            ]}
          >
            <View style={styles.QuizScreenTextGroup}>
              <Text style={styles.QuizScreenText}>{question}</Text>
              <TextButton
                onPress={this.toggleCard}
                label='Answer'
              />
            </View>
          </AnimatedView>


          <AnimatedView
            style={[
              styles.QuizScreenCardFace,
              styles.QuizScreenCardAnswer,
              //toggled && styles.QuizScreenCardAnswerToggled
              { transform: [{ translateY: interpolatedAnswer }] }
            ]}
          >
            <View style={styles.QuizScreenTextGroup}>
              <Text style={styles.QuizScreenText}>{answer}</Text>
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
          </AnimatedView>


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
