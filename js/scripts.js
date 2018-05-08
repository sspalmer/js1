//Custom Objects
//everything is an object except for primatives prototypes (String, Number, Boolean)

/*
let myString = new String("hello world");
console.log(myString);
console.log(Object.getPrototypeOf(myString));

let myNumber = new Number(23);
console.log(myNumber);
console.log(Object.getPrototypeOf(myNumber));


//Object (an implicit call with passed value)
const user = {    //same as const user = new Object
  name: "Ryan", //key/value pair
  password: "1234" //property and value
};
console.log(user);
console.log(Object.getPrototypeOf(user));


//Array
const user2 = [
  "Ryan",
  "1234"
];
Array.prototype.sayPurple = 'purple'; // writes a new prototype
console.log(user2);
console.log(Object.getPrototypeOf(user2));
console.log(user2.sayPurple);

*/

/*
//Constructor Functions
function User(firstName, lastName, password, signUpDate) {  //best practice: uppercase name. They should always build an object, that object should always have the name of the funtion
  this.fullName = firstName + lastName;  //this.fullName builds a new key and assigns value
  this.password = password;
  this.signUpDate = new Date(signUpDate);
};

//let firstUser = new User("ryker", "herndon", "2345", "5/7/18");

const regForm = document.forms.register;
const firstName = regForm.firstName;
const lastName = regForm.lastName;

let firstUser = new User(firstName, lastName);
console.log(firstUser);
*/


// Try It
// Create a prototype for a task.
// Each task should have name, due date, and priority as properties.
// Write a function that creates a new task with input from your user.
// console.log the new task.

function Task(name, dueDate, priority) {
  this.name = name;
  this.dueDate = new Date(dueDate);
  this.priority = priority;
};

let newTask = new Task("fly to Australia", "5/18/18", "do it now");
console.log(newTask);
