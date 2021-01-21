// ******* Homework#3 ******* //

let accountBalance = 5000;

function ATM(accountBalance) {
  alert("Please insert your card into ATM.");
  prompt("Please enter your PIN number.");
  let answer = prompt(
    "Do you want to withdraw money? Select Y for YES and N for NO!"
  );

  if (answer === "Y") {
    let requestedMoney = prompt(
      `Enter money amount that you want to withdraw.`
    );
    let remainingMoney = accountBalance - requestedMoney;
    alert(`Your current cash amount is ${remainingMoney}`);

    if (requestedMoney > accountBalance) {
      alert("Not enough money.");
    }
    if(answer === "N"){  
        alert(`Okay. Thank you. Have a nice day!`);
    }
  }
}

ATM(accountBalance);
