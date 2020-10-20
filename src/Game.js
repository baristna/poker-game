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
  deal() {
    this.Deck.shuffle()
    this.players[0].giveCard(this.Deck.takeACard())
    console.log(this.players[0].getCards())
  } 
  render() {
    // Create Table
    let tableTemplate = document.getElementById("table-temp").innerHTML;
    let tableEl = document.getElementById('table');
    tableEl.innerHTML = tableTemplate;
    document.getElementById('app').appendChild(tableEl);

    // Render Players
    this.players.forEach((player, index) => {
      let template = document.getElementById("player-temp").innerHTML;

      for (var key in player) {
        template = template.replace (new RegExp("{"+key+"}", 'g'), player[key]);
      }

      let el = document.createElement('div');
      el.classList.add('player');
      el.innerHTML = template;
      const target = index === 1 ? 'table-left' : (index === 2 ? 'table-right' : 'table-top');
      document.getElementById(target).appendChild(el);

      // Render cards
      player.getCards().forEach(cardData => {
        let card = document.createElement('div');
        card.classList.add('card');
        el.appendChild(card)
      })
    })
  }
}

export default Game
