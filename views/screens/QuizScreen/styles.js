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
    backgroundColor: '#ddd',
    flex: 1,
  },
  QuizScreenButtonGroup: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start',
  },
  QuizScreenCard: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width,
  },
  QuizScreenCardAnswer: {
    position: 'absolute',
    transform: [{ translateY: height }],
  },
  QuizScreenCardFace: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 15,
    width
  },
  QuizScreenCardQuestion: {
    position: 'absolute',
    transform: [{ translateY: 0 }]
  },
  QuizScreenFinalScoreText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  QuizScreenMainContent: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  QuizScreenProgress: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 5
  },
  QuizScreenText: {
    fontSize: 30,
  },
  TextButton: {
    backgroundColor: '#ae3c81',
    marginTop: 20,
    minWidth: '40%',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  'TextButton-text--android': {
    fontSize: 20,
  },
});

export default styles;
