/*
//String Interpolation
var myName = "Ryeker";

alert('Hello, ' + myName + '!'); //ES5

alert(`Hello, ${myName}!`); //ES6
*/
/*
// loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 0; i < 10 || i < 15; i++) {
  console.log(i);
}


for (let i = 0; i < 10 || i < 15; i++) {
  if (!(i%2===0))
  console.log(i);
}

*/
/*
// IN CLASS
// Declare a var and set it equal to any string.
var favBook = "Perks to being a wallflower";
// Declare a second var and call new String() on the same string (this will create an instance of a JS string object.)
var aBook = new String(favBook);

// Use the logical operators and a third var to determine if they are strictly equal.
var isEqual = (favBook === aBook);
console.log(isEqual);
// Now use the logical operators and a fourth var to determine if they are loosely equal.
var isEqual = (favBook == aBook);
console.log(isEqual);
// Why did you get the result you got?
// Loose == checks value
// Strict === checks value and type

*/
/*

var yourName = prompt("What's your name?");
console.log(yourName.length); //if name is empty length returns 0
console.log(!yourName); //if name is empty this returns true

*/
/*

//Objects will always return false because they save location
let obj1 = {
  name : "Ryeker"
};

let obj2 = {
  name : "Ryeker"
};

console.log(obj1 === obj2); // returns false because objects save location pointers not the value.

*/
/*

//NaN
console.log(typeof("three" * 15)); // Nan's type is a number
console.log(NaN === NaN); //returns false
console.log(isNaN("three" * 15)); // isNaN returns true, it is not a number

*/
/*
// parseInt make this a number
let myNumber = prompt("Give me a number!!!");
alert(
  isNaN((parseInt(myNumber) / 2))
);
*/

/*
// toString make this to a String
let string = prompt("Tell me your favorite number.");
string.toString();
alert(`Your favorite number is ${string}`);
*/

/*
let myNum = prompt("Enter a number:");
myNum = parseInt(myNum);

console.log(myNum + 42);
console.log(myNum - 42);
console.log(myNum * 42);
console.log(myNum / 42);
console.log(myNum += 42); // myNum = myNum + 42
console.log(myNum -= 42); // myNum = myNum - 42
console.log(myNum *= 42); // myNum = myNum * 42
console.log(myNum /= 42); // myNum = myNum / 42
*/


const best = 42;
const cheese = "delicious";

if(best === "42"){
  console.log("Hooray!!!");
} else if(cheese == "delicious"){
  console.log("yes it is!");
} else {
  console.log("Boooo:");
};
