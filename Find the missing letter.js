function findMissingLetter(array) {
  // Get the Unicode character code of the first letter in the array
  let first = array[0].charCodeAt(0);

  // Loop through the array starting from the second element
  for (let i = 1; i < array.length; i++) {
    // Check if the expected character code (first + i)
    // matches the character code of the current letter in the array
    if (first + i !== array[i].charCodeAt(0)) {
      // If there's a mismatch, return the missing letter
      return String.fromCharCode(first + i);
    }
  }
  // If no missing letter is found, the function will implicitly return undefined
}
console.log(findMissingLetter(["a", "b", "c", "d", "f"])); //'e'
console.log(findMissingLetter(["O", "Q", "R", "S"])); //'P'
