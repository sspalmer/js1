// **** DAY8

// Forms
console.log(document.forms.login.username.value); // or ["login"] js will not recognize a numbered name unless it's in brackets like ["3"].

document.forms.login.password.addEventListener('keyup', e => {
  console.log(e.target.value);
});

document.forms.login.submit.addEventListener('click', e => {
  e.preventDefault();
  console.log(e.target.value);
});
