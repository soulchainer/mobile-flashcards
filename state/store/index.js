import {
  action,
  observable,
} from 'mobx';
import {
  loadState,
  persistState
} from '../utils/persistence';

class DeckStore {
  @observable decks = new Map();
  @observable loading = true;

  @action('Add new card to deck')
  addCardToDeck = (deckId, card) => {
    const { cards, key, name } = this.decks.get(deckId);
    const deck = {
      cards: [...cards, card],
      key,
      name,
    };
    this.decks.set(deckId, deck);
    persistState({ [deckId]: deck });
  }

  @action('Add new deck')
  addDeck = (key, deck) => {
    this.decks.set(key, deck);
    persistState({ [key]: deck });
  }

  @action('Get initial decks')
  getInitialDecks = async () => {
    this.decks = new Map(Object.entries(await(loadState())));
    this.loading = false;
  }
}

const deckStore = new DeckStore();

export default deckStore;
