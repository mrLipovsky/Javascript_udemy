// Coding Challenge #3
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their fullname, mass, and height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI(the same method on both objects). Store the BMI value to a property, and also return it from the method

// 3. Log to the console who has the higher BMI, to get her with the full name and the  respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// GOOD LUCK 😀

var person1 = {
    fullname: 'Mark Miller',
    mass: 180,
    height: 185,
    caclcBMI: function() {
       this.bmi = this.mass / (this.height ** 2) * 10000 
        return this.bmi.toFixed(1)
    }
}

var person2 = { 
    fullname: 'John Smith',
    mass: 89,
    height: 185,
    caclcBMI: function() {
        this.bmi = this.mass / (this.height ** 2) * 10000 
        return this.bmi.toFixed(1)
     }
}

// if(person1.caclcBMI() > person2.caclcBMI()) {
//     console.log(`${person1.fullname} BMI (${person1.caclcBMI()}) is higher than ${person2.fullname} BMI (${person2.caclcBMI()})`);
// } else {
//     console.log(`${person2.fullname} BMI (${person2.caclcBMI()}) is higher than ${person1.fullname} BMI (${person1.caclcBMI()})`);
// };

person1.caclcBMI() > person2.caclcBMI() ? console.log(`${person1.fullname} BMI (${person1.caclcBMI()}) is higher than ${person2.fullname} BMI (${person2.caclcBMI()})`)
: console.log(`${person2.fullname} BMI (${person2.caclcBMI()}) is higher than ${person1.fullname} BMI (${person1.caclcBMI()})`);


// console.log(person1.caclcBMI(), person2.caclcBMI())