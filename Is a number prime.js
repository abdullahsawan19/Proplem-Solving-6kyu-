function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(1)); //false
console.log(isPrime(73)); //true(prime)
console.log(isPrime(75)); //false
console.log(isPrime(3)); //true(prime)
console.log(isPrime(5)); //true(prime)
console.log(isPrime(7)); //true(prime)
console.log(isPrime(6)); //false
