function inArray(a1, a2) {
  let a = [];

  for (let i = 0; i < a1.length; i++) {
    for (let j = 0; j < a2.length; j++) {
      if (a2[j].includes(a1[i]) && !a.includes(a1[i])) {
        a.push(a1[i]);
      }
    }
  }
  return a.sort();
}

function inArray(a1, a2) {
  let a = [];

  for (let i = 0; i < a1.length; i++) {
    for (let j = 0; j < a2.length; j++) {
      for (let s = 0; s <= a2[j].length - a1[i].length; s++) {
        let part = a2[j].substring(s, s + a1[i].length);
        if (part === a1[i]) {
          a.push(a1[i]);
        }
      }
    }
  }
  return [...new Set(a)].sort();
}

console.log(
  inArray(
    ["xyz", "live", "strong"],
    ["lively", "alive", "harp", "sharp", "armstrong"]
  )
); // should return ["live", "strong"]
