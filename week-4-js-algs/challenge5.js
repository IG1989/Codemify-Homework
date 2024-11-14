// Challenge 5: Sum of Numbers

function sumNumbers(array) {
let sum = 0;
for (let i = 0; i < array.length; i++) {
   sum = sum + array[i]
    
}    
return sum;
}

console.log(sumNumbers([1, 2, 3, 4, 5])); // 15
console.log(sumNumbers([10, 20, 30, 40, 50])); // 150
console.log(sumNumbers([-1, -2, -3, -4, -5])); // -15