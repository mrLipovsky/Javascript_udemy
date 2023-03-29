// const day = 'monday';

// switch(day) {
//     case 'monday':
//         console.log('plan course structure');
//         console.log('Go to coding meetup'); 
//         break;
//     case 'tuesday':
//         console.log('prepare the code');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('write code example');
//         break;
//     case 'friday':
//         console.log('dring beer');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('enjoy weekend');
//         break;
//     default:
//         console.log('nor a valid day!');
// }

// if (day === 'monday'){
//     console.log('plan course structure');
//     console.log('Go to coding meetup'); 
// } else if (day === 'tuesday'){
//         console.log('prepare the code');
// } else if (day === 'wednesday'|| day === 'thursday'){
//     console.log('write code example');
// } else if (day === 'friday'){
//     console.log('dring beer');
// } else if (day === 'saturday'|| day === 'sunday'){
//     console.log('enjoy weekend');
// } else {
//     console.log('nor a valid day!');
// }

//conditional /operator / value
const age = 23;
age >= 18 ? console.log('I like to dring beer') : console.log('I like to dring water')

const drink = age >= 18 ? 'beer' : 'water';
console.log(drink);

let drink2; 
if(age >= 18){
    drink2 = 'beer'
} else {
    drink2 = 'water'
}
console.log(drink2);

console.log(`I like to drik ${age >= 18 ? 'beer' : 'water'}`);
