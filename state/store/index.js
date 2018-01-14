import {
  action,
  observable,
} from 'mobx';
import uuidv4 from 'uuid/v4';

class Decks {
  @observable decks = new Map();

  @action('Add new card to deck')
  addCardToDeck = (deckId, card) => {
    let { name, cards } = this.decks.get(deckId);

    cards = { ...cards, card };
    this.decks.set(deckId, { name, cards });
  }

  @action('Add new deck')
  createDeck = (name) => {
    const id = uuidv4();
    const newDeck = {
      name,
      cards: {},
    };
    this.decks.set(id, newDeck);
  }
}

const deckStore = new Decks();

export default deckStore;
