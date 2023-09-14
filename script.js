'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;


let inputVal = document.querySelector('.guess').value;
console.log(inputVal);
*/

let secretNum = Math.ceil(Math.random() * 20);
let score = 20;
let highscore = 0;

const displayMessage = function (msg) {
  document.querySelector('.message').textContent = msg;
};

const decScore = function () {
  score--;
  document.querySelector('.score').textContent = score;
  if (score === 0) {
    displayMessage('💥 Game Over!');
  }
};

const checkValue = function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no guess or guess is 0
  if (!guess) {
    displayMessage('🚫 No guess inputted!');

    // when guess is over 20
  } else if (guess > 20) {
    displayMessage('🚫 Guess must be between 1 and 20');

    // when guess is correct
  } else if (guess === secretNum) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNum;

    document.querySelector('body').style.backgroundColor = '#60B347';
    document.querySelector('.number').style.width = '30rem';

    if (highscore < guess) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when guess is too high
  } else if (guess > secretNum) {
    displayMessage('📈 Too High!');
    decScore();

    // when guess is too low
  } else {
    displayMessage('📉 Too Low!');
    decScore();
  }
};

const restore = function () {
  score = 20;
  secretNum = Math.ceil(Math.random() * 20);
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};

document.querySelector('.check').addEventListener('click', checkValue);
document.querySelector('.again').addEventListener('click', restore);
