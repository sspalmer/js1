//QUERYING THE DOM  (stuff from Day6)

/*
// The 3 Older Methods
let blueDivs = document.getElementsByClassName('blue'); //gives you all elements by that Class name and in array form.
console.log(blueDivs);

let h1 = document.getElementsByTagName('h1'); // gives you all elements by that Tag name in an array form.
console.log(h1);
console.log(h1[0].clientLeft); // gives you that specific index of 0 and returns the node of clientLeft.

let para = document.getElementById('para'); //Note Element is singular. Only returns the first instance of para which is why we don't use IDs more than once.
console.log(para);
*/


/*
// The 2 Newer Methods

//querySelector give you the first one
let queryBlues = document.querySelector('h1');
let queryBlues = document.querySelector('.blue');
let queryBlues = document.querySelector('#para');
console.log(queryBlues);

//querySelectorAll give you an array of them all but could give you an array of one
let queryBlues = document.querySelector('h1');
let queryBlues = document.querySelector('.blue');
let queryBlues = document.querySelector('#para');
console.log(queryBlues);

*/

/*
//Try It
// Create a function that queries the DOM for the body tag using all of these methods. Log the results to your console.

function queryDom () {
  let body = document.getElementsByTagName('body');
  console.log(body[0]);
}

queryDom();

// The function should take 2 arguments: the DOM selector method the user wants to employ and the name of the DOM selector to be searched for.

function queryDom (element, method) {
  let elementToQuery = document.method(element);
  console.log(elementToQuery);
}
let el = prompt("give me an element");
let method = prompt("give me a method");
queryDom(el, method);

*/

/*
//EVENT LISTENER
const button = document.querySelector('.btn-danger');

button.addEventListener('click',(e) => {
  console.log(e);
})
//callback function because js is being "called back" to this point in the code when the user clicks on the button.
//e.target gives you the thing you clicked.
*/

/*
//TRY IT
// On your day6 branch, create a basic HTML mockup with a button, a div with some height and background color, and an h1 with some text
// Create event listeners for each:
// For the button, alert the user with a message when they click it.
const button = document.querySelector('.btn-danger');

button.addEventListener('click',(e) => {
  alert('You clicked Me!');
});

// For the div, change the color of the background when their mouse goes into the div.
const div = document.querySelector('.blue');

div.addEventListener('mouseenter', (e) => {
  div.className = 'red';
});

// For the h1, change the color of the text the user releases any key.
const h1 = document.querySelector('h1');

h1.addEventListener('mouseup', (e) => {
  h1.style.color = 'yellow';
})
// Not Tough Enough? Try redirecting the user's browser to facebook when the click anywhere on the page.
*/



//******* DAY7 STUFF ********

/*
// textContent
const h1 = document.querySelector('h1');

h1.addEventListener('mouseup', (e) => {
  h1.textContent = 'yellow';
});

// innerHTML
const h1 = document.querySelector('h1');

h1.addEventListener('mouseup', (e) => {
  h1.innerHTML = 'yellow';
});
*/

/*
// createElement
const h1 = document.querySelector('h1');

h1.addEventListener('mouseup', (e) => {
});

//.classList
button.addEventListener('click', (e) => {
  div.classList.remove('text-center');
});

function checkForRed(element) {
  element.classList.contains('red-text') ?
  element.classList.remove('red-text') : //......;
  // if (element.classList.contains('red-text')) {
  //   element.classList.remove('red-text');
  //   //...also add a class of some importance
  // } else {
  //   //add the red text class
  // }
};
*/

/*
//.setAttribute
//Element.setAttribute(name, value);
const myImg = document.querySelector('img');

function changeImg(){
  myImg.setAttribute('src', 'https://goo.gl/images/OTqyfQ');
}

myImg.addEventListener('click', () => (changeImg()));
*/

//TRY IT
// Write a program that prints on the page all numbers from 1 to 100. For multiples of three print “Fizz” instead of the number. For multiples of five print “Buzz” instead of the number. For numbers which are multiples of both three and five print “FizzBuzz”.
const body = document.querySelector('body');

for (let i = 1; i <= 100; i++) {
  let p = document.createElement('p'); //creates a p-tag each timeout
  if((i % 3 === 0) && (i % 5 === 0)) {
    p.textContent = 'FizzBuzz';
  } else if (i % 3 === 0) {
    p.textContent = 'Fizz';
  } else if (i % 5 === 0) {
    p.textContent = 'Buzz';
  } else {
    p.textContent = i;
  }
  body.appendChild(p);
};
