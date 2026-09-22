let userName = prompt("Enter your name");
userName = userName.toLowerCase();

console.log("User Name: " + userName);


let membershipType = prompt("Enter your membership type: student or regular");
membershipType = membershipType.toLowerCase();

console.log("Membership Type: " + membershipType);


if (membershipType === "student") {

    alert("Welcome Scholar " + userName);
    console.log("Welcome Scholar " + userName);

} else if (membershipType === "regular") {

    alert("Welcome Member " + userName);
    console.log("Welcome Member " + userName);

} else {

    alert("Welcome " + userName);
    console.log("Welcome " + userName);

}


let bookGenre = prompt("Do you prefer fiction or non-fiction?");
bookGenre = bookGenre.toLowerCase();

console.log("Book Genre: " + bookGenre);


let bookTitle = prompt("Enter the title of the book you want to borrow");
bookTitle = bookTitle.toLowerCase();

console.log("Book Title: " + bookTitle);


alert("Your requested book " + bookTitle + " is being reserved");

console.log("Your requested book " + bookTitle + " is being reserved");

console.log(userName + " ordered " + bookTitle);