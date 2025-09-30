function high(x) {
  let words = x.split(" ");
  let highestScore = 0;
  let highestScoringWord = "";
  for (const word of words) {
    let currentScore = 0;

    for (const char of word) {
      currentScore += char.charCodeAt(0) - 96;
    }

    if (currentScore > highestScore) {
      highestScore = currentScore;
      highestScoringWord = word;
    }
  }

  return highestScoringWord;
}

function high(x) {
  let alphabets = [
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

  let words = x.split(" ");
  let highestScore = 0;
  let highestScoreWord = "";

  for (let word of words) {
    let lettersSum = 0;

    for (let letter of word) {
      lettersSum += alphabets.indexOf(letter) + 1;
    }

    if (lettersSum > highestScore) {
      highestScore = lettersSum;
      highestScoreWord = word;
    }
  }

  return highestScoreWord;
}

console.log(high("man i need a taxi up to ubud")); //'taxi'
console.log(high("what time are we climbing up the volcano")); //'volcano'
console.log(high("take me to semynak")); //'semynak'
