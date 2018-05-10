//TIMER ***********
/*
setTimeout(   //set timeout method
  () => { //arg #1, a callback fn
  alert("WACKY DAN'S SUPPER SALE!!!!");
},
5000); //time in ms you want to wait


setInterval(   //set interval method
  () => { //arg #1, a callback fn
    logout();
},
60000); //time in ms you want to wait

alert("I am first.");
*/

/*
//TRY IT **************
//Global Variables
const quotes = ["quote 1", "quote of randomness", "omg quote 3"];
let i = 0;
let timer;
let interval;

// Write a program that prompts the user for a time (in ms) they want to wait.
function promptUser() {
  return parseInt(prompt("Enter wait time in ms:", "1000"));
}
// Take the response and create a setTimeout. After the time expires, alert the user with a random quote.
let userTimeout = promptUser();
!isNaN(userTimeout) ? createTimeout(userTimeout) : promptUser();

function createTimeout(time) {
  timer = setTimeout(() => {
    alert(quotes[i]);
  }, time);
};
// Prompt the user for a number of how often the user wants to be alerted and have the message change every time the alert happens. HINT: DO NOT write multiple messages, have JS change it for you.
let userInterval = prompt("How often do you want alert? (in ms)", "5000");

!isNaN(userInterval) ? createInterval(userTimeout) : promptUser();

function createInterval(time) {
  interval = setInterval(() => {
    alert(quotes[i]);
    i < 4 ? i++ : i = 0;
  }, time);
};

// Create two buttons: one that cancels the timeout, and one that cancels the interval.
const cnxTimeout = document.querySelector('#cnxTimeout');
const cnxInterval = document.querySelector('#cnxInterval');

cnxTimeout.addEventListener('click', () =>
{
  console.log('Timer>>>>>',timer);
  clearTimeout(timer);
});

cnxInterval.addEventListener('click', () =>
{
  clearInterval(interval);
});
*/

//Storing Values ***************
// Session Storage - clears when session is closed
const user = {
  email: "my@email.com",
  firstName: 'Bryan',
  lastName: 'Griffin',
  cart: [],
  lastLogin: Date.now()
};

sessionStorage.setItem('currentUser', JSON.stringify(user));

let firstName = JSON.parse(sessionStorage.getItem('currentUser').firstName);

alert(`Hi ${user.firstName}, glad you're back`);

function logout() {
  sessionStorage.removeItem('currentUser');
};
