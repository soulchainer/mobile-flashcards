import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  DeckListScreen: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  DeckListScreenPlaceholder: {
    alignItems: 'center',
    flex: 1,
  },
  DeckListScreenPlaceholderText: {
    fontSize: 40,
  },
  DeckListScreenSeparator: {
    backgroundColor: "#ced0ce",
    height: 1,
    marginLeft: "7%",
    width: "86%",
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