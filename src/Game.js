import Deck from './Deck';

const STATE = {
  0: 'IDLE',
  1: 'SHUFFLE',
  2: 'PRE_FLOP',
  3: 'THE_FLOP',
  4: 'THE_TURN',
  5: 'THE_RIVER',
  6: 'END_ROUND'
}

class Game {
  constructor({ players }) {
    this.state = 0;
    this.players = players;
    this.Deck = new Deck();
    this.waitingRoom = [];
  }
  start() {
    this.state = 1;
  }
  addPlayer(newPlayer) {
    this.waitingRoom.push(newPlayer);
  }
  acceptNewPlayers() {
    this.players = [
      ...this.players,
      ...this.waitingRoom
    ]
    this.waitingRoom = []
  }
  getState() {
    return STATE[this.state];
  }
  getPlayers() {
    return this.players;
  }
  getDeck() {
    return this.Deck.getDeck();
  }
  getWaitinRoom() {
    return this.waitingRoom;
  }
}

export default Game
