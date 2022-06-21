const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');
const inputs = form.querySelectorAll('.form-control input');

const validateEmail = (emailToValidate) => {
  const res =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return res.test(String(emailToValidate));
};

const showError = (element) => {
  element.parentElement.classList.add('error');
};

const validateFields = (e) => {
  if (firstName.value.trim() === '') {
    e.preventDefault();
    showError(firstName);
    firstName.setAttribute('placeholder', '');
  }
  if (lastName.value.trim() === '') {
    e.preventDefault();
    showError(lastName);
    lastName.setAttribute('placeholder', '');
  }
  if (password.value.trim() === '') {
    e.preventDefault();
    showError(password);
    password.setAttribute('placeholder', '');
  }
  if (!validateEmail(email.value.trim())) {
    e.preventDefault();
    showError(email);
    email.setAttribute('placeholder', 'email@example/com');
  }
};

form.addEventListener('submit', (e) => {
  validateFields(e);
});

inputs.forEach((input) => {
  input.addEventListener('focus', (e) => {
    input.parentElement.classList.remove('error');
  });
});
