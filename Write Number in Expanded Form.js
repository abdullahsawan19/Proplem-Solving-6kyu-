function expandedForm(num) {
  let numStr = num.toString();
  let expandedParts = [];
  for (let i = 0; i < numStr.length; i++) {
    let digit = numStr[i];
    let placeValue = Math.pow(10, numStr.length - 1 - i);

    if (digit !== "0") {
      expandedParts.push(digit * placeValue);
    }
  }
  return expandedParts.join(" + ");
}

const expandedForm = (n) =>
  n
    .toString()
    .split("")
    .reverse()
    .map((a, i) => a * Math.pow(10, i))
    .filter((a) => a > 0)
    .reverse()
    .join(" + ");

function expandedForm(num) {
  return String(num)
    .split("")
    .map((num, index, arr) => num + "0".repeat(arr.length - index - 1))
    .filter((num) => Number(num) != 0)
    .join(" + ");
}
console.log(expandedForm(2)); //'2'
console.log(expandedForm(12)); //'10 + 2'
console.log(expandedForm(42)); //'40 + 2'
console.log(expandedForm(70304)); //'70000 + 300 + 4'
