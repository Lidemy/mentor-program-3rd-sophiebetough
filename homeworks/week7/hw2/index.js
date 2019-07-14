const email = document.querySelector('input[name=email]');
const nickname = document.querySelector('input[name=nickname]');
const payment1 = document.querySelector('input[id=payment1]');
const payment2 = document.querySelector('input[id=payment2]');
const occupation = document.querySelector('input[name=occupation]');
const information = document.querySelector('input[name=information]');
const program = document.querySelector('input[name=program]');
const other = document.querySelector('input[name=other');
let flag = true;
/* eslint-disable */
document.querySelector('.form').addEventListener('submit', function (e) {
  const cleanFlag = document.querySelectorAll('.formRow');
  for (let i = 0; i < 4; i += 1) {
    cleanFlag[i].classList.remove('active');
  }
  if (email.value === '') {
    e.preventDefault();
    email.closest('.formRow').classList.add('active');
    flag = false;
  }
  if (nickname.value === '') {
    e.preventDefault();
    nickname.closest('.formRow').classList.add('active');
    flag = false;
  }
  if (payment1.checked === false && payment2.checked === false) {
    e.preventDefault();
    payment1.closest('.formRow').classList.add('active');
    flag = false;
  }
  if (occupation.value === '') {
    e.preventDefault();
    occupation.closest('.formRow').classList.add('active');
    flag = false;
  }
  if (information.value === '') {
    e.preventDefault();
    information.closest('.formRow').classList.add('active');
    flag = false;
  }
  if (program.value === '') {
    e.preventDefault();
    program.closest('.formRow').classList.add('active');
    flag = false;
  } else if (flag) {
    alert('送出表單');
    console.log(email.value);
    console.log(nickname.value);
    console.log(payment1.value);
    console.log(payment2.value);
    console.log(occupation.value);
    console.log(information.value);
    console.log(program.value);
    console.log(other.value);
  }
});
