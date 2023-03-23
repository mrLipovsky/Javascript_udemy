
// // var weight = 78;
// // var height = 1.96;

// function calculateBmi(weight, height){
//     return weight / height ** 2;
// }

// const resultMark = calculateBmi(89,187);
// const resultJohn = calculateBmi(92,195);

// console.log(resultMark);
// console.log(resultJohn);


// const t = [1, 2, 3]

// const m1 = t.map(value => value * 2)
// console.log(m1)   // [2, 4, 6] is printed


// const m2 = t.map(value => '<li>' + value + '</li>')
// console.log(m2)  
// // [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ] is printed

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1986;
const d = new Date();
let year = d.getFullYear();

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + ' !';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!` ;
console.log(jonasNew);
console.log('just a regular string');
console.log('string with \n\
multiple \n\
lines');

console.log(`string with 
multiple 
lines`);