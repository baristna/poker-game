const render = (game) => {
  // Render Card
  var x = document.getElementsByClassName('card');
  for (var i = 0; i < x.length; i++) {
    x[i].classList.add('prev');
  }
  
  document.getElementById('left').innerHTML = game.getDeck().length;

  const currentCard = game.getNewCard();
  let cardTemplate = document.getElementById("card-temp").innerHTML;

  let el = document.createElement('div');
  el.classList.add('card');
  el.style.color = currentCard.color;

  for (var key in currentCard) {
    cardTemplate = cardTemplate.replace (new RegExp("{"+key+"}", 'g'), currentCard[key]);
  }

  el.innerHTML = cardTemplate;
  document.getElementById('card-wrapper').appendChild(el);

  // Render Lives
  const livesEl = document.getElementById('lives')
  livesEl.innerHTML = '';
  for (let i = 0; i < 3; i++) {
    let heartEl = document.createElement('div');

    if (i < game.getLives()) {
      heartEl.style.color = '#B01E1E'
    }
    heartEl.innerHTML = '♥'
    livesEl.appendChild(heartEl)
  }

  // Render Score
  document.getElementById('score').innerHTML = game.getScore();
}

export default render;