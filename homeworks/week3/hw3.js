function isPrime(n) {
  if (n === 1) return false;
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(isPrime(2));

module.exports = isPrime;
