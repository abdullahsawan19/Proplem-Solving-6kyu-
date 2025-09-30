function alphabetPosition(text) {
  const newArray = [];
  const arr = text.toLowerCase().split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "a") {
      let a = arr[i].replace("a", "1");
      newArray.push(a);
    } else if (arr[i] == "b") {
      let a = arr[i].replace("b", "2");
      newArray.push(a);
    } else if (arr[i] == "c") {
      let a = arr[i].replace("c", "3");
      newArray.push(a);
    } else if (arr[i] == "d") {
      let a = arr[i].replace("d", "4");
      newArray.push(a);
    } else if (arr[i] == "e") {
      let a = arr[i].replace("e", "5");
      newArray.push(a);
    } else if (arr[i] == "f") {
      let a = arr[i].replace("f", "6");
      newArray.push(a);
    } else if (arr[i] == "g") {
      let a = arr[i].replace("g", "7");
      newArray.push(a);
    } else if (arr[i] == "h") {
      let a = arr[i].replace("h", "8");
      newArray.push(a);
    } else if (arr[i] == "i") {
      let a = arr[i].replace("i", "9");
      newArray.push(a);
    } else if (arr[i] == "j") {
      let a = arr[i].replace("j", "10");
      newArray.push(a);
    } else if (arr[i] == "k") {
      let a = arr[i].replace("k", "11");
      newArray.push(a);
    } else if (arr[i] == "l") {
      let a = arr[i].replace("l", "12");
      newArray.push(a);
    } else if (arr[i] == "m") {
      let a = arr[i].replace("m", "13");
      newArray.push(a);
    } else if (arr[i] == "n") {
      let a = arr[i].replace("n", "14");
      newArray.push(a);
    } else if (arr[i] == "o") {
      let a = arr[i].replace("o", "15");
      newArray.push(a);
    } else if (arr[i] == "p") {
      let a = arr[i].replace("p", "16");
      newArray.push(a);
    } else if (arr[i] == "q") {
      let a = arr[i].replace("q", "17");
      newArray.push(a);
    } else if (arr[i] == "r") {
      let a = arr[i].replace("r", "18");
      newArray.push(a);
    } else if (arr[i] == "s") {
      let a = arr[i].replace("s", "19");
      newArray.push(a);
    } else if (arr[i] == "t") {
      let a = arr[i].replace("t", "20");
      newArray.push(a);
    } else if (arr[i] == "u") {
      let a = arr[i].replace("u", "21");
      newArray.push(a);
    } else if (arr[i] == "v") {
      let a = arr[i].replace("v", "22");
      newArray.push(a);
    } else if (arr[i] == "w") {
      let a = arr[i].replace("w", "23");
      newArray.push(a);
    } else if (arr[i] == "x") {
      let a = arr[i].replace("x", "24");
      newArray.push(a);
    } else if (arr[i] == "y") {
      let a = arr[i].replace("y", "25");
      newArray.push(a);
    } else if (arr[i] == "z") {
      let a = arr[i].replace("z", "26");
      newArray.push(a);
    }
  }
  return newArray.join(" ");
}

function alphabetPosition(text) {
  var alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  return text
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("")
    .map((x) => alphabet.indexOf(x) + 1)
    .join(" ");
}

function alphabetPosition(text) {
  var result = "";
  for (var i = 0; i < text.length; i++) {
    var code = text.toUpperCase().charCodeAt(i);
    if (code > 64 && code < 91) result += code - 64 + " ";
  }

  return result.slice(0, result.length - 1);
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
//"20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
console.log(alphabetPosition("The narwhal bacons at midnight."));
//"20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"s
