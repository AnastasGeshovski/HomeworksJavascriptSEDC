// ******* Homework02 ******** //

let numArray = [25, 37, 13, 19, 54];
let list = document.getElementById(`ArrayofNums`);

function printArray() {
  list.innerHTML = "";
  for (let i = 0; i < numArray.length; i++)
    list.innerHTML += `<li>${numArray[i]}</li>`;
}

function printSumArray(arr) {
  list.innerHTML = ``;
  let printNumbers;
  for (let number of arr) 
  printNumbers = printNumbers + number;
  divToPush.innerHTML += `The sum of the numbers is ${printNumbers}`;
}

