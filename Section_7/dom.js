'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number ';

// console.log(document.querySelector('.message').textContent);


// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 100;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNo = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message
}

    // reset button
    document.querySelector('.again').addEventListener('click', function() {
            console.log('again')
            let secretNo = Math.trunc(Math.random() * 20) + 1;
            let score = 20;
            let guess = Number(document.querySelector('.guess').value = null); 
            document.querySelector('.message').textContent = 'Start guessing...';
            document.querySelector('.number').textContent = '?';
            document.querySelector('body').style.backgroundColor = '#222';
            document.querySelector('.number').style.width = '15rem';
            document.querySelector('.score').textContent = score;
    })

    document.querySelector('.check').addEventListener('click', function() {
        const guess = Number(document.querySelector('.guess').value); 
  
    //when there is not imput
    if(!guess) {
    document.querySelector('.message').textContent = 'No Number';
    
    //when player wins
    } else if (guess === secretNo) {
        // document.querySelector('.message').textContent = 'Correct number';
        displayMessage('Correct number');
        document.querySelector('.number').textContent = secretNo;
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highScore').textContent = highScore;
        }

    //when player lose
    } else if(guess !== secretNo) {
        if(score > 1) {
            document.querySelector('.message').textContent = guess > secretNo ? 'Number too high!': 'Number too low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game';
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = 'red';
        }
    }
    
    
    // //when number is higher than
    // else if (guess > secretNo) {
    //     if(score > 1) {
    //         document.querySelector('.message').textContent = 'Number too high!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You lost the game';
    //         document.querySelector('.score').textContent = 0;
    //         document.querySelector('body').style.backgroundColor = 'red';
    //     }

    // //when number is smaller than
    // } else if (guess < secretNo) {
    //     if(score > 1) {
    //         document.querySelector('.message').textContent = 'Number too low!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You lost the game';
    //         document.querySelector('.score').textContent = 0;
    //         document.querySelector('body').style.backgroundColor = 'red';
    //     }
    // }
});
 
// Coding Challenge #1
// Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:
// 1. Select the element with the 'again' class and attach a click event handler 
// 2. In the handler function, restore initial values of the 'score' and 'secretNumber' variables
// 3. Restore the initial conditions of the message, number, score and guess input fields
// 4. Also restore the original background color(#222) and number width(15rem)
// GOOD LUCK 😀