import {
  Platform,
  StyleSheet,
} from 'react-native';

const { OS, select } = Platform;
const platformStyles = select({
  android: {
    'TextButton--android': {
      backgroundColor: '#000',
    },
    'TextButton-text--android': {
      color: '#fff',
    },
  },
  ios: {
    'TextButton--ios': {
      backgroundColor: '#eee',
    },
    'TextButton-text--ios': {
      color: '#282828',
    },
  },
});
const styles = StyleSheet.create({
  TextButton: {
    alignItems: 'center',
    borderRadius: 5,
    padding: 5,
  },
  'TextButton--disabled': {
    opacity: 0.6,
  },
  ...platformStyles,
});

export default styles;
