// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// GOOD LUCK �

const teamOneKoala = prompt("teamKoala score:");
const teamOneDolphines = prompt("teamKDolphines score:");

console.log("Koala team Score: " + teamOneKoala);
console.log("Dolphines team Score: " + teamOneDolphines);

let gameOneKoala = 0;
let gameOneDolphines = 0;
if (teamOneKoala > teamOneDolphines && teamOneKoala > 100 || teamOneDolphines < 100) {
    gameOneKoala++;
    console.log("team Koala win. " + "Game score is: " + gameOneKoala + ":" + gameOneDolphines );
} else if (teamOneKoala < teamOneDolphines && teamOneKoala < 100 || teamOneDolphines > 100) {
    gameOneDolphines++;
    console.log("team Dolphines win. " + "Game score is: " + gameOneKoala + ":" + gameOneDolphines );
}  else {
    console.log("no one wins. " + "Game score is: " + gameOneKoala + ":" + gameOneDolphines );
}

const teamTwoKoala = prompt("teamKoala score:");
const teamTwoDolphines = prompt("teamKDolphines score:");
if (teamTwoKoala > teamTwoDolphines) {
    gameOneKoala++;
    console.log("team Koala win. " + "Game score is: " + gameOneKoala + ":" + gameOneDolphines );
} else if (teamTwoKoala < teamTwoDolphines) {
    gameOneDolphines++;
    console.log("team Dolphines win. " + "Game score is: " + gameOneKoala + ":" + gameOneDolphines );
}   else {
    console.log("no one wins. " + "Game score is: " + gameOneKoala + ":" + gameOneDolphines );
}

const teamThreeKoala = prompt("teamKoala score:");
const teamThreeDolphines = prompt("teamKDolphines score:");
if (teamThreeKoala > teamThreeDolphines) {
    gameOneKoala++;
    console.log("team Koala win. " + "Game score is: " + gameOneKoala + ":" + gameOneDolphines );
} else if (teamThreeKoala < teamThreeDolphines) {
    gameOneDolphines++;
    console.log("team Dolphines win. " + "Game score is: " + gameOneKoala + ":" + gameOneDolphines );
}  else {
    console.log("no one wins. " + "Game score is: " + gameOneKoala + ":" + gameOneDolphines );
}

if( gameOneKoala > gameOneDolphines) {
    console.log("team Koala wins Trophy. " + "Game score is: " + gameOneKoala + ":" + gameOneDolphines );
} else if (gameOneKoala < gameOneDolphines) {
    console.log("team Dolphines wins Trophy. " + "Game score is: " + gameOneKoala + ":" + gameOneDolphines );
} else {
    console.log("no one wins a Trophy. " + "Game score is: " + gameOneKoala + ":" + gameOneDolphines );
}

// if (gameOne.teamKoala > gameOne.teamDolphines) {
//     console.log("teamKoala win");
// } else if (gameOne.teamKoala < gameOne.teamDolphines) {
//     console.log("teamDolphines win");
// } else {
//     console.log("plichta");
// }


// const gameOne = {teamKoala:30,teamDolphines:10}
// const gameTwo = {teamKoala:10,teamDolphines:30}
// const gameThree = {teamKoala:30,teamDolphines:30}

// if (gameOne.teamKoala > gameOne.teamDolphines) {
//     console.log("teamKoala win");
// } else if (gameOne.teamKoala < gameOne.teamDolphines) {
//     console.log("teamDolphines win");
// } else {
//     console.log("plichta");
// }


