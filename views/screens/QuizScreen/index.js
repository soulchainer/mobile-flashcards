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
import {
  clearLocalNotification,
  setLocalNotification,
} from '../../../utils/notifications'
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
  endOfQuiz: false,
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
    this.totalCards = this.cards.length;
    this.userHasAlreadyInteracted = false;
  }

  componentWillUpdate(nextProps, { endOfQuiz }) {
    if (endOfQuiz) {
      clearLocalNotification().then(setLocalNotification)
    }
  }

  animateCard = () => {
    this.animatedValue.setValue(0);
    timing(this.animatedValue, {
      toValue: 1,
      duration: 400,
    }).start();
  }

  toggleCard = () => {
    if (!this.userHasAlreadyInteracted) this.userHasAlreadyInteracted = true;
    this.setState(({ toggled }) => ({ toggled: !toggled }), this.animateCard);
  };

  exitQuiz = () => {
    const { navigate, state } = this.props.navigation;

    navigate('DeckScreen', { deck: state.params.deck });
  };

  handleCorrectAnswer = () => { this.nextCard('correct') };

  handleIncorrectAnswer = () => { this.nextCard('incorrect') };

  restartQuiz = () => {
    this.userHasAlreadyInteracted = false;
    this.setState(initialState)
  };

  nextCard = (answerType) => {
    this.setState(({ answers }) => ({
      answers: { ...answers, [answerType]: answers[answerType] + 1 },
    }));

    let { currentCard } = this.state;
    const cardsLeft = this.totalCards - currentCard;

    if (cardsLeft) {
      this.setState({ currentCard: currentCard + 1 });
    } else {
      this.setState({ endOfQuiz: true });
    }

    this.toggleCard();
  };

  render() {
    const { currentCard, toggled } = this.state;
    const { answer, question } = this.cards[currentCard - 1];
    const interpolatedAnswer = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: toggled ? [height, 0]: [0, height],
    });
    const interpolatedQuestion = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: toggled ? [0, -height] : [-height, 0],
    });

    return (
      <View style={styles.QuizScreen}>
        <Text style={styles.QuizScreenProgress}>
          {this.state.currentCard}/{this.totalCards}
        </Text>
        <View style={styles.QuizScreenCard}>
          <AnimatedView
            style={[
              styles.QuizScreenCardFace,
              styles.QuizScreenCardQuestion,
              this.userHasAlreadyInteracted && { transform: [{ translateY: interpolatedQuestion }] }
            ]}
          >
            
            {
              !this.state.endOfQuiz ?
                <View style={styles.QuizScreenTextGroup}>
                  <Text style={styles.QuizScreenText}>{question}</Text>
                  <TextButton
                    onPress={this.toggleCard}
                    label='Answer'
                  />
                </View>
              :
              // Quiz End UI
              <View style={styles.QuizScreenTextGroup}>
                <Text style={styles.QuizScreenText}>{this.state.answers.correct}</Text>
                <View style={styles.QuizScreenButtonGroup}>
                  <TextButton
                    onPress={this.restartQuiz}
                    label='Restart'
                  />
                  <TextButton
                    onPress={this.exitQuiz}
                    label='Exit'
                  />
                </View>
              </View>
            }
          </AnimatedView>
          <AnimatedView
            style={[
              styles.QuizScreenCardFace,
              styles.QuizScreenCardAnswer,
              this.userHasAlreadyInteracted && { transform: [{ translateY: interpolatedAnswer }] }
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
