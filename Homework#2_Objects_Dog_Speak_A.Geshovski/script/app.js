// ******** Homework#1 - Train og to speak ******* //

function Dog(name, kind) {
  this.name = name;
  this.kind = kind;
  this.speak = function () {
    alert("Woof - Woof");
  };
}


function validateInputs(inputs) {
  for (let input of inputs) {
    if (!input.value) {
      return false;
    }
  }
  return true;
}

trainDogBtn = document.getElementById("trainDogBtn");

trainDogBtn.addEventListener("click", function () {
  dogName = document.getElementById("dogNameInput");
  dogKind = document.getElementById("dogKindInput");

  if (validateInputs([dogName, dogKind])) {
    let newDog = new Dog(dogName.value, dogKind.value);
    newDog.speak();
    alert(
      `Congratulations! Your dog ${newDog.name}, who is a ${newDog.kind}, just learned how to speak!`
    );
  } else {
    alert("Are you sure you typed in both the name and the kind of dog? Please try again!!");
  }
});
