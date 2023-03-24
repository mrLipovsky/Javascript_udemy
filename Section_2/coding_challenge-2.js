
// Coding Challenge #1


// var weight = 78;
// var height = 1.96;

function calculateBmi(weight, height){
    return weight / height ** 2;
}

const resultMark = calculateBmi(20,187);
const resultJohn = calculateBmi(180,195);

console.log(resultMark);
console.log(resultJohn);

// Coding Challenge #2 

// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement

function diferenceBmi(resultMark, resultJohn) {
  if(resultJohn < resultMark){
    console.log(`Marks BMI: ${resultMark} is biger then Johns BMI: ${resultJohn}`);
   } 
  else if (resultJohn > resultMark) {
    console.log(`Marks BMI: ${resultMark} is lover then Johns BMI: ${resultJohn}`);
  } 
  else {
    console.log(`Marks BMI: ${resultMark} is equale then Johns BMI: ${resultJohn}`);
  }
}

console.log(diferenceBmi(resultMark, resultJohn));