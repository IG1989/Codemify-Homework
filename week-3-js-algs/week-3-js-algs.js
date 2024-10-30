// 1. Finish coding challenge. Create an “if statement” that checks if variable “first” is bigger than variable “second”:

const first = 5;
const second = 4;
if(5 > 4) {
    console.log('First is bigger')
}

// 2. Create a function that returns the length of a string
function getStringLength(str){
return str.length;
}

console.log(getStringLength('Ivan'));
console.log(getStringLength('Alexa'));

// 3. Create a function called divideByTwo. It should accept 1 parameter, divide it  by 2 and return the result of the division
function divideByTwo(number) {
    return number / 2;
}

const result = divideByTwo(6);
console.log(result);
// 4 - Finish the function. It accepts 2 params, adds them up and returns the sum of two

function sum(a,b) {
 return a + b;
}
console.log(sum(1, 3));
console.log(sum(2, 3));
console.log(sum(33, 2));

// 5 - Finish the function. It should accept one parameter, 'number', check if it is greater than 5 and return true or false.
function isBiggerThan5(number) {
    if(number > 5){
      return true
    }
    else {
        return false
    }
}
console.log(isBiggerThan5(6))
console.log(isBiggerThan5(5))
console.log(isBiggerThan5(4))
console.log(isBiggerThan5(1))

// 6 - Finish the function. It should accept two parameters and return the larger one.

function findBiggerNumber(firstNum, secondNum) {
    if(firstNum > secondNum){
        console.log('first is bigger')
    }
    else {
        console.log('second is bigger')
    }
}
console.log(findBiggerNumber(6, 7))
console.log(findBiggerNumber(4, 2))
console.log(findBiggerNumber(1, 1))

// 7 - Create the function. It should accept two string parameters and return the longer one

function longerString(str1, str2) {
    return str1.length >= str2.length ? str1 : str2;
}

console.log(longerString('codemify', 'test'));           
console.log(longerString('automation', 'coding'));        
console.log(longerString('automation', 'the codemify'));

// 8 - Equality Check. Create a function that returns true or false that matches the examples below
function checkEquality (str1, str2){
    return str1 === str2;
}
console.log(checkEquality(5, 5));             
console.log(checkEquality('hello', 'hello')); 
console.log(checkEquality(5, '5'));           
console.log(checkEquality(true, false));  

// 9 - Older Than Me: Create a function that outputs a string specifying if the person in the example below is older or younger than you."

function olderThanMe(personAge) {
    const myAge = 35;

    if (personAge > myAge) {
        return "The person is older than me";
    } else if (personAge < myAge) {
        return "I am older than person";  
    } else {
        return "We are the same age";  
    }
}
console.log(olderThanMe(30)); 
console.log(olderThanMe(37)); 
console.log(olderThanMe(35))