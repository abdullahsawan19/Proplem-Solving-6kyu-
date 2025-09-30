function deleteNth(arr, x) {
  var cache = {};
  return arr.filter(function (n) {
    cache[n] = (cache[n] || 0) + 1;
    return cache[n] <= x;
  });
}

function deleteNth(inputList, N) {
  const result = [];
  const count = {};

  for (const number of inputList) {
    // Initialize count for the number if not already present
    if (!count[number]) {
      count[number] = 0;
    }

    // Check if we can add the number to the result
    if (count[number] < N) {
      result.push(number);
      count[number]++; // Increment the count for this number
    }
  }

  return result;
}

console.log(deleteNth([20, 37, 20, 21], 1)); //[20,37,21]
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)); //[1, 1, 3, 3, 7, 2, 2, 2]
console.log(deleteNth([12, 39, 19, 39, 39, 19, 12], 1)); //
