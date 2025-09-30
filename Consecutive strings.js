function longestConsec(strarr, k) {
  // Check if the input array is empty or if k is out of bounds
  if (strarr.length === 0 || k > strarr.length || k <= 0) {
    return "";
  }

  let longestString = "";
  let maxLength = 0;

  // Iterate through the array
  for (let i = 0; i <= strarr.length - k; i++) {
    // Concatenate k consecutive strings
    const concatenatedString = strarr.slice(i, i + k).join("");

    // Check if the new concatenated string is longer than the current longest
    if (concatenatedString.length > maxLength) {
      longestString = concatenatedString;
      maxLength = concatenatedString.length;
    }
  }

  return longestString;
}

function longestConsec(strarr, k) {
  var longest = "";
  for (var i = 0; k > 0 && i <= strarr.length - k; i++) {
    var tempArray = strarr.slice(i, i + k);
    var tempStr = tempArray.join("");
    if (tempStr.length > longest.length) {
      longest = tempStr;
    }
  }
  return longest;
}

console.log(
  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)
); //"abigailtheta"
console.log(
  longestConsec(
    [
      "ejjjjmmtthh",
      "zxxuueeg",
      "aanlljrrrxx",
      "dqqqaaabbb",
      "oocccffuucccjjjkkkjyyyeehh",
    ],
    1
  )
); //"oocccffuucccjjjkkkjyyyeehh"
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3)); //"ixoyx3452zzzzzzzzzzzz"
