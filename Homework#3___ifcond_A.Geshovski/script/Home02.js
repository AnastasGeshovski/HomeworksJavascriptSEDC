// ******* Homework#2 ******* //

let dogAge = prompt(
  `Please enter the age that you want to convert to dog years.`
);

function HumToDog(dogAge) {
  let dogYears = 7 * dogAge;
  console.log(`Your dog is ${dogYears} years in human years.`);
  return dogYears;
}
HumToDog(dogAge);

let humanAge = prompt(
  `Please enter the age that you want to convert to human years.`
);

function DogToHum(humanAge) {
  let humanYears = humanAge / 7;
  console.log(`Your years are ${humanYears} in dog years.`);
  return humanYears;
}
DogToHum(humanAge);
