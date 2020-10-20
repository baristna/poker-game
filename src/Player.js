class Player {
  constructor(name, balance, avatar) {
    this.name = name
    this.balance = balance
    this.avatar = avatar
    this.cards = []
  }
  giveCard(card) {
    this.cards.push(card)
  }
  getCards() {
    return this.cards
  }
}

export default Player
