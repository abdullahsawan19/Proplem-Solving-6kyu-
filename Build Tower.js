function towerBuilder(floors) {
  const tower = [];
  for (let i = 1; i <= floors; i++) {
    // Calculate the number of spaces and stars
    const spaces = " ".repeat(floors - i);
    const stars = "*".repeat(2 * i - 1);

    // Construct the row and add it to the tower
    tower.push(spaces + stars + spaces);
  }

  return tower;
}

function towerBuilder(nFloors) {
  var tower = [];
  for (var i = 0; i < nFloors; i++) {
    tower.push(
      " ".repeat(nFloors - i - 1) +
        "*".repeat(i * 2 + 1) +
        " ".repeat(nFloors - i - 1)
    );
  }
  return tower;
}
console.log(towerBuilder(1)); //["*"]
console.log(towerBuilder(2)); //[" * ","***"]
console.log(towerBuilder(3)); //["  *  "," *** ","*****"]
