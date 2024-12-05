// Challenge 1: Find the Longest String
// Write a function to find the longest string in the array.

function findLongestString(array){
    if (array.length === 0) {
}

let result = array[0];
    for (let i = 0; i < array.length; i++) {
        const currentString = array[i];
        if(currentString.length > result.length){
            result = currentString;
        }
    }
    return result;
}

console.log(findLongestString(["I", "am", "learning", "JavaScript"])); // "JavaScript"
console.log(findLongestString(["one", "two", "three"])); // "three"
console.log(findLongestString(["1", "2222", "333"])); // "333"
