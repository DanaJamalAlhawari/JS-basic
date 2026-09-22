// q1

// 1
console.log(-9 * 3);//  -27


// 2
console.log("value is" + 50);


// 3


console.log(17 % 5);


// 4
console.log(5 % 17);



// 5
console.log(5 / 10);


// 6
console.log(4 == 4);


// 7
console.log(4 != 5);


// 8
console.log(7 <= 8);

// 9
let x = 4.7;
console.log(Math.ceil(x) - Math.floor(x));





// 1
console.log(typeof 100);


// 2
console.log(typeof 73.9);

// 3
console.log(typeof NaN);


// 4
console.log(typeof "Water");


// 5
console.log(typeof false);


// 6
console.log(typeof (9 != 11));


// 7
console.log("Orang" + "e");


// 8
console.log("Orange" - "s");


// 9
console.log("4" + "8");


// 10
console.log("4" - "8");


// 11
console.log("name" + 3);


// 12
console.log("name" - 3);


// 13
console.log(82 * "word");


// 14
console.log(1 + "hello");


// 15
console.log("hello" + 1);


// 16
console.log(1 + true);


// 17
console.log("hello" + true);


// 18
console.log(typeof Infinity);


// 19
console.log(1 == "1");


// 20
console.log(1 === "1");


//////////////Q2

let number = prompt("Enter a number");

alert(number);


//////////////Q3


let num1 = Number(prompt("Enter first number"));

let num2 = Number(prompt("Enter second number"));

if (num1 < num2) {
    alert(num1 + ", " + num2);
} else {
    alert(num2 + ", " + num1);
}

//////////////Q4


let number1 = Number(prompt("Enter first number"));

let number2 = Number(prompt("Enter second number"));

if (number1 > number2) {
    alert(number1);
} else {
    alert(number2);
}

//////////////Q5


let firstNumber = Number(prompt("Enter first number"));

let secondNumber = Number(prompt("Enter second number"));

alert(firstNumber + secondNumber);

//////////////Q6
let num = Number(prompt("Enter a number from 1 to 9"));

switch (num) {
    case 1:
        console.log("ONE");
        break;

    case 2:
        console.log("TWO");
        break;

    case 3:
        console.log("THREE");
        break;

    case 4:
        console.log("FOUR");
        break;

    case 5:
        console.log("FIVE");
        break;

    case 6:
        console.log("SIX");
        break;

    case 7:
        console.log("SEVEN");
        break;

    case 8:
        console.log("EIGHT");
        break;

    case 9:
        console.log("NINE");
        break;

    default:
        console.log("PLEASE TRY AGAIN");}


        //////////Q7
   let birthYear = Number(prompt("Enter your birth year"));

let currentYear = 2026;

let age = currentYear - birthYear;

if (age > 60) {
    alert("You may join the seniors' program.");

} else if (age > 30) {
    alert("You are not eligible. You may join other programs.");

} else if (age >= 18 && age <= 30) {
    alert("You are eligible. Start your application.");

} else {
    alert("You may join the kids' program.");
}

 ///////////// q8

 function changeCase(text) {

    let result = "";

    for (let i = 0; i < text.length; i++) {

        if (text[i] === text[i].toUpperCase()) {
            result = result + text[i].toLowerCase();

        } else {
            result = result + text[i].toUpperCase();
        }
    }

    return result;
}

console.log(changeCase("OrAnGe"));



 ///////////// q9
 function camelCase(text) {

    let result = "";

    for (let i = 0; i < text.length; i++) {

        if (text[i] != " ") {
            result = result + text[i];
        }
    }

    return result;
}

console.log(camelCase("Coding Academy by Orange"));