import {
  action,
  observable,
} from 'mobx';
import uuidv4 from 'uuid/v4';

class DeckStore {
  @observable decks = new Map();

  @action('Add new card to deck')
  addCardToDeck = (deckId, card) => {
    this.decks.set(deckId, card);
  }

  @action('Add new deck')
  createDeck = (name) => {
    const key = uuidv4();
    const newDeck = {
      cards: [],
      key,
      name,
    };
    this.decks.set(key, newDeck);
  }
}

const deckStore = new DeckStore();

export default deckStore;
