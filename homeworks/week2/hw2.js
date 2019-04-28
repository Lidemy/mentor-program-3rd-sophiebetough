
function capitalize(str) {
  const result = str.replace(str[0], str[0].toUpperCase());

  return result;
}

console.log(capitalize(',hello'));
