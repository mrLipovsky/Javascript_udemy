// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log('I can drive');

// //we can not use variable like this naming in the strict mode
// const interface = 'Audio';
// const private = 534;
// const if = 23;


// function logger() {
//     console.log("my name is Peter");
// }

// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
// }

///
//function declarations
// function calcAge1(birthYear) {
//     const age1 = 2037 - birthYear;
//     return age1;
// }
// calcAge1(1991)

// function calcAge2(birthYear) {
//     return 2037 - birthYear;
// }
// calcAge2(1992)
// const age2 = calcAge2(1991);
// console.log(age2);

// //function expression
// const calcAge3 = function (birthYear) {
//     return 2037 - birthYear;
// }
// const age3 = calcAge3(1991)

// console.log(age1, age2, age3)

// //arrow functions
// const calcAge4 = birthYear => 2037 - birthYear;


// ///////////////////////////////
// const calcAge = function (Year) {
//     return 2023 - Year;
// }

// const yearUntilRetaiement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if(retirement > 0){
//         return `${firstName} retires in ${retirement} years`;
//         return retirement;
//     } else {
//         return `${firstName} has retired`;
//         return -1;
//     }

// }

// console.log(yearUntilRetaiement(1991, 'Jonas'));
// console.log(yearUntilRetaiement(1991, 'Mike'));

/////////////////////////////
// ARRAY []
/////////////////////////////

// const friend1 = 'Michal';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michal', 'Mike', 'Peter']

// console.log(friends);

// // const years = new Array(1994, 1995, 1996, 1997, 1998);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay'
// console.log(friends);

// const name = 'John';
// const test = [name, 'Jay', 2-1, 'teacher', friends];
// console.log(test)
// console.log(test.length);


// const calcAge = function (birthYear) {
//     return 2377 - birthYear;
// }
// const years = [1955, 1976, 1977, 1987];

// // console.log(calcAge(years));
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[2]), calcAge(years[years.length -1 ])];

//Add
// const friends = ['Michal', 'Mike', 'Peter'];
// const newLenght = friends.push('Jay'); // add to end of list
// console.log(friends);
// console.log(newLenght);

// friends.unshift('John'); // add to beggining list
// console.log(friends);

// //Remove
// friends.pop(); // remove last
// const popped = friends.pop(); // just log the popped value 
// console.log(popped); 
// console.log(friends);

// friends.shift(); // remove first
// console.log(friends);

// console.log(friends.indexOf('Mike')); // index 
// console.log(friends.indexOf('bob')); // is not in array will be -1

// friends.push(23);

// console.log(friends.includes('Mike')); // check if is in array True
// console.log(friends.includes('Bob')); // check if is in array False
// console.log(friends.includes('23')); // check number and we looking for string is in array False, if looking for number - True


// if (friends.includes('Peter')) {
//     console.log('Your firend is call Peter')
// }


/////////////////////////////
// OBJECT {}
/////////////////////////////

// const jonas = {
//     firstName: 'John',
//     lastName: 'Lipo',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['John', 'Peter', 'Michal']
// };

// console.log(jonas);

// console.log(jonas.firstName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';

// console.log(jonas['first'+ nameKey]); // John
// console.log(jonas['last'+ nameKey]); // Lipo

// console.log(jonas.'last'+ nameKey); // does not work

// const interestedIn = prompt('What do you think about John. fistName, lastName, age, job, friends')

// console.log(jonas.interestedIn); // does not work

// if(jonas[interestedIn]){
//     console.log(jonas[interestedIn]); // if job than teacher
// } else {
// console.log('wrong request, '); //
// }

// jonas.location = 'Portugal';
// jonas['twiter'] = '@jonasschmedatman';
// console.log(jonas);

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends: ${jonas.friends} and his best friend is ${jonas.friends[2]}`)

/////////////////////////////
// OBJECT METODES {}
/////////////////////////////
// const jonas = {
//     firstName: 'John',
//     lastName: 'Lipo',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['John', 'Peter', 'Michal'],
//     hasDriveLicense: false,

    // calcAge: function(birthYear){
    // return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     // console.log(this);
    //     return 2037 - this.birthYear;
    // }

    // calcAge: function () {
    //     this.age = this.birthYear;
    //     return this.age;
    // },

    // getSummary: function() { 
    //     if (this.hasDriveLicense == true) {
    //     return `${this.firstName} is a ${this.calcAge()} old ${this.job} and he has drivelicense`
    // } else {
    //     return `${this.firstName} is a ${this.year} old ${this.job} and he has not drivelicense`
    // } 
    // }

    // getSummary: function() { 
//         return `${this.firstName} is a ${this.calcAge()} old ${this.job} and he has ${this.hasDriveLicense ? 'a' : 'no'} drivers license`
//     } 

// };
// console.log(jonas.calcAge());
// console.log(jonas.calcAge());

// console.log(jonas.age);
// console.log(jonas.getSummary());
// console.log(jonas['calcAge']());

// let getSummary = Object.create(jonas, {

// });


// //////////////////////////////
// FOR LOOP
// //////////////////////////////

// console.log('ligftweith repetition 1')
// console.log('ligftweith repetition 2')

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`ligftweith repetition ${rep}`);
// }

// const jonasArray = [
//     'Jonas',
//     'Schmedmann',
//     2037-1991,
//     'teacher',
//     ['Michal', 'Peter', 'Steven']
// ];

// const types = [];

// for (let i = 0; i < jonasArray.length; i++) {
//     console.log(jonasArray[i], typeof jonasArray[i]);

//     types[i] = typeof jonasArray[i];
//     types.push(typeof jonasArray[i]);
// }
// console.log(types)


// const years = [1991, 2007, 1696, 2003];
// const ages = []

// for (let index = 0; index < years.length; index++) {
//     ages.push(3037 - years[index]);
// }

// console.log(ages)

// // continue and break statement of for loop
// console.log('continue strings only')
// for (let i = 0; i < jonasArray.length; i++) {
//     if(typeof jonasArray[i] !== 'string') continue;

//     console.log(jonasArray[i], typeof jonasArray[i]);
// }

// console.log('break with number')
// for (let i = 0; i < jonasArray.length; i++) {
//     if(typeof jonasArray[i] !== 'number') break;

//     console.log(jonasArray[i], typeof jonasArray[i]);
// }

// const jonasArray = [
//     'Jonas',
//     'Schmedmann',
//     2037-1991,
//     'teacher',
//     true
// ];

// for (let i = jonasArray.length - 1; i >= 0; i--) {
//     console.log(i, jonasArray[i])
// }

// for (let index = 1; index <= 4; index++) {
//     const exercise = index;
//     console.log(` ------- Starting excercise ${exercise} `);
    
//     for (let index = 1; index < 6; index++) {
//         const rep = index;
//         console.log(`Excercise ${exercise} Lifting weight repetition ${rep} `);
        
//     }
// }

const names = ['Ed', 'John', 'Maria', 'Elisa', 'Burito', 'Harry', 'Potter'];

for (name of names) {
    console.log(`${name}`);
    if (name === 'Maria') {
        console.log(`Hello there ${name}`);
    break;
    }
}

const arr = ['bager', 'name', 'babon']

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(`${element}`);
}

for (const e of arr) {
    console.log(`${e}`);
}



// //////////////////////////////
// FOR WHILE
// //////////////////////////////


// let repe = 1;
// while (repe <= 10) {
//     console.log(`Lifting weight repetition ${repe}`)    
//     repe++;
// }

// // let number = 0;
// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//     console.log(`Dice number is ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log('Loop is about to end...');
// }

let loading = 0;

while (loading < 100) {
    console.log('website is loading...');
    loading++;
}