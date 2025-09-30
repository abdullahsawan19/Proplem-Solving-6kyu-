function spinWords(s) {
  return s
    .split(" ")
    .map((word) =>
      word.length >= 5 ? word.split("").reverse().join("") : word
    )
    .join(" ");
}

function spinWords(words) {
  return words
    .split(" ")
    .map(function (word) {
      return word.length > 4 ? word.split("").reverse().join("") : word;
    })
    .join(" ");
}

function spinWords(str) {
  let strArr = str.split(" ");
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length >= 5)
      strArr[i] = strArr[i].split("").reverse().join("");
  }
  return strArr.join(" ");
}

console.log(spinWords("Hey fellow warriors")); //"Hey wollef sroirraw"
console.log(spinWords("This is a test ")); //"This is a test"
