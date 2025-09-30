function wave(str) {
  if (str.length === 0) return [];
  const charArray = str.split("");
  const arr = [];
  for (let i = 0; i < charArray.length; i++) {
    if (charArray[i] === " ") continue;
    const newStr =
      str.slice(0, i) + charArray[i].toUpperCase() + str.slice(i + 1);
    arr.push(newStr);
  }
  return arr;
}


console.log(wave("hello")); // ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
console.log(wave(" gap ")); // [" Gap ", " gAp ", " gaP "]
console.log(wave("")); // []
