function tribonacci(signature, n) {
  const result = signature.slice(0, n);
  while (result.length < n) {
    result[result.length] = result.slice(-3).reduce((p, c) => p + c, 0);
  }
  return result;
}

function tribonacci(signature, n) {
  var trib = signature;
  for (i = 3; i < n; i++) {
    trib.push(trib[i - 1] + trib[i - 2] + trib[i - 3]);
  }
  return trib.slice(0, n);
}
console.log(tribonacci([[1, 1, 1], 10])); // [1,1,1,3,5,9,17,31,57,105]
console.log(tribonacci([[0, 0, 1], 10])); // [0,0,1,1,2,4,7,13,24,44]
console.log(tribonacci([[0, 0, 0], 10])); // [0,0,0,0,0,0,0,0,0,0]
console.log(tribonacci([[1, 1, 1], 1])); // [1]
