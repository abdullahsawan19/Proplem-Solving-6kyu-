var countBits = function (n) {
  const binary = n.toString(2).split("");
  const fl = binary.filter((ele) => ele == "1");
  return fl.length;
};
countBits = (n) => n.toString(2).split("0").join("").length;

var countBits = function (n) {
  return (n.toString(2).match(/1/g) || []).length;
};

var countBits = function (n) {
  return n
    .toString(2)
    .split("")
    .reduce((a, b) => Number(a) + Number(b), 0);
};

console.log(countBits(0)); //0
console.log(countBits(4)); //1
console.log(countBits(7)); //3
