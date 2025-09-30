function triangular(n) {
  if (n < 0 || n == 0) {
    return 0;
  }
  return (n * (n + 1)) / 2;
}

console.log(triangular(2)); //
console.log(triangular(3)); //
console.log(triangular(8)); //
