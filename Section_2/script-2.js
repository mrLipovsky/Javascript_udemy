// const t = [1, 2, 3]

// const m1 = t.map(value => value * 2)
// console.log(m1)   // [2, 4, 6] is printed


// const m2 = t.map(value => '<li>' + value + '</li>')
// console.log(m2)  
// // [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ] is printed

// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1986;
// const d = new Date();
// let year = d.getFullYear();

// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + ' !';
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!` ;
// console.log(jonasNew);
// console.log('just a regular string');
// console.log('string with \n\
// multiple \n\
// lines');

// console.log(`string with 
// multiple 
// lines`);

const age = 15;
const isOldEnought = age >= 18;

// if (isOldEnought) {
//     console.log('Sara can start licence licence');
// } else {
//     console.log('Sara can not start licence licence');
// }

if (age >= 18) {
  console.log('Sara can start licence licence');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sara can not start licence, she needs to wait another ${yearsLeft} years`);
}

const birthYear = 1991;

let century;
if (birthYear <= 2000 ){
  century = 20;
} else {
  century = 21;
}
console.log(century);