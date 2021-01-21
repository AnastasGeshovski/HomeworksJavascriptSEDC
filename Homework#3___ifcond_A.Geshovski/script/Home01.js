// ******* Homework#1 ******* //

let inputValue;

function typeOfData(inputValue) {
  if (Object(inputValue)) {
    console.log(`${typeof inputValue}`);
  } else if (Boolean(inputValue)) {
    console.log(`${typeof inputValue}`);
  } else if (Number(inputValue)) {
    console.log(`${typeof inputValue}`);
  } else if (String(inputValue)) {
    console.log(`${typeof inputValue}`);
  } else if (undefined(inputValue)) {
    console.log(`${typeof inputValue}`);
  }
}

typeOfData(null);
typeOfData(true);
typeOfData(8);
typeOfData("something");
typeOfData();
