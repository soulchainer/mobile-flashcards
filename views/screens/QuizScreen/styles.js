import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  QuizScreen: {
    alignItems: 'center',
    backgroundColor: 'wheat',
    flex: 1,
    justifyContent: 'center',
  },
  QuizScreenButtonGroup: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start',
  },
  QuizScreenCard: {
  },
  QuizScreenCardAnswer: {
    backgroundColor: 'red',
    position: 'absolute',
    top: 0,
  },
  QuizScreenCardFace: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200
  },
  QuizScreenCardQuestion: {
    backgroundColor: 'blue',
  },
  QuizScreenTextGroup: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default styles;
