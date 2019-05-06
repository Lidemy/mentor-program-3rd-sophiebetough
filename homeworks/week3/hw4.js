function reverse(str) {
  let reverseStr = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    reverseStr += str[i];
  }
  return reverseStr;
}

function isPalindromes(str) {
  return str === reverse(str);
}

module.exports = isPalindromes;
