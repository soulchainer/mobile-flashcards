import {
  action,
  observable,
} from 'mobx';

class DeckStore {
  @observable decks = new Map();

  @action('Add new card to deck')
  addCardToDeck = (deckId, card) => {
    const { cards, key, name } = this.decks.get(deckId);
    this.decks.set(
      deckId,
      {
        cards: [...cards, card],
        key,
        name,
      },
    );
  }

  @action('Add new deck')
  addDeck = (key, deck) => {
    this.decks.set(key, deck);
  }
}

const deckStore = new DeckStore();

export default deckStore;
