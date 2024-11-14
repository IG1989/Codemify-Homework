// Challenge 1: Find the Longest String

function findLongestString(array) {
  let result = array[0];

  for (let i = 1; i < array.length; i++) {
    const currentString = array[i];
    if (currentString.length > result.length) {
      result = currentString;
    }
  }
  return result;
}

console.log(findLongestString(["I", "am", "learning", "JavaScript"])); // "JavaScript"
console.log(findLongestString(["one", "two", "three"])); // "three"
console.log(findLongestString(["1", "22", "333"])); // "333"
