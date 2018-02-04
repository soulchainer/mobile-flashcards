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
  QuizScreenProgress: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 5
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
