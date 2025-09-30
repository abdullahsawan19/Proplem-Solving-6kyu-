function solution(str) {
  if (str.length === 0) return [];
  const result = [];
  for (let i = 0; i < str.length; i += 2) {
    if (i + 1 < str.length) {
      result.push(str.substring(i, i + 2));
    } else {
      result.push(str.substring(i) + "_");
    }
  }
  return result;
}

function solution(s) {
  return (s + "_").match(/.{2}/g) || [];
}

function solution(str) {
  var i = 0;
  var result = new Array();
  if (str.length % 2 !== 0) {
    str = str + "_";
  }
  while (i < str.length) {
    result.push(str[i] + str[i + 1]);
    i += 2;
  }
  return str;
}

console.log(solution("abcdef")); //["ab", "cd", "ef"]
console.log(solution("abcdefg")); //["ab", "cd", "ef", "g_"]
console.log(solution("")); //[]
