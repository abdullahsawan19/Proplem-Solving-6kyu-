function narcissistic(number) {
  const strNum = number.toString();
  const numDigits = strNum.length;
  const sum = strNum.split("").reduce((acc, digit) => {
    return acc + Math.pow(Number(digit), numDigits);
  }, 0);
  return sum === number;
}

console.log(narcissistic(1652)); //false
console.log(narcissistic(153)); //true
