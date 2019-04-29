function reverse(str) {
  let reverseStr = ' ';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    reverseStr += str[i];
  }
  return reverseStr;
}

console.log(reverse('1,2,3,2,1'));
