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

// arguments object
console.log();
function args() {
    console.log(arguments);
    console.log(arguments[0]);
    // Arguments is a array-like object.
    // Even when there are no arguments mentioned in function declaration, 
    // arguments array can hold as many arguments as passed while calling the function
}

args("Namaskaram!")
let cube = () => {
    return arguments[0] * arguments[0] * arguments[0]
}
console.log(cube(3)); // Fatt arrow functions cannot access arguments object

// Closures (Parent child functions)
console.log();
function parent(name) {
    let child = function () {
        return name
    }    
    return child
}

let name = parent("Mandar") 
// Here name variable now contains child which is returned by parent function
// But child is not a variable, it's a function.
console.log(name); // This prints the child function itself
// One must treat name as a function too to get the result
console.log(name());

// Functions in objects
console.log();
let user = {
    firstName : "Mandar",
    sayHello : function() {
        console.log("Namaskaram " + this.firstName);
    }
}
user.sayHello() 

// Self calling functions
console.log();
const namaskaram = function(){
    console.log("Namaskaram");
}();
// Braces '()' at the end are used to call the function right there.
// We can also have parameters there.
const namaskaram2 = function(){
    console.log("Namaskaram " + arguments[0]);
}("Mandar");