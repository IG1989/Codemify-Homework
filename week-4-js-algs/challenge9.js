// Challenge 9: Find the Longest Word in a String

function findLongestWord(sentence) {
    const words = sentence.split(" ");
    let longestWordLength = 0;

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWordLength) {
            longestWordLength = words[i].length;
        }
    }
    return longestWordLength;
}

console.log(findLongestWord('The quick brown fox')); // 5
console.log(findLongestWord('Hello world')); // 5
console.log(findLongestWord('')); // 0
console.log(findLongestWord('OneWord')); // 7