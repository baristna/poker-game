import Game from './Game';
import Player from './Player';

const game = new Game({
  players: [
    new Player('P1', 1000),
    new Player('P2', 1200),
    new Player('P3', 1500)
  ]
});

game.start();
console.log(game.getDeck())
console.log(game.getPlayers())
game.addPlayer(new Player('P4', 800))
console.log(game.getPlayers())
console.log(game.acceptNewPlayers())
console.log(game.getPlayers())
console.log(game.getWaitinRoom())
