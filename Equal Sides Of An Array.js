function findEvenIndex(arr) {
  let left = 0;
  let right = arr.reduce((s, n) => s + n, 0);
  for (let i = 0; i < arr.length; i++) {
    right -= arr[i];
    if (left === right) return i;
    left += arr[i];
  }
  return right;
}

function findEvenIndex(arr) {
  var sum = 0,
    leftSum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  for (var i = 0; i < arr.length; i++) {
    sum -= arr[i];
    if (leftSum === sum) {
      return i;
    }
    leftSum += arr[i];
  }
  return -1;
}

function findEvenIndex(arr) {
  return arr.findIndex(
    (e, i, a) =>
      a.slice(0, i).reduce((p, c) => p + c, 0) ==
      a.slice(i + 1).reduce((p, c) => p + c, 0)
  );
}
console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])); // 3
console.log(findEvenIndex([1, 100, 50, -51, 1, 1])); // 1
console.log(findEvenIndex([1, 2, 3, 4, 5, 6])); // -1
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35])); //3
