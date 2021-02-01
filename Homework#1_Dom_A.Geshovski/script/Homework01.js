// ****** Homework01 ******** //

// Declaring the nodes
let firstDiv = document.getElementsByClassName(`aDiv`);
let firstTitle = document.getElementById(`myTitle`);
let paragraph = document.getElementsByClassName(`paragraph`);
console.log(paragraph);
let secondDiv = document.getElementsByClassName(`anotherDiv`);
console.log(secondDiv);
let secondParagraph = document.getElementsByClassName(`paragraph second`);
let firstHeader = document.getElementsByTagName("h1");
console.log(firstHeader);
let secondHeader = document.getElementsByTagName("h3");
console.log(secondHeader);

// Changing the inner text

myTitle.innerText = `No, definitely not a cool page !!!`;
console.log(myTitle.innerText);

paragraph[0].innerText = `Yep! This is an exercise. It's pretty easy. Easy like beans.`;
console.log(paragraph[0].innerText);

secondParagraph[0].innerText = `Yep, its easy.`;
console.log(secondParagraph[0].innerText);

firstHeader[1].innerText = `Changed this Header.`;

secondHeader[0].innerText = `Changed this Header too.`;


