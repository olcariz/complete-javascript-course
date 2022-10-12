'use strict';

// Il faut créer un nombre aléatoire au début du jeu
// enregistrer un evenement sur check
// si check !== num && score > 0 => set message low or high, decrement score
// si score === 0 => set message fail
// si check === num, set message win, set highscore, show number in box and set background color green

let score = Number(document.querySelector('.score').textContent);
let highscore = Number(document.querySelector('.highscore').textContent);
let number = initNumber(score);

function initNumber() {
  return Math.ceil(Math.random() * score);
}

function checkNumber() {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) document.querySelector('.message').textContent = 'No number!';
  else if (guess !== number && score > 0) {
    document.querySelector('.message').textContent =
      guess > number ? 'too high!' : 'too low!';
    document.querySelector('.score').textContent = --score;
  } else if (score === 0) {
    document.querySelector('.message').textContent = 'Game Over!';
  } else if (guess === number) {
    document.querySelector('.message').textContent = 'You won!';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    document.querySelector('.number').textContent = number;
    document.querySelector('.number').style.width = '30rem';
    document.body.style.backgroundColor = '#60b347';
  }
}

function again() {
  number = initNumber();
  document.body.style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = 0;
}

document.querySelector('.check').addEventListener('click', checkNumber);
document.querySelector('.again').addEventListener('click', again);
