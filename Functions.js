function sayHello() {
    console.log("Hello")
}

const hello = function() {
    console.log("Hello")
}

sayHello()
hello()

// Square a number
function square(number, num1, num2 = 10) {
    console.log(num1); // If value is not passed, it is undefined by default
    console.log(num2); // If value is not passed, value mentioned in parameters is considered default.
    console.log(number*number);
}

square(5)