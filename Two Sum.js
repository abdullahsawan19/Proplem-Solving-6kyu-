function twoSum(numbers, target) {
  let arr = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        arr.push(i);
        arr.push(j);
        return arr;
      }
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([-1, 0], -1)); // [0, 1]
console.log(twoSum([0, 4, 3, 0], 0)); // [0, 3]
