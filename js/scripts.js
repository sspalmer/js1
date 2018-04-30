//FUNCTIONS

//console.log("hello world"); //Method wich is a type of function
/*
function sayHello(name, greeting){ //defining the function
  return `Hello, ${name}, ${greeting}!`;
}

let myGreeting = sayHello("Connie", "you're awesome");

alert(myGreeting);

*/

/*
//FUNCTION EXPRESSION:
 var logStuff = function(param) {
    console.log(`${param} was passed in`);
 };

 //FUNCTION DECLARATION
 function multiply(num, secondNum) {
     return num * secondNum;
 };
 //****IMPORTANT: Function hoisting only works with function declaration and not with function expression.
*/

/*
//Scope
var fav = "cheese"; //variables declared outside a function can be referenced inside the function.

function sayMyFav() {
  alert(fav);
}

sayMyFav();
*/


/*
//FAT ARROW FUNCTION =>, they don't have function key word, fat arrow,

(thingToLong, thingToSay) => { //Fat arrow skelleton
  console.log(thingToLog);
  alert(thingToSay);
}

thingToLog => { //Fat arrow w 1 param
  return thingToLog;
}

thingToLog => (thingToLog); //Implicit returned Arrow FUNCTION
*/

/*
//Try it out
// write a function that calculates a dog's age. It should:
// Accept 1 argument (age of the dog in years).
let age = parseInt(prompt(`How old is your dog?`, `3`));
// Return the age of the dog using the conversion rate of 1 year to 7 "dog" years.
function dogYears(i) {
  return i * 7;
};
// Alert the answer.

if (isNaN(age)) {
  alert(`That's not a number.`);
} else {
  alert(`That's ${dogYears(age)} doggy years!`);
};

*/

/*
//Try it out
// Now, write a function that tells you what a "lifetime supply" will be for any product. It should:
// Accept 2 arguments (age of person now, amount of product per day).
// Calculate the supply needed for the rest of the user's life, based on a constant max age of 80.
// Alert the answer in this format: "You will need x to last you until you're y.
// BONUS: write it to accept a dynamic max age.
let age = parseInt(prompt("How old are you?", "20"));
let use = parseInt(prompt("How many Hershey Kisses can you eat in a day?", "3"));

function calculate(i, j) {
  if (!isNaN(i) && !isNaN(j)) {
    return (80-i)*365*use;
  } //else {
  //  alert("That's not a number.");
  //  calculate(i,j);
  };
};

alert(`You'll need ${calculate(age, use)} Kisses to last you until you're 80!`);
*/

/*
//METHODS are a type of FUNCTION
//A method is implicitly passed the object on which it was called.
var myString = "hello world";
console.log(myString.length); //length is a method
console.log(myString.toUpperCase()); //toUpperCase() is a method
*/

//TAKEHOME
// Take a number and return the square of that number (power of 2).
// If a non-number argument is passed into the function, alert NaN and prompt for another response
// let number = parseInt(prompt("Let's square the number: ", "5"));
//
// function square (i) {
//   if (!isNaN(i)) {
//     return Math.pow(i, 2);
//   } else {
//     let newNum = parseInt(prompt("That wasn't a number. Enter a REAL number: "));
//     return square(newNum);
//   };
// };
//
// alert(square(number));

// In a second function, capitalize the first letter of a string and add a period (.) to the end of the string if it doesn't already end with a period
let myString = prompt("What's the first thing you do in the morning?");

function sentence (inputString) {
  if (inputString[inputString.length-1] !== ".") {
    inputString = inputString + ".";
  };
  return inputString[0].toUpperCase() + inputString.slice(1);
};

alert(sentence(myString));

// Create a string that will flip the position of the first and second half of a string. For example, the string “abcdef” would be returned as “defabc”. Hint: use substring.
// BONUS: If you are bored by all that, write a function that checks if a given string is a palindrome.
