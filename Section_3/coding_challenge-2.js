// Coding Challenge #2


// Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100
// 2. And now let' s use arrays! So create an array 'bills' containing the test data below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before
// 4. Bonus: Create an array 'total' containing the total values,so the bill+tip Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉
// GOOD LUCK 😀

bills = [125, 555, 44]

function calcTip(value) {
if (value > 50 && value < 300) {
    let tip15 = (value * 1.15) - value
    return tip15 
    // = `Price is ${value}. Price with tip 15% is ${value * 1.15}. Tip is: ${tip15}`
    //console.log(`Price is ${value}. Price with tip 15% is ${value * 1.15}. Tip is: ${tip15}`;
} else {
    let tip20 = (value * 1.20) - value
    return tip20 
    // = `Price is ${value}. Price with tip 20% is ${value * 1.20}. Tip is: ${tip20}`
    //console.log(`Price is ${value}. Price with tip 20% is ${value * 1.20}. Tip is: ${tip20}`);
    }
}

const value1 = calcTip(bills[0])
const value2 = calcTip(bills[1])
const value3 = calcTip(bills[2])

// console.log(value)
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// const tips = [calcTip(bills[0], calcTip(bills[1]), calcTip(bills[2])];
console.log(tips); 

const totals = [tips[0]+bills[0], value2+bills[1], value3+bills[2]]
console.log(totals); 

// const tip = tips.push(tip15);

// bills = [125, 555, 44]
