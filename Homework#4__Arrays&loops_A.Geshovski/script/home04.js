// // ******* Homework01 ******* //
// let storyArr = ["John", "tense", "cycling"];

// function tellStory() {
//   let storyContent = `Hello!! This is a story about ${storyArr[0]} and his wife. ${storyArr[0]} is a nice person, but today they are ${storyArr[1]}. Beacause of that they are going to ${storyArr[2]} all day.`;
//   alert(storyContent);
// }

// tellStory();

// // ******* Homework02 ******* //

// let arrayOfFiveNumbers = [5, 8, 13, 20, 23];

// function sumNumbers(arr) {
//   alert(arr[0] + arr[1] + arr[2] + arr[3] + arr[4]);
// }

// sumNumbers(arrayOfFiveNumbers);

// // ******* Homework02 Bonus ******* //

// let arrayOfNums = [6, 9, 15, 18, 20];

// function validateNumber(){
// let i = 3; 
// while (i <= arrayOfNums.length - 2) {  
//     console.log(arrayOfNums[i]);  
// 	i++; 
// }
// }

// validateNumber();

// // ******** Homewoerk3 ***********//

// let studentsOfSedcArr = ["Hello", "there", "students", "of", "SEDC", "!"];

// function oneBigStringMaker (Arr) {
//    let oneBigString = "";
//     for (let string of Arr) {
//         oneBigString += ` ${string}`
//     }
//     return oneBigString;
// }

// alert (oneBigStringMaker (studentsOfSedcArr));

// // ********* Homework04 ********** //

// for (let i = 1; i <= 20; i++) {
//     let rangeNumber = i;
//     console.log (rangeNumber);
//     if (rangeNumber % 2 == 0) {
//         console.log ("\n");
//     } else {
//         console.log (" ");
//     }
// }

// // ********* Homework05 ********** //

// arrayOfStuff = [11, "red", 3, 68, "bear", NaN, 15];

// function minMaxSumCalc (arr) {
//     let maxNumber = 0;
//     let minNumber = arr[0];
//     let counter = 0;

//     for (let i = 0; i < arr.length; i++) {
//        let currentNumber = arr[i];
//        if (typeof currentNumber === 'number') {
//            if (currentNumber > maxNumber) {
//         maxNumber = currentNumber;
//         } 
//     } else continue
//             counter++;
//         }

//     console.log(`The largest number is ${maxNumber}`);
     
//     for (let i = 0; i < arr.length; i++) {
//         let currentNumber = arr[i];
//         if (typeof currentNumber === 'number') {
//         if (currentNumber < minNumber) {
//             minNumber = currentNumber;
//             } 
//     } else continue
//             counter++;
//         }

//     console.log(`The smallest number is ${minNumber}`);

//     let sumMinMax = maxNumber + minNumber;

//     console.log(`The sum of the Min and Max numbers is ${sumMinMax}` )
// }

// minMaxSumCalc (arrayOfStuff);

// ************* Homework06 ************ //

let firstNames = ["Louis", "Miles", "Charlie", "John", "Dizzy",];
let lastNames = ["Armstrong", "Davis", "Parker", "Coltrane", "Gillespie",];

function matchFirstLastName (arr1, arr2) {
    let resultArr = []
    for (let i = 0; i < arr1.length; i++) {
        numericValue = i + 1 + ".";
        resultArr.push(`${numericValue} ${arr1[i]} ${arr2[i]}`);
    }
    console.log(resultArr);
}

matchFirstLastName (firstNames, lastNames);