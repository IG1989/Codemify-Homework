// Challenge 1: Simple check
function checkGreaterTen(number) {
    if (number > 10) { 
        return "Greater than 10"; 
    } else {
        return "Less than or equal to 10"; 
    }
}

console.log(checkGreaterTen(15)); 
console.log(checkGreaterTen(5));  
console.log(checkGreaterTen(10)); 

// Challenge 2: Multi-level conditions
function assignGrade(score) {
    if (score >= 90)  {
        return "A"; 
        } else if (score >= 80){
            return "B";
        } else if (score >=70){
            return "C";
        } else if (score >= 60){
            return "D";
        } else if (score >= 50){
            return "F";
        }
    } 
console.log(assignGrade(95)); 
console.log(assignGrade(85)); 
console.log(assignGrade(75));
console.log(assignGrade(65)); 
console.log(assignGrade(55)); 

// Challenge 3: Truncate String 
function truncateString (str, maxLength){
    if (str.length > maxLength) {
        return str.slice (0, maxLength) + "...";
    } else {
        return str
    }
}
console.log(truncateString("Hello, World!", 5));  
console.log(truncateString("JavaScript", 10));   
console.log(truncateString("OpenAI is amazing!", 12)); 

// Challenge 4: Multi-level conditions II
function checkEligibility(age) {
    if (age >= 21) {
        return "Can vote, drive, drink";
    } else if (age >= 18) {
        return "Can drive and vote";
    } else if (age >= 16) {
        return "Can drive";
    } else {
        return "Can't vote, Drive or drink"
    }
}

console.log(checkEligibility(15)); 
console.log(checkEligibility(16)); 
console.log(checkEligibility(18));
console.log(checkEligibility(22)); 

// Challenge 5: Multi-level conditions III
function isLeapYear(year) {
    if (year % 400 === 0) {
        return "Leap year";
    } else if (year % 100 === 0) {
        return "Not a leap year";
    } else if (year % 4 === 0) {
        return "Leap year";
    } else {
        return "Not a leap year";
    }
}

console.log(isLeapYear(2000)); // "Leap year"
console.log(isLeapYear(1800)); // "Not a leap year"
console.log(isLeapYear(2004)); // "Leap year"
console.log(isLeapYear(2021)); // "Not a leap year"

// Challenge 6: Season Checker
checkSeason(month) {
    if (month === 12 || month === 1 || month === 2) {
        return "Winter";
    } else if (month >= 3 && month <= 5) {
        return "Spring";
    } else if (month >= 6 && month <= 8) {
        return "Summer";
    } else if (month >= 9 && month <= 11) {
        return "Autumn";
    } else {
        return "Invalid month"; // Handle invalid inputs
    }
}
// Challenge 7: FizzBuzz Simplified
console.log(checkSeason(1));  // "Winter"
console.log(checkSeason(4));  // "Spring"
console.log(checkSeason(7));  // "Summer"
console.log(checkSeason(10)); // "Autumn"

function fizzBuzzSimplified(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return "FizzBuzz";
    } else if (number % 3 === 0) {
        return "Fizz";
    } else if (number % 5 === 0) {
        return "Buzz";
    } else {
        return number;
    }
}
console.log(fizzBuzzSimplified(3));   // "Fizz"
console.log(fizzBuzzSimplified(5));   // "Buzz"
console.log(fizzBuzzSimplified(15));  // "FizzBuzz"
console.log(fizzBuzzSimplified(2));   // 2

// Challenge 8: Temperature Checker
function checkTemp(temp) {
    if (temp < 32) {
        return "Freezing";
    } else if (temp >= 32 && temp <= 50) {
        return "Cold";
    } else if (temp >= 51 && temp <= 70) {
        return "Mild";
    } else if (temp >= 71 && temp <= 90) {
        return "Warm";
    } else {
        return "Hot";
    }
}

console.log(checkTemp(30)); // "Freezing"
console.log(checkTemp(45)); // "Cold"
console.log(checkTemp(65)); // "Mild"
console.log(checkTemp(75)); // "Warm"
console.log(checkTemp(95)); // "Hot"

// Challenge 9: Traffic Sign
function checkSign(color) {
    if (color === "red") {
        return "Stop";
    } else if (color === "yellow") {
        return "Caution";
    } else if (color === "green") {
        return "Go";
    } else {
        return "Invalid color"; // Handles cases where the color is not recognized
    }
}
console.log(checkSign("red"));    // "Stop"
console.log(checkSign("yellow")); // "Caution"
console.log(checkSign("green"));  // "Go"
console.log(checkSign("blue"));   // "Invalid color"

// Challenge 10: Meal Suggestion
function suggestMeal(time, diet) {
    if (time === "morning") {
        if (diet === "vegan") {
            return "Fruit smoothie with oats";
        } else if (diet === "vegetarian") {
            return "Vegetarian scrambled eggs with toast";
        } else if (diet === "omnivore") {
            return "Bacon and eggs with toast";
        }
    } else if (time === "afternoon") {
        if (diet === "vegan") {
            return "Vegan burrito";
        } else if (diet === "vegetarian") {
            return "Vegetarian pizza";
        } else if (diet === "omnivore") {
            return "Chicken sandwich";
        }
    } else if (time === "evening") {
        if (diet === "vegan") {
            return "Vegan lentil stew";
        } else if (diet === "vegetarian") {
            return "Vegetarian pasta";
        } else if (diet === "omnivore") {
            return "Grilled salmon with vegetables";
        }
    }
    return "Invalid input"; // Handles cases with unrecognized time or diet
}
console.log(suggestMeal("morning", "vegan"));      // "Fruit smoothie with oats"
console.log(suggestMeal("morning", "vegetarian")); // "Vegetarian scrambled eggs with toast"
console.log(suggestMeal("morning", "omnivore"));   // "Bacon and eggs with toast"
console.log(suggestMeal("afternoon", "vegan"));    // "Vegan burrito"
console.log(suggestMeal("afternoon", "vegetarian"));// "Vegetarian pizza"
console.log(suggestMeal("afternoon", "omnivore")); // "Chicken sandwich"
console.log(suggestMeal("evening", "vegan"));      // "Vegan lentil stew"
console.log(suggestMeal("evening", "vegetarian")); // "Vegetarian pasta"
console.log(suggestMeal("evening", "omnivore"));   // "Grilled salmon with vegetables"