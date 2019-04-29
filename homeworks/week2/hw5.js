function join(arr, concatStr) {
  let newString = arr[0];
  for (let i = 1; i < arr.length; i += 1) {
    newString += concatStr + arr[i];
  }

  return newString;
}

function repeat(str, times) {
  let newString = ' ';
  for (let i = 1; i <= times; i += 1) {
    newString += str;
  }
  return newString;
}

console.log(join(['a', 1, 'b', 2, 'c', 3], ','));
console.log(repeat('yoyo', 2));
