function Book(title, author, readingStatus){
    this.title = title
    this.author = author
    this.readingStatus = readingStatus

    function readingStatus (){
        if (readingStatus === "Y"){
            alert(`You have already read this book ${title} by ${author} `)
        } 
        if (readingStatus === "N"){
            alert("You haven't read this book yet!")
        }
    }
}



let bookTitle = prompt(`Write the ${title} of a good book!!`);
let bookAuthor = prompt(`Write the name of ${author}.`);
let status = prompt(`Have you read it? Choose ${readingStatus} "Y" for YES or "N" for NO!`);