// Coding Challenge #2
// This is more of a thinking challenge than a coding challenge 🤓 Your tasks:
// 1. Take the IIFE below and at the end of the function, attach an eventlistener that changes the color of the selected h1 element ('header') to blue, each time the body element is clicked. Do not select the h1 element again!
// 2. Andnowexplaintoyourself(orsomeonearoundyou)whythisworked!Takeall the time you need. Think about when exactly the callback function is executed, and what that means for the variables involved in this example.


(function () {
const header = document.querySelector('h1'); 
header.style.color = 'red';

let header1 = function(){
document.addEventListener('click', 
header1.style.color = 'blue'
)
};

})();

header1();


