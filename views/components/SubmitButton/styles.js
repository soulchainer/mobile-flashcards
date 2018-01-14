import {
  Platform,
  StyleSheet,
} from 'react-native';

const { OS, select } = Platform;
const platformStyles = select({
  android: {
    'SubmitBtn--android': {
      backgroundColor: '#000',
    },
    'SubmitBtn-text--android': {
      color: '#fff',
    },
  },
  ios: {
    'SubmitBtn--ios': {
      backgroundColor: '#eee',
    },
    'SubmitBtn-text--ios': {
      color: '#282828',
    },
  },
});
const styles = StyleSheet.create({
  SubmitBtn: {
    alignItems: 'center',
    borderRadius: 5,
    padding: 5,
  },
  ...platformStyles,
});

export default styles;
