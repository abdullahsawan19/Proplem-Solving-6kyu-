function findOdd(arr) {
  var result,
    num = 0;

  arr = arr.sort();
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      num++;
    } else {
      num++;
      if (num % 2 != 0) {
        result = arr[i];
        break;
      }
    }
  }
  return result;
}

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

function findOdd(arr) {
  return arr.find((item, index) => arr.filter((el) => el == item).length % 2);
}

console.log(findOdd([7])); //7
console.log(findOdd([1, 1, 2])); //2
console.log(findOdd([0, 1, 0, 1, 0])); //0
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])); //4
