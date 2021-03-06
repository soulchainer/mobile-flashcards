import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  NewDeckScreen: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  NewDeckScreenInput: {
    fontSize: 20,
    paddingLeft: 10,
    paddingVertical: 15,
    width: '80%', 
  },
  NewDeckScreenQuestion: {
    fontSize: 20,
  },
  TextButton: {
    backgroundColor: '#ae3c81',
    marginTop: 40,
    minWidth: '40%',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  'TextButton-text': {
    fontSize: 20,
  },
});

export default styles;