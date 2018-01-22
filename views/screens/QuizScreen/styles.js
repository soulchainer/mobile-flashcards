import {
  Dimensions,
  StyleSheet,
} from 'react-native';

const {
  height,
  width,
} = Dimensions.get('window');

const styles = StyleSheet.create({
  QuizScreen: {
    flex: 1,
  },
  QuizScreenButtonGroup: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start',
  },
  QuizScreenCard: {
    alignItems: 'center',
    backgroundColor: 'green',
    flex: 1,
    justifyContent: 'center',
    width,
  },
  QuizScreenCardAnswer: {
    backgroundColor: 'red',
    position: 'absolute',
    transform: [{ translateY: height }]
  },
  QuizScreenCardFace: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  QuizScreenCardQuestion: {
    backgroundColor: 'blue',
    position: 'absolute',
    transform: [{ translateY: 0 }]
  },
  QuizScreenText: {
    fontSize: 30,
  },
  QuizScreenTextGroup: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default styles;
