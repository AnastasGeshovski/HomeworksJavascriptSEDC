// // Exercise#1

// let elem = document.getElementById(`HelloBtn`);
// elem.addEventListener("click", function(){
//     alert(`Hello Anastas`);
// });


// //  Exercise#2

// let firstName = document.getElementById(`first-name`).value;
// let lastName = document.getElementById(`last-name`).value;
// let email = document.getElementById(`email`).value;
// let password = document.getElementById(`password`).value;
// let saveBtn = document.getElementById(`saveBtn`).value;


// saveBtn.addEventListener(`click`, function(){
//     let InputValues = (`${firstName} + ${lastName} + ${email} + ${password}`);
//     console.log(InputValues);
// });




// Exercise#3

let editBtn = document.getElementById(`editBtn`);
let myParagraph = document.getElementById(`this-paragraph`);

function changeEvent(myParagraph) {
    myParagraph.style.backgroundColor = "green";
    myParagraph.style.color = "yellow";
    myParagraph.style.fontSize = "20px";
    
};

editBtn.addEventListener("click", function() {
    changeEvent(myParagraph);
});