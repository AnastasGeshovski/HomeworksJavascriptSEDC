// ******* Exercise#1 ******* //

function FunctionCalc1(Num1, Num2) {
  let myResult = Num1 + Num2;
  console.log(myResult);
  return myResult;
}

function FunctionCalc2(No1, No2) {
  let myResult = No1 - No2;
  console.log(myResult);
  return myResult;
}

function FunctionCalc3(N1, N2) {
  let myResult = N1 * N2;
  console.log(myResult);
  return myResult;
}

function FunctionCalc4(Number1, Number2) {
  let myResult = Number1 / Number2;
  console.log(myResult);
  return myResult;
}

FunctionCalc1(15, 22);
FunctionCalc2(65, 13);
FunctionCalc3(5, 4);
FunctionCalc4(54, 6);

console.log(`------------------------------------`);
// ******* Exercise#2 ******* //
// ***** Function declaration***** //
function CelToFar(fahrenheit) {
  let result = (5 / 9) * (fahrenheit - 32);
  return result;
}
function FarToCel(celsius) {
  let result = celsius * 1.8 + 32;
  return result;
}

// The user is trying to convert

let userChoice = prompt(
  "Please enter input value F for fahrenheit and C fo celsius."
);
let userInput = parseInt(prompt("Please enter value:"));
if (userChoice === "F") {
  console.log(`${CelToFar(userInput)}C`);
} else if (userChoice === "C") {
  console.log(`${FarToCel(userInput)}F`);
} else {
  console.log("ERROR!");
}

console.log(`------------------------------------`);
// ******* Exercise#3 ******* //

function calculateAge(birthYear) {
  let currentYear = 2021;
  let result = currentYear - birthYear;
  return result;
}

let birthYear = parseInt(prompt("Please enter your birth year."));
if (birthYear <= 2021) {
  console.log(`You are ${calculateAge(birthYear)} years old.`);
} else if (birthYear > 2021) {
  console.log("ERROR! The current year is 2021.");
}
