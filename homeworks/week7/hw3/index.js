let input = '';
let point = false;
/* eslint-disable */
document.querySelector('.numbers').addEventListener('click', function (e) {
  if (e.target.getAttribute('data') != null) {
    if (e.target.getAttribute('data') !== '.') {
      input += e.target.getAttribute('data');
    } else if (point === false) {
      input += e.target.getAttribute('data');
    }
  }
  if (e.target.getAttribute('data') === '.') {
    point = true;
  }
  document.querySelector('.result').innerText = input;
});
document.querySelector('.clear').addEventListener('click', function (e) {
  input = '';
  localStorage.setItem('input1', '');
  localStorage.setItem('input2', '');
  localStorage.setItem('cal', '');
  point = false;
  document.querySelector('.result').innerText = '';
});
document.querySelector('.operate').addEventListener('click', function (e) {
  localStorage.setItem('input1', input);
  localStorage.setItem('cal', e.target.getAttribute('data'));
  input = '';
  point = false;
});
document.querySelector('.equal').addEventListener('click', function (e) {
  localStorage.setItem('input2', input);
  const input1 = Number(localStorage.getItem('input1'));
  const cal = localStorage.getItem('cal');
  const input2 = Number(localStorage.getItem('input2'));
  point = false;
  let result = 0;
  if (cal === '+') {
    result = input1 + input2;
  }
  if (cal === '-') {
    result = input1 - input2;
  }
  if (cal === 'x') {
    result = input1 * input2;
  }
  if (cal === '/') {
    result = input1 / input2;
  }
  document.querySelector('.result').innerText = '' + result;
  input = '';
});
