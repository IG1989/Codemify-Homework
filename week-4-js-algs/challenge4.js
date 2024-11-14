// Challenge 4: Find Numbers Greater than Ten

function findNumbersGreaterThanTen(array) {
   let result = [];
   for (let i = 0; i < array.length; i++) {
    const currentNum = array[i];
    if (currentNum > 10) {
        result.push(currentNum)
    }
   }
   return result
}

console.log(findNumbersGreaterThanTen([5, 10, 15, 20])); // [15, 20]
console.log(findNumbersGreaterThanTen([1, 2, 3, 4, 5])); // []
console.log(findNumbersGreaterThanTen([10, 20, 30, 40, 50])); // [20, 30, 40, 50