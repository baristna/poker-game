import Deck from './Deck';

class Game {
  constructor() {
    this.Deck = new Deck();
    this.currentCard = null;
    this.newCard = null;
    this.lives = 3;
    this.streak = 0;
    this.end = false;
    this.score = 0;
  }
  getDeck() {
    return this.Deck.getDeck();
  }
  getCurrentCard() {
    return this.currentCard;
  }
  getNewCard() {
    return this.newCard;
  }
  getLives() {
    return this.lives;
  }
  getStreak() {
    return this.streak;
  }
  getScore() {
    return this.score;
  }
  start() {
    this.lives = 3;
    this.streak = 0;
    this.score = 0;
    this.Deck.shuffle()
    this.newCard = this.Deck.takeACard()
  }
  guess(higher) {
    this.currentCard = this.newCard;
    this.newCard = this.Deck.takeACard()

    if ((this.currentCard.number < this.newCard.number) === higher) {
      this.streak++;
      this.score += this.streak;

      if (this.streak === 5) {
        this.streak = 0;
        
        if (this.lives < 3) {
          this.lives++
        }
      }
    } else {
      if (this.lives === 0) {
        this.endGame()
      } else {
        this.lives--;
        this.streak = 0;
      }
    }

    console.log('lives:' + this.lives + ', streak:' + this.streak);
  }
  endGame() { this.end = true }
}

export default Game
