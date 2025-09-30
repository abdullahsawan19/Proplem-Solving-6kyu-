function toCamelCase(str) {
  let arr = str.split("");
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == "_" || arr[i] == "-") {
      arr[i + 1] = arr[i + 1].toUpperCase();
      arr[i] = "";
    }
  }
  return arr.join("");
}

function toCamelCase(str) {
  let regExp = /[-_]\w/gi;
  return str.replace(regExp, function (match) {
    return match.charAt(1).toUpperCase();
  });
}

console.log(toCamelCase("the-stealth-warrior")); //"theStealthWarrior"
console.log(toCamelCase("The_Stealth_Warrior")); //"TheStealthWarrior"
console.log(toCamelCase("The_Stealth-Warrior")); //"TheStealthWarrior"
