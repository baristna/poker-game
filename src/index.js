import '../styles/index.scss';
import Game from './Game';
import render from './render';
const game = new Game();

const btnHigher = document.getElementById('btn-higher');
const btnLower = document.getElementById('btn-lower');
const btnNewGame = document.getElementById('new-game');
const btnOpenRules = document.getElementById('open-rules');
const btnRules = document.getElementById('rules');

const closeRules = () => {
}

btnHigher.onclick = () => {
  game.guess(true);
  render(game)
}

btnLower.onclick = () => {
  game.guess(false);
  render(game)
}

btnNewGame.onclick = () => {
  game.start();
  render(game)
}

btnRules.onclick = () => { 
  game.setRules(false)
  render(game, true)
}

btnOpenRules.onclick = () => {
  game.setRules(true)
  render(game, true)
}

game.start()
render(game)
