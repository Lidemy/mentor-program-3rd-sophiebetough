
function repeat(str, times) {
  let newString = '';
  for (let i = 1; i <= times; i += 1) {
    newString += str;
  }
  return newString;
}


function stars(n) {
  const result = [];
  for (let i = 1; i <= n; i += 1) {
    result.push(repeat('*', i));
  }
  return result;
}


module.exports = stars;
