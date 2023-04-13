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
function calcAge1(birthYear) {
    const age1 = 2037 - birthYear;
    return age1;
}
calcAge1(1991)

function calcAge2(birthYear) {
    return 2037 - birthYear;
}
calcAge2(1992)
const age2 = calcAge2(1991);
console.log(age2);

//function expression
const calcAge3 = function (birthYear) {
    return 2037 - birthYear;
}
const age3 = calcAge3(1991)

console.log(age1, age2, age3)

//arrow functions
const calcAge4 = birthYear => 2037 - birthYear;


///////////////////////////////
const calcAge = function (Year) {
    return 2023 - Year;
}

const yearUntilRetaiement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0){
        return `${firstName} retires in ${retirement} years`;
        return retirement;
    } else {
        return `${firstName} has retired`;
        return -1;
    }

}

console.log(yearUntilRetaiement(1991, 'Jonas'));
console.log(yearUntilRetaiement(1991, 'Mike'));
