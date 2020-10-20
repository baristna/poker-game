import '../styles/index.scss';
import Game from './Game';
import render from './render';
const game = new Game();

const btnHigher = document.getElementById('btn-higher');
const btnLower = document.getElementById('btn-lower');

btnHigher.onclick = () => {
  game.guess(true);
  render(game)
}

btnLower.onclick = () => {
  game.guess(false);
  render(game)
}

game.start()
render(game)
