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
  }
});

export default styles;