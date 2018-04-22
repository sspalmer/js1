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


/*
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
*/


//TAKEHOME4 BUT FROM DAY3
// Prompts your user for their name.
let yourName = prompt("What's your name?");
// Next, ask the user's favorite color. (Provide the user with the basic 10 colors as options i.e. red, orange, yellow, green, blue, pink, purple, black, white, and grey).
let favColor = prompt("Of these colors, which one is your favorite? red, orange, yellow, green, blue, pink, purple, black, white, and grey:");
// Depending on the color, write 9 different responses for the possible answers. Include the user's name in the response message.
switch (favColor) {
  case "red":
  case "purple":
    alert("Red and purple, the color of a lychee and mangosteen. Tasty choice "+yourName+"!");
    break;
  case "orange":
    alert("Orange, the color of the sun setting sky. Beautiful choice ${yourName}.");
    break;
  case "yellow":
    alert("Yellow, the color of the morning glow. How refreshing ${yourName}.");
    break;
  case "green":
    alert("Green, the color of a young rice paddy. Excellent choice ${yourName}.");
    break;
  case "blue":
    alert("Blue, the color of the most comfortable jeans. Relaxing choice ${yourName}.");
    break;
  case "pink":
    alert("Pink, the color of that Big Chew bubble gum from childhood. Great memories ${yourName}.");
    break;
  case "black":
    alert("Black, the color of rubber hitting the road. Fun choice ${yourName}.");
    break;
  case "white":
    alert("White, the color of that random rock that stands out on the watery shores. Interesting choice ${yourName}.");
    break;
  case "grey":
    alert("Grey, the color of most modern decor lately. Trendy choice ${yourName}.");
    break;
  default:
    alert("Sorry ${yourName}, but ${faveColor} isn't one of the color options right now.");
}
