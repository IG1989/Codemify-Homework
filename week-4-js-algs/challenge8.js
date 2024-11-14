// Challenge 8: Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz"

function fizzBuzz() {
    for (let i = 0; i <= 100; i++) {
        if(i % 3 ===0) {
            console.log("Fizz")
        } else if (i % 5 ===0) {
            console.log("Buzz")
        } else if (i % 3 === 0 && i % 5 ===0) {
            console.log("FizzBuzz");
        } else {
            console.log(i)
        }
      
    }
}
fizzBuzz()