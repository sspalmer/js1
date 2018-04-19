/*
//fields
let emailArr;
var yourEmail;

while (true) {
  //user input
  var yourEmail = prompt("What's your email?");
  emailArr = yourEmail.split("");

  if (!(emailArr.includes("@"))) {
    var yourEmail = prompt("Invalid. Please try again.");
  }
  else if (!(emailArr.includes("."))) {
    var yourEmail = prompt("Invalid. Please try again.");
  }
  else {
    alert("Thanks for providing a valid email.");
  }
}
*/
/*

//switch
var numOfProjects = prompt("How many projects do you have? You can choose a number 0-2.");
switch(parseInt(numOfProjects)) {
  case 0:
    alert("You won't have a projects section on your page");
    break;
    case 1:
    alert("You'll only have one showing");
    break;
    case 2:
    alert("You'll only have one showing");
        break;
  default:
    alert('You didn\'t follow the rules.');
}

*/

/*
function chooseAdventure() {
    while (true) {
        var location = prompt("Would you like to go to the store or relax at home? Respond by typing store or home", 'store, home');
        if (location == "store") {
            var what = prompt("Are you going to bake or bbq?", 'bake, bbq');
        }
        if (what == "bake") {
            prompt("You made some awesome cupcakes!");
            break;
        }
        if(what == "bbq") {
            prompt("You made some awesome kabobs!");
            break;
        }
        if (location == "home") {
            var activity = prompt("Would you like to go to watch netflix or go swimming?", 'netflix, swimming');
        }
        if (activity == "netflix") {
            alerts("You watched Jessica Jones");
            break;
        }
        if (activity == "swimming") {
            prompt("You cooled off in the pool");
            break;
        }
        else {
            prompt("Sorry, you entered the wrong input or it wasn't lower-case.");
            break;
        }
    }
}
chooseAdventure();
*/

/*
//ternaries  condition ? expression 1: expression 2
var yourAge = prompt('How old are you');
(parseInt(yourAge)) >= 18 ? alert('You can buy a lotto ticket') : alert('You can\'t buy a lotto ticket')
*/



//Arrays
let arr = ["Christa", "Ryeker", "Bryan", "Jeff", "Sam"];

//alert(Array.isArray(arr)); //boolean. check data that you get from another source

//arr.shift();
//console.log(arr);

let bestEver = arr.slice(); // no parrameters makes an exact copy of original array
bestEver.push("Christa");
console.log(arr, "Original");
console.log(bestEver, "Sliced Array");

let noCoteacher = arr.slice(1); //returns copy of arr starting at index 1
console.log(noCoteacher);

let teacherIndex = arr.indexOf("Ryeker");
console.log(teacherIndex);

let backwards = arr.sort();
console.log(backwards);
