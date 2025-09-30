function digPow(n, p) {
  let myFunc = (num) => Number(num);
  let intArr = Array.from(String(n), myFunc);
  let pow = intArr.map((number, index) => Math.pow(number, p + index));
  let plus = pow.reduce((acc, curr) => acc + curr);
  const k = plus / n;
  return Number.isInteger(k) ? k : -1;
}

function digPow(n, p) {
  var x = String(n)
    .split("")
    .reduce((s, d, i) => s + Math.pow(d, p + i), 0);
  return x % n ? -1 : x / n;
}

function digPow(n, p) {
  var ans =
    n
      .toString()
      .split("")
      .map((v, i) => Math.pow(parseInt(v), i + p))
      .reduce((a, b) => a + b) / n;
  return ans % 1 == 0 ? ans : -1;
}

console.log(digPow(89, 1)); //1
console.log(digPow(92, 1)); //-1
console.log(digPow(46288, 3)); //51
