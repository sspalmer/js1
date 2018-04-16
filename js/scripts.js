/*const myName = "Samantha";
console.log(myName, "one");
{
  const myName = "Connie";
  console.log(myName, "two");
}
console.log(myName, "three");


let birthDay = '10/14/81';
let rightNow = new Date(birthDay);
alert(rightNow);




//MATH OBJECT
alert(Math.PI);

//String length
let myString = "Hello World";
alert(myString.length);


let myArray = ["Sam","Bryan", 3, new Date(), []];

let myObject = {
  studentCount: 0,
  teacherRating: 1000000
}
*/
/*
//alert
alert("blah blah blah");
//confirm
const isOfAge = confirm("Are you 21 or older?");
//promt
const userStory = prompt("Tell me, do you take walks.");
console.log(userStory);

alert(new Date());

*/

const firstName = prompt("What's your first name?");
const lastName = prompt("Hi "+ firstName+ " what's your last name?");
console.log(firstName);
alert("Hello "+firstName+" "+lastName);


var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var birthYear = prompt("What year were you born?");
var birthMonth = prompt("What month were you born?");
const birthDay = prompt("What day in "+birthMonth+" were you born?");
if (birthMonth.length<=2) {
  var birthDate = new Date(birthYear, birthMonth-1, birthDay);
} else {
  var birthDate = new Date(birthYear, month.indexOf(birthMonth), birthDay);
}
alert(firstName+" "+lastName+" was born on "+birthDate);
