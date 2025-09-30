function sortArray(array) {
  var odds = [];
  //loop, if it's odd, push to odds array
  for (var i = 0; i < array.length; ++i) {
    if (array[i] % 2 !== 0) {
      odds.push(array[i]);
    }
  }
  //sort odds from smallest to largest
  odds.sort(function (a, b) {
    return a - b;
  });

  //loop through array, replace any odd values with sorted odd values
  for (var j = 0; j < array.length; ++j) {
    if (array[j] % 2 !== 0) {
      array[j] = odds.shift();
    }
  }

  return array;
}
function sortArray(arr) {
  const odds = arr.filter((x) => x % 2).sort((a, b) => a - b);
  return arr.map((x) => (x % 2 ? odds.shift() : x));
}
console.log(sortArray([7, 1]));
//[1, 7]
console.log(sortArray([5, 8, 6, 3, 4]));
//[3, 8, 6, 5, 4]
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
//[1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
