function sumDigPow(a, b) {
  const numbers = [];
  const result = [];
  for (let i = a; i <= b; i++) {
    numbers.push(i);
  }
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 10) {
      result.push(numbers[i]);
    } else {
      const digits = numbers[i].toString().split("");
      const sum =
        digits.reduce(
          (acc, digit, index) => acc + Math.pow(parseInt(digit), index + 1),
          0
        ) === numbers[i]
          ? result.push(numbers[i])
          : null;
    }
  }
  return result;
}

console.log(sumDigPow(1, 10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(sumDigPow(1, 100)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
console.log(sumDigPow(90, 100)); // []
console.log(sumDigPow(90, 150)); // [135]
console.log(sumDigPow(10, 150)); // [89, 135]
