const loginFormElem = document.querySelector('.login-form');

loginFormElem.addEventListener('submit', event => {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (password.value.trim() === '' || email.value.trim() === '') {
    alert('All form fields must be filled in');
  }

  const userLoginInformation = {
    email: email.value.trim(),
    password: password.value.trim(),
  };

  console.log(userLoginInformation);

  event.currentTarget.reset();
});
