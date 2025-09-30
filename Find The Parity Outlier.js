function findOutlier(int) {
  let evenNum = int.filter((i) => i % 2 == 0);
  let oddNum = int.filter((i) => i % 2 !== 0);
  if (evenNum.length > oddNum.length) {
    return +oddNum.join();
  } else {
    return +evenNum.join();
  }
}

function findOutlier(int) {
  var even = int.filter((a) => a % 2 == 0);
  var odd = int.filter((a) => a % 2 !== 0);
  return even.length == 1 ? even[0] : odd[0];
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])); //11
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21])); //160
console.log(findOutlier([0, 1, 2])); //1
console.log(findOutlier([1, 2, 3])); //2
console.log(findOutlier([2, 6, 8, 10, 3])); //3
console.log(findOutlier([0, 0, 3, 0, 0])); //3
console.log(findOutlier([1, 1, 0, 1, 1])); //0
