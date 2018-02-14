import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  DeckScreen: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  DeckScreenTextGroup: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 40
  },
  DeckScreenTextName: {
    color: '#282828',
    fontSize: 30,
  },
  DeckScreenTextNumber: {
    color: '#8d8c8c',
    fontSize: 20,
  },
  DeckScreenButtonGroup: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  TextButton: {
    backgroundColor: '#ae3c81',
    marginBottom: 20,
    minWidth: '40%',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  'TextButton-text--android': {
    fontSize: 20,
  },
});

export default styles;
