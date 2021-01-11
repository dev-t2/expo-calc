const form = document.querySelector('form');
const id = document.querySelector('#id');
const password = document.querySelector('#password');
const passwordCheck = document.querySelector('#password-check');

const message = (element, message) => {
  element.parentNode.querySelector('.alert').innerText = message;
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (id.value.length < 6) {
    message(id, '아이디는 6자리 이상이여야 합니다.');
  } else {
    message(id, '');
  }

  if (password.value.length < 10) {
    message(password, '비밀번호는 10자리 이상이여야 합니다.');
  } else {
    message(password, '');
  }

  if (passwordCheck.value !== password.value) {
    message(passwordCheck, '비밀번호를 동일하게 입력해야 합니다.');
  } else {
    message(passwordCheck, '');
  }
});
