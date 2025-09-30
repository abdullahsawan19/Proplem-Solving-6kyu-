function arrayDiff(a, b) {
  if (a.length === 0) {
    return [];
  } else if (b.length === 0) {
    return a;
  }
  let newArray = [];
  a.forEach((ele) => {
    if (!b.includes(ele)) {
      newArray.push(ele);
    }
  });
  return newArray;
}

function array_diff(a, b) {
  return a.filter((e) => !b.includes(e));
}

function array_diff(a, b) {
  b = new Set(b);
  return a.filter((v) => !b.has(v));
}
console.log(arrayDiff([1, 2], [1])); //[2]
console.log(arrayDiff([1, 2, 2, 2, 3], [2])); //[1,3]
console.log(arrayDiff([1, 2, 3], [1, 2])); //[3]
