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

/*
let shoppingList = [];

let item1 = "Detergent";
let item2 = "Cheese";
let item3 = "Crackers";
let item4 = "wine";

shoppingList.push(item1, item2, item3, item4);

console.log(shoppingList);
*/

/*
let favoriteMovie = ['Star Wars VI', '1983'];
let secondFavorite = ['Return of the King', '2003'];
let thirdFavorite = ['Equilibrium', '2002'];
let myFavoriteMovies = [];
myFavoriteMovies.push(favoriteMovie, secondFavorite, thirdFavorite);

console.log(myFavoriteMovies[0][1], myFavoriteMovies[1][1], myFavoriteMovies[2][1]);
*/

/*
//Try It
// In your scripts.js file, create 5 arrays, each with one of your top 5 movies' title and the main character's name
let movie1 = ["Wonder Woman", "Bad Ass Woman"];
let movie2 = ["The Jungle Book", "Moglee"];
let movie3 = ["Big Fish", "The Wonderer"];
//
// Add all of these arrays to a final array named favoriteMovies
let favoriteMovies = [];
favoriteMovies.push(movie1, movie2, movie3);
//console.log(favoriteMovies);
// Create an array with just the titles of your favorite movies and alert it
// let movieTitles = [];
// movieTitles.push(movie1[0], movie2[0], movie3[0]);
// alert(movieTitles);


// let i = 0;
//
// while (i < favoriteMovies.length) {
//   console.log(i);
//   console.log(favoriteMovies[i][0]);
//   i++;
// }

// Create another array with your favorite and least favorite of the top 5 and console.log it.
// Check the length of your favoriteMovies array by alerting it.

// Now, using your favoriteMovies array:
//
// Write a for loop to iterate over the array
// Find your favorite movie by searching for the title in the loop
// Once the program finds your favorite movie, have it alert the title and year it was made

for(let i = 0; i < favoriteMovies.length; i++) {
  //console.log(i);
  console.log(favoriteMovies[i][0]);
  if (favoriteMovies[i][0] === "Big Fish") {
    alert(favoriteMovies[i][0]);
  }
}

*/

//Takehome

// Creates an array of things you need or want to do this weekend by collecting three todos from the user.
let toDoList = [];

for(let i = 1; i < 4; i++) {
  toDoList.push(prompt(`Enter item ${i} that you would like to get done.`));
};

console.log(`Original: ${toDoList}`);

// Using a for loop, change the items in the array by adding days they should be completed by to each index.
// Hint: which data type is best suited for your todo items?
for(let i = 0; i < toDoList.length; i++) {
  console.log(i);
  let numOfDays = prompt(`How many days will it take to accomplish the following task? ${toDoList[i]}`);
  let toDoItem = [toDoList[i], numOfDays];
  toDoList.splice([i], 1, toDoItem);
};

console.log(`List with time: ${toDoList}`);

// Using a while loop, find the task that will take the longest and log it to the console.
let longestTask = toDoList[0];
var i = 0;

while (i < toDoList.length) {
  if (parseInt(toDoList[i][1]) >= parseInt(longestTask[1])) {
    longestTask = toDoList[i];
  }
  i++;
};

console.log(`Longest Task: ${longestTask}`);

// Using a do while loop, add the string 'done' to all the tasks other than the one that will take the longest
// Finally, alert all the tasks that are marked done in the todo array.
