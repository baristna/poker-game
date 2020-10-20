const types = [
  { name: 'Club', unicode: '♣', pos: 3},
  { name: 'Diamond', unicode: '♦', pos: 2},
  { name: 'Spade', unicode: '♠', pos: 4 },
  { name: 'Heart', unicode: '♥', pos: 1 }
];

const numbers = [
  { name: 'Ace', alias: 'A', number: 1, pos: 13 },
  { name: '2', alias: '2', number: 2, pos: 1 },
  { name: '3', alias: '3', number: 3, pos: 2 },
  { name: '4', alias: '4', number: 4, pos: 3 },
  { name: '5', alias: '5', number: 5, pos: 4 },
  { name: '6', alias: '6', number: 6, pos: 5 },
  { name: '7', alias: '7', number: 7, pos: 6 },
  { name: '8', alias: '8', number: 8, pos: 7 },
  { name: '9', alias: '9', number: 9, pos: 8 },
  { name: '10', alias: '10', number: 10, pos: 9 },
  { name: 'Jack', alias: 'J', number: 11, pos: 10 },
  { name: 'Queen', alias: 'Q', number: 12, pos: 11 },
  { name: 'King', alias: 'K', number: 13, pos: 12 },
]

const newDeck = [];

types.forEach(ty => {
  numbers.forEach(nm => {
    newDeck.push({
      type: ty,
      number: nm
    })
  })
})

class Deck {
  constructor() {
    this.deck = newDeck;
  }
  getDeck() {
    return this.deck;
  }
  takeACard() {
    return this.deck.pop()
  }
  shuffle() {
    /**
     * Fisher-Yates Shuffle Algorithm
     * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
     */
    for (let i = this.deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
    }
}
}

export default Deck
