const types = [
  { type: 'Club', unicode: '♣', color: '#111111' },
  { type: 'Diamond', unicode: '♦', color: '#B01E1E' },
  { type: 'Spade', unicode: '♠', color: '#111111' },
  { type: 'Heart', unicode: '♥', color: '#B01E1E' }
];

const numbers = [
  { name: 'Ace', alias: 'A', number: 1 },
  { name: '2', alias: '2', number: 2 },
  { name: '3', alias: '3', number: 3 },
  { name: '4', alias: '4', number: 4 },
  { name: '5', alias: '5', number: 5 },
  { name: '6', alias: '6', number: 6 },
  { name: '7', alias: '7', number: 7 },
  { name: '8', alias: '8', number: 8 },
  { name: '9', alias: '9', number: 9 },
  { name: '10', alias: '10', number: 10 },
  { name: 'Jack', alias: 'J', number: 11 },
  { name: 'Queen', alias: 'Q', number: 12 },
  { name: 'King', alias: 'K', number: 13 },
]

const newDeck = [];

types.forEach(type => {
  numbers.forEach(number => {
    newDeck.push({
      ...type,
      ...number
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
