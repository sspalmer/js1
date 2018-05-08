// **** DAY8

/*
// Forms
console.log(document.forms.login.username.value); // or ["login"] js will not recognize a numbered name unless it's in brackets like ["3"].

document.forms.login.password.addEventListener('keyup', e => {
  console.log(e.target.value);
});

document.forms.login.submit.addEventListener('click', e => {
  e.preventDefault();
  console.log(e.target.value);
});

*/


/*
// this
function nameMe(name) {
  console.log(this);
  alert(name);
}

nameMe('Ryeker');  //defines 'this'
*/


//BIND (4 kinds of binds)

// function nameMe(name) {
//   console.log(this);
//   alert(name);
// }
//
// var doc = document.querySelector('.btn').addEventListener('click', (e) => {
//   console.log(this.name);
// });


// // Explicite Bindind 1 & 2   .call() and .apply()
// function nameMe(firstName, lastName) {
//   console.log(this.name, firstName, lastName);
// };
//
// const myUser = {
//     name: 'Ryeker Herndon',
//     password: '12345',
//     lastLoggedIn: new Date()
// };
//
// nameMe.call(myUser, "Ryeker", "Herndon");
// nameMe.apply(myUser, ["Ryeker", "Herndon"]);  //apply requires an array of arguments.


// // Implicite Binding 3
// function productCreator() {
//   console.log(this.price, this.productName);
// };
//
// const dataValues = {
//   productName: "Rubber Duckie",
//   price: 12.99,
//   description: "Great for bathtime.",
//   method: productCreator
// };
//
// dataValues.method();

// Global Window Binding 4

function productCreator() {
  console.log(this.price, this.productName);
};

const dataValues = {
  productName: "Rubber Duckie",
  price: 12.99,
  description: "Great for bathtime.",
  method: productCreator
};

const myScope = {
  const div = document.querySelector('div');

};

dataValues.method();
