function digitalRoot(n) {
  const digits = n.toString().split("");

  let sum = digits.reduce((acc, digit) => acc + parseInt(digit), 0);

  return sum < 10 ? sum : digitalRoot(sum);
}
function digitalRoot(n) {
  return ((n - 1) % 9) + 1;
}

function digitalRoot(n) {
  n = eval(n.toString().split("").join("+"));

  if (n > 9) {
    return digitalRoot(n);
  }

  return n;
}

function digitalRoot(n) {
  while (n.toString().length >= 2) {
    n = n
      .toString()
      .split("")
      .reduce((p, c) => Number(p) + Number(c));
  }

  return n;
}

console.log(digitalRoot(16)); //7
console.log(digitalRoot(132189)); //6
