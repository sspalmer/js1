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


//Scope
var fav = "cheese"; //variables declared outside a function can be referenced inside the function.

function sayMyFav() {
  alert(fav);
}

sayMyFav();
