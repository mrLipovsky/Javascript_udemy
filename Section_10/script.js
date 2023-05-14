'use strict';

// const bookings = [];

// const createBooking = function(
//     flightNum, 
//     numPassengers = 1, 
//     price = 190 * numPassengers
//     ) {
//     // numPassengers = numPassengers || 1;
//     // price = price || 190;

//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     }

//     console.log(booking)
//     bookings.push(booking)
// }

// createBooking('LM123');
// createBooking('LM123', 2, 800);
// createBooking('LM123', 5);
// createBooking('LM123', 2);
// createBooking('LM123', undefined, 2);

/////////////////


// const flight = 'LM234';
// const jonas = {
//     name: 'John  Smith',
//     password: 23344566
// }

// const checkIn = function(flightNum, passanger) {
//     flightNum = 'LM999';
//     passanger.name = 'Mr. ' + passanger.name;

//     if(passanger.password === 23344566) {
//      alert('Checked in')
//     } else {
//         alert('Wrong passanger')
//     }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const flightNum = flight;
// const passanger = jonas;

// const newPassword = function(person) {
//     person.passport = Math.trunc(Math.random() * 10000000000);
// };

// newPassword(jonas);
// checkIn(flight, jonas);

/////////////////

const oneWord = function(str) {
    return str.replace(/ /g, ' ').toLowerCase();
}

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ')
}

//Higher-order function
const transformer = function(str, fn) {
    console.log(`Original transformed string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);


}
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

//call back all the time
const high5 = function() {
    console.log(`High five!`);
}
document.body.addEventListener('click', high5);

['Jonas', 'Marta', 'Adam'].forEach(high5);