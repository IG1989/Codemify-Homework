// Challenge 2: Find the Largest Number
// Write a function to find the largest number in the array.

function findLargestNumber(array) {
  let result = array[0];

  for (let i = 1; i < array.length; i++) {
    const currentNumber = array[i];
    if (currentNumber > result) {
      result = currentNumber;
    }
  }
  return result;
}

console.log(findLargestNumber([1, 2, 3, 4, 5])); // 5
console.log(findLargestNumber([10, 20, 30, 40, 50])); // 50
console.log(findLargestNumber([-1, -2, -3, -4, -5])); // -1
