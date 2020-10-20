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
    this.fresh = true;
    this.highScore = 0;
    this.rules = true;
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
  getHighScore() {
    return this.highScore;
  }
  getRules() {
    return this.rules;
  }
  setRules(state) {
    this.rules = state;
  }
  isGameEnd() {
    return this.end;
  }
  isFresh() {
    return this.fresh;
  }
  start() {
    this.end = false;
    this.Deck.shuffle();
    this.currentCard = null;
    this.newCard = null;
    this.fresh = true;
    this.lives = 3;
    this.streak = 0;
    this.score = 0;
    this.newCard = this.Deck.takeACard()
  }
  guess(higher) {
    this.fresh = false;
    this.currentCard = this.newCard;
    this.newCard = this.Deck.takeACard()

    if ((this.currentCard.number <= this.newCard.number) === higher) {
      this.streak++;
      this.score += this.streak;

      if (this.streak >= 5 && this.lives < 3) {
        this.streak = this.streak - 5;
        this.lives++
      }
    } else {
      if (this.lives === 0 && this.streak < 5) {
        this.endGame()
      } else {
        if (this.streak < 5) {
          this.lives--;
        }
        
        this.streak = 0;
      }
    }

    if (this.getDeck().length === 0) {
      this.endGame()
    }
  }
  endGame() {
    this.end = true;

    if (this.score > this.highScore) {
      this.highScore = this.score;
    }
  }
}

export default Game
