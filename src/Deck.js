const types = [
  { name: 'Club', unicode: '♣' },
  { name: 'Diamond', unicode: '♦'},
  { name: 'Spade', unicode: '♠' },
  { name: 'Heart', unicode: '♥' }
];

const numbers = [
  { name: 'Ace', alias: 'A', number: 1 },
  { number: 2 },
  { number: 3 },
  { number: 4 },
  { number: 5 },
  { number: 6 },
  { number: 7 },
  { number: 8 },
  { number: 9 },
  { number: 10 },
  { name: 'Jack', alias: 'J', number: 11 },
  { name: 'Queen', alias: 'Q', number: 12 },
  { name: 'King', alias: 'K', number: 13 },
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
}

export default Deck
