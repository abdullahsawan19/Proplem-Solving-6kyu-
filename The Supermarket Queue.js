function queueTime(customers, n) {
  var w = new Array(n).fill(0);
  for (let t of customers) {
    let idx = w.indexOf(Math.min(...w));
    w[idx] += t;
  }
  return Math.max(...w);
}

console.log(queueTime([5, 3, 4], 1)); // 12
console.log(queueTime([10, 2, 3, 3], 2)); // 10
console.log(queueTime([2, 3, 10], 2)); // 12
