function isPangram(string) {
  let words = string.toLowerCase();
  if (
    words.includes("a") &&
    words.includes("b") &&
    words.includes("c") &&
    words.includes("d") &&
    words.includes("e") &&
    words.includes("f") &&
    words.includes("g") &&
    words.includes("h") &&
    words.includes("i") &&
    words.includes("j") &&
    words.includes("k") &&
    words.includes("l") &&
    words.includes("m") &&
    words.includes("n") &&
    words.includes("o") &&
    words.includes("p") &&
    words.includes("q") &&
    words.includes("r") &&
    words.includes("s") &&
    words.includes("t") &&
    words.includes("u") &&
    words.includes("v") &&
    words.includes("w") &&
    words.includes("x") &&
    words.includes("y") &&
    words.includes("z")
  ) {
    return true;
  } else {
    return false;
  }
}

function isPangram(string) {
  return (string.match(/([a-z])(?!.*\1)/gi) || []).length === 26;
}

function isPangram(string) {
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function (x) {
    return string.indexOf(x) !== -1;
  });
}

function isPangram(string) {
  return "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .every((x) => string.toLowerCase().includes(x));
}
console.log(isPangram("The quick brown fox jumps over the lazy dog.")); //true
console.log(isPangram("This is not a pangram.")); //false
