// 5 falsy values 0, '', udefined, null, NaN


console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean('Jonas')); //true
console.log(Boolean('')); //false
console.log(Boolean({})); //true

//values 0
const money = 0;
if(money) {
    console.log("Dont spen it all")
} else {
    console.log("Get a job")
}

//udefined
let height
if(height) {
    console.log("yes height is defined")
} else {
    console.log("height is UNDEFINEDD")
}

// Operators
// = asigmnt 
// === strict equility - obe musia by5 spravne
// const age = 18;
// if (age === 18) console.log("you just become an adult (strict)");
// if (age == 18) console.log("you just become an adult (loose)");

// '18' == 18 //true
// '18' === 18 //false

// const favorite = prompt("What is your faorite number?"); //print popup window and can add number
// console.log(favorite);
// console.log( typeof favorite);

// if (favorite == 23) { // '23' == 23 true
//     console.log("23 is amazing number");
// }
// if (favorite === 23) { // '23' === 23 false
//     console.log("23 is amazing number");
// } else if (favorite === 7) {
//     console.log("7 is amazing number");
// } else if (favorite === 9) {
//     console.log("9 is amazing number");
// } else (favorite === 7) {
//     console.log("7 23 is not the number");
// }

// if(favorite !== 23) console.log('why not 23');

const hasDriveLicense = true;
const hasGoodVision = false;

console.log(hasDriveLicense && hasGoodVision); // AND
console.log(hasDriveLicense || hasGoodVision); // OR
console.log(!hasDriveLicense); // NOT !

const shouldDrive = hasDriveLicense && hasGoodVision;

if (shouldDrive) {
    console.log('Sarah has driveLicense');
} else {
    console.log('Somone else has driveLicense');
}

const isTired = true;
console.log(hasDriveLicense || hasGoodVision || isTired); 
console.log(hasDriveLicense && hasGoodVision && isTired); 

if (hasDriveLicense && hasGoodVision && !isTired) {
    console.log('Somone has driveLicense');
} else {
    console.log('Somone else has driveLicense');
}
