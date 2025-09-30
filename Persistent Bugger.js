function persistence(num) {
  for (var i = 0; num > 9; i++) {
    num = num
      .toString()
      .split("")
      .reduce((t, c) => c * t);
  }
  return i;
}

function persistence(num) {
  var times = 0;

  num = num.toString();

  while (num.length > 1) {
    times++;
    num = num
      .split("")
      .map(Number)
      .reduce((a, b) => a * b)
      .toString();
  }

  return times;
}

function persistence(num) {
  let count = 0;
  while (num >= 10) {
    let digits = num.toString().split("");
    num = 1;
    for (let i = 0; i < digits.length; i++) {
      num *= parseInt(digits[i]);
    }
    count++;
  }
  return count;
}

function persistence(num) {
  let result = 0,
    str = String(num);
  while (str.length > 1) {
    str = String([...str].reduce((prev, curr) => prev * curr));
    result++;
  }
  return result;
}
console.log(persistence(39)); //3
console.log(persistence(999)); //4
console.log(persistence(4)); //0
console.log(persistence(25)); //2
