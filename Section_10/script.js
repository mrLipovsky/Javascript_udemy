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
// const transformer = function(str, fn) {
//     console.log(`Original transformed string: ${str}`);
//     console.log(`Transformed string: ${fn(str)}`);

//     console.log(`Transformed by: ${fn.name}`);
// }

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// //Call-back all the time
// const high5 = function() {
//     console.log(`High five!`);
// }
// document.body.addEventListener('click', high5);

// ['Jonas', 'Marta', 'Adam'].forEach(high5);

//returning functions
// const greet = function(greeting) {
//     return function(name) {
//         console.log(`${greeting} ${name}`);
//     };
// };

// const greeterHey = greet('Hello');
// greeterHey('Jonas');
// greeterHey('Steven');

// greet('Hi')('Jonas');

//arrow functions
// const greet = greeting => name => {
//         console.log(`${greeting} ${name}`);
//     };

// const greeterHey = greet('Hello');
// greeterHey('Jonas');
// greeterHey('Steven');

// greet('Hi')('Jonas');

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LM',
    bookings: [],
    // book: function() {},
    book(flightNum, name){
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
    },
};

// lufthansa.book(239, 'Jonas Schmedthan');
// lufthansa.book(659, 'Jonas Smith');
// console.log(lufthansa)


// const eurowings = {
//     airline: 'Eurowings',
//     iataCode: 'EW',
//     bookings: [],
//     // book: function() {},
// }
// const book = lufthansa.book;

// // book(23, 'Sarah Williams'); does not work
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings)

// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa)

// const swiss = {
//     airline: 'Swiss air Lines',
//     iataCode: 'LX',
//     bookings: [],
//     // book: function() {},
// }

// book.call(swiss, 465, 'Peter Martin')
// console.log(swiss)

// //Apply method
// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss)

// //same as apply method
// book.call(swiss, ...flightData);

//Bind method
// const bookEW = book.blind(eurowings);
// const bookLH = book.blind(lufthansa);
// const bookLX = book.blind(swiss);

// bookEW(23, 'Steven Williams');

// const bookEW23 = book.blind(eurowings, 23);
// bookEW23('Jonas Schmedman');
// bookEW23('Marta Cooper');

// // with event listener
// lufthansa.planes = 300;
// lufthansa.buyPlane = function() {
//     console.log(this);

//     this.planes++
//     console.log(this.planes);
// }
// // lufthansa.buyPlane();

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// partial aplication
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// // addVAT = value => value + value * 0.23;

// console.log(addVAT(100))
// console.log(addVAT(23))


// const addTaxRate = function(rate) {
//     return function(value) {
//         return value + value * rate
//     }
// }
// const addVAT2 = addTaxRate(0.23)
// console.log(addVAT2(100));
// console.log(addVAT2(23));

// =========
// inmmediately invoke unction expresion 
// =========

// const runOnce = function(){
//     console.log('this will never run again')
// };

// runOnce();

// // Function expretion
// (function() {
//     console.log('this will never run again')
//     const isPrivate = 2;
// })();

// console.log(isPrivate)

// (() => console.log('this will never run again'))();

// {
//     const isPrivate = 23;
//     var notPrivate = 12;
// }
// console.log(isPrivate)
// console.log(notPrivate)

// =========
// Clousers
// =========

// const secureBooking = function(){
//     let passangerCount = 0;

//     return function() {
//         passangerCount++;
//         console.log(`${passangerCount} passanger`)
//     }
// }

// // booker is function that return function secureBooking
// const booker = secureBooking();

// booker();
// booker();
// booker();

// console.dir(booker);

// example one 
let f;
const g = function(){
    const a = 23;
    f = function(){
        console.log(a * 2)
    };
}
console.dir(g);


const h = function(){
    const b = 277;
    f = function(){
        console.log(b * 2)
    };
}
g();
f();
console.dir(f);

h();
f();
console.dir(f);

// example two
const boardPassangers = function(n, wait) {
    const perGroup = n / 3;

    setTimeout(function(){
        console.log(`we are now boarding all ${n} passangers`);
        console.log(`there are 3 groups, each with ${perGroup} passangers`);
    }, wait * 1000)

    console.log(`Will start boarding in ${wait} second`);
};

const perGroup = 1000;
boardPassangers(100, 3);
