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
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  clearLocalNotification,
  setLocalNotification,
} from '../../../utils/notifications'
import TextButton from '../../components/TextButton';
import styles from './styles';

/**
 * Data about the icons to show of quiz end.
 */
const loseColor = '#de1a3d';
const winColor = '#f39b1a';

const loseIcon = (
  <MaterialCommunityIcons name='close-outline' color={loseColor} size={100} />
);
const winIcon = (
  <MaterialCommunityIcons name='star' color={winColor} size={100} />
);

const {
  height,
  width,
} = Dimensions.get('window');

const {
  timing,
  Value: AnimatedValue,
  View: AnimatedView,
} = Animated;

/**
 * Initial state. To be reused everytime we restart the quiz.
 */
const initialState = {
  answers: {
    correct: 0,
    incorrect: 0,
  },
  currentCard: 1,
  endOfQuiz: false,
  toggled: false,
};


/**
 * Renders the Quiz view
 */
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

  /**
   * Clear existing notifications and schedule new ones when the user ends
   * a Quiz.
   */
  componentWillUpdate(nextProps, { endOfQuiz }) {
    if (endOfQuiz) {
      clearLocalNotification().then(setLocalNotification)
    }
  }

  /**
   * Clear any existing listener of `this.animatedValue` on component unmount.
   */
  componentWillUnmount() {
    this.animatedValue.removeAllListeners()
  }

  /**
   * Trigger the card animation
   */
  animateCard = () => {
    this.animatedValue.setValue(0);
    timing(this.animatedValue, {
      toValue: 1,
      duration: 400,
    }).start();
  };

  /**
   * Toggle the card and show one or another face of them
   */
  toggleCard = () => {
    if (!this.userHasAlreadyInteracted) this.userHasAlreadyInteracted = true;
    this.setState(({ toggled }) => ({ toggled: !toggled }), this.animateCard);
  };

  /**
   * Exit the quiz
   */
  exitQuiz = () => {
    const { navigate, state } = this.props.navigation;

    navigate('DeckScreen', { deck: state.params.deck });
  };

  /**
   * React when the «Correct» button is pressed
   */
  handleCorrectAnswer = () => { this.nextCard('correct') };

  /**
   * React when the «Incorrect» button is pressed
   */
  handleIncorrectAnswer = () => { this.nextCard('incorrect') };

  /**
   * Restart the quiz
   */
  restartQuiz = () => {
    this.userHasAlreadyInteracted = false;
    this.setState(initialState)
  };

  /**
   * Show next card, if any, or end the quiz
   */
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
    const {
      answers: { correct, incorrect },
      currentCard,
      toggled
    } = this.state;
    const { answer, question } = this.cards[currentCard - 1];
    const interpolatedAnswer = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: toggled ? [height, 0]: [0, height],
    });
    const interpolatedQuestion = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: toggled ? [0, -height] : [-height, 0],
    });
    const winner = correct >= incorrect;

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
                <View style={styles.QuizScreenMainContent}>
                  <Text style={styles.QuizScreenText}>{question}</Text>
                  <TextButton
                    onPress={this.toggleCard}
                    label='Answer'
                    style={styles}
                  />
                </View>
              :
              // Quiz End UI
              <View style={styles.QuizScreenMainContent}>
                {winner ? winIcon : loseIcon}
                <Text
                  style={[
                    styles.QuizScreenFinalScoreText,
                    { color: winner ? winColor : loseColor }
                  ]}
                >
                  {`${Math.round((correct / this.totalCards) * 100)} %`}
                </Text>
                <View style={styles.QuizScreenButtonGroup}>
                  <TextButton
                    onPress={this.restartQuiz}
                    label='Restart'
                    style={styles}
                  />
                  <TextButton
                    onPress={this.exitQuiz}
                    label='Exit'
                    style={styles}
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
            <View style={styles.QuizScreenMainContent}>
              <Text style={styles.QuizScreenText}>{answer}</Text>
              <TextButton
                onPress={this.toggleCard}
                label='Question'
                style={styles}
              />
            </View>
            <View style={styles.QuizScreenButtonGroup}>
              <TextButton
                onPress={this.handleCorrectAnswer}
                label='Correct'
                style={styles}
              />
              <TextButton
                onPress={this.handleIncorrectAnswer}
                label='Incorrect'
                style={styles}
              />
            </View>
          </AnimatedView>
        </View>
      </View>
    );
  }
}

export default QuizScreen;
