import '../styles/index.scss';
import Game from './Game';
import Player from './Player';

const controlDeal = document.getElementById('control-deal');

const game = new Game({
  players: [
    new Player('Morpheus', 1000, '/images/morpheus.jpg'),
    new Player('Trinity', 1200, '/images/tri.jpg'),
    new Player('Seraph', 1500, '/images/seraph.jpg')
  ]
});

game.start();
game.addPlayer()
game.render()

controlDeal.onclick = function() {
  game.deal()
  console.log(game.getDeck())
  game.render()
}
