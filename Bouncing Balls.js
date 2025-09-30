function bouncingBall(h, bounce, window) {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
    return -1;
  } else {
    let count = 1;
    h = h * bounce;
    while (h > window) {
      count += 2;
      h *= bounce;
    }
    return count;
  }
}

function bouncingBall(h, bounce, window) {
  var pass = 0;
  if (h > 0 && bounce > 0 && bounce < 1 && window < h && window > 0) {
    for (var i = h; i > window; i *= bounce) {
      pass += 2;
    }
  }
  return pass - 1;
}

console.log(bouncingBall(3.0, 0.66, 1.5)); //3
console.log(bouncingBall(30.0, 0.66, 1.5)); //15
