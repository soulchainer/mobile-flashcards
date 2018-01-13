import {
  action,
  observable,
} from 'mobx';
import uuidv4 from 'uuid/v4';

class Decks {
  @observable decks = {};

  @action('Add new card to deck')
  addCardToDeck = (deckId, card) => {
    let { cards } = this.decks[deckId];

    cards = { ...cards, card };
    this.decks[deckId].cards = cards;
  }

  @action('Add new deck')
  createDeck = (title) => {
    const id = uuidv4();
    this.decks[id] = {
      title
    };
  }
}

const deckStore = new Decks();

export default deckStore;
