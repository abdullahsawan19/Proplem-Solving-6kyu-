function isValidWalk(walk) {
  // Initialize counters for each direction
  let north = 0;
  let south = 0;
  let east = 0;
  let west = 0;

  // Iterate through each direction in the walk
  for (let dir of walk) {
    switch (dir) {
      case "n":
        north++;
        break;
      case "s":
        south++;
        break;
      case "e":
        east++;
        break;
      case "w":
        west++;
        break;
    }
  }

  // Check if the walk takes exactly 10 minutes and returns to the starting point
  return walk.length === 10 && north === south && east === west;
}

function isValidWalk(walk) {
  const north = walk.filter((item) => {
    return item === "n";
  }).length;
  const south = walk.filter((item) => {
    return item === "s";
  }).length;
  const east = walk.filter((item) => {
    return item === "e";
  }).length;
  const west = walk.filter((item) => {
    return item === "w";
  }).length;

  return walk.length === 10 && north === south && east === west;
}
console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s  "])); //true
console.log(
  isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"])
); //false
console.log(isValidWalk(["w"])); //false
console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"])); //false
