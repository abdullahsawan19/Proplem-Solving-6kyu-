function validBraces(brace) {
  const stack = [];
  const mapping = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  for (let char of brace) {
    if (char in mapping) {
      if (stack.length === 0) {
        return false;
      }
      const topElement = stack.pop();
      if (topElement !== mapping[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
}

// witness me
function validBraces(braces) {
  return braces.includes("()")
    ? validBraces(braces.replace("()", ""))
    : braces.includes("[]")
    ? validBraces(braces.replace("[]", ""))
    : braces.includes("{}")
    ? validBraces(braces.replace("{}", ""))
    : braces.length > 0
    ? false
    : true;
}

console.log(validBraces("()")); // true
console.log(validBraces("()[]{}")); // true
console.log(validBraces("(]")); // false
console.log(validBraces("([{}])")); // true
console.log(validBraces("{[()]}")); // true
console.log(validBraces("{[(])}")); // false
console.log(validBraces("{[}")); // false
console.log(validBraces("()))")); //false
console.log(validBraces("()")); //true
console.log(validBraces("[]")); //true
console.log(validBraces("{}")); //true
console.log(validBraces("(){}[]")); //true
console.log(validBraces("([{}])")); //true
console.log(validBraces("(}")); //false
