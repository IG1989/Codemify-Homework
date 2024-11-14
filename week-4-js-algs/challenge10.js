// Challenge 10: Palindrome Checker

function palindrome(str) {

    str = str.toLowerCase();
    
    return str === str.split('').reverse().join('');
}

console.log(palindrome('racecar')); // true
console.log(palindrome('hello'));   // false
console.log(palindrome('a'));       // true
console.log(palindrome('madam'));   // true