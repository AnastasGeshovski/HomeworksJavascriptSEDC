// // ********* Exercise01 Arrays ********* //

// let namesArray = ["Bill", "Ana", "Josephine", "Elena"];

// function mapToArrayElementsLength() {
//     let namesLengthArray = [];
//     for (i = 0; i < namesArray.length; i++)
//     namesLengthArray.push(namesArray[i]);
//     console.log(namesLengthArray);
// }

// mapToArrayElementsLength();

// // ********* Exercise02 ******** //

// let num = 100;

// function getDividableNumbers() {
//   let arrayOfNums = [];
//   for (let i = 0; i < num; i++) {
//     if (i % 7 == 0 && i % 3 == 0) arrayOfNums.push(i);
//   }
//   console.log(arrayOfNums);
// }

// getDividableNumbers();


// *********** Exercise 03 ********** //

let fName = document.getElementById('fname');
let lName = document.getElementById('lname');
let phoneNum = document.getElementById('phone');
let saveBtn = document.getElementById('saveBtn');


function Contact(fName, lName, phoneNum) {
    this.fName = fName;
    this.lName = lName;
    this.phoneNum = phoneNum;
}); 
    

let contact = new Contact [fName, lName, phoneNum];
    
    saveBtn.addEventListener('click', function(event) {
        event.preventDefault();
        let person = {
            firstName: fName.value,
            lastName: lName.value,
            phoneNum: phoneNum.value
        }
        
        console.log(person);

