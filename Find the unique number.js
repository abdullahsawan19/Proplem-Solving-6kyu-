function findUniq(arr) {
  arr = arr.sort();
  if (arr[0] === arr[1]) {
    return arr[arr.length - 1];
  } else {
    return arr[0];
  }
}

function findUniq(arr) {
  arr.sort((a, b) => a - b);
  return arr[0] == arr[1] ? arr.pop() : arr[0];
}

function findUniq(arr) {
  return arr.find((n) => arr.indexOf(n) === arr.lastIndexOf(n));
}

console.log(findUniq([0, 0, 1])); //1
console.log(findUniq([1, 1, 1, 2, 1, 1])); //2
console.log(findUniq([0, 0, 0.55, 0, 0])); //0.55
