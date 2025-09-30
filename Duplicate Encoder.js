function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split("")
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
    })
    .join("");
}

function duplicateEncode(word) {
  var unique = "";
  word = word.toLowerCase();
  for (var i = 0; i < word.length; i++) {
    if (word.lastIndexOf(word[i]) == word.indexOf(word[i])) {
      unique += "(";
    } else {
      unique += ")";
    }
  }
  return unique;
}

function duplicateEncode(str) {
  const charCounts = {};
  const lowerCaseStr = str.toLowerCase();
  for (let char of lowerCaseStr) {
    if (charCounts[char]) {
      charCounts[char] += 1;
    } else {
      charCounts[char] = 1;
    }
  }
  let result = "";
  for (let char of lowerCaseStr) {
    if (charCounts[char] === 1) {
      result += "(";
    } else {
      result += ")";
    }
  }

  return result;
}
console.log(duplicateEncode("din")); //"((("
console.log(duplicateEncode("recede")); //"()()()"
console.log(duplicateEncode("Success")); //")())())"
console.log(duplicateEncode("(( @")); //"))(("
