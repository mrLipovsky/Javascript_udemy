'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number ';

// console.log(document.querySelector('.message').textContent);


// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 100;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const secretNo = Math.trunc(Math.random() * 20) + 1;
const score = 20;
document.querySelector('.number').textContent = secretNo;


document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value); 
    console.log(guess, typeof guess); 

    if(!guess) {
    document.querySelector('.message').textContent = 'No Number ';
    } else if (guess === secretNo) {
        document.querySelector('.message').textContent = 'Correct number ';
    } else if (guess > secretNo) {
        document.querySelector('.message').textContent = 'Number too high!';
        Scoreboard ;
        document.querySelector('.score').textContent = score;

    } else if (guess < secretNo) {
        document.querySelector('.message').textContent = 'Number too low!'; 
        score--;
        document.querySelector('.score').textContent = score;
    }
});
 