import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  TextButton: {
    alignItems: 'center',
    backgroundColor: 'rgba(28, 28, 28, 1)',
    borderRadius: 5,
    padding: 5,
  },
  'TextButton--disabled': {
    backgroundColor: 'rgba(28, 28, 28, 0.6)',
  },
  'TextButton-text': {
    color: '#fff',
  }
});

export default styles;
