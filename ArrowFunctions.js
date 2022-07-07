let add = (a,b) => {
    return a + b;
}
console.log(add(3,4));
// One can reduce this one lined function.

let add2 = (a,b) => a+b;
console.log(add2(10,2));
// One can return an object using this method

let objReturn = () => ({
    fName : "Mandar",
    lName : "Parte",
    age : 21
})
console.log(objReturn());
// Here, if we dont wrap the object in braces '()' then, 
// The curly braces '{}' will be considered as part of function syntax instead of object syntax

// ---------- Self calling arrow functions ----------
console.log();
console.log(
    (() => {
        return "Namaskaram Arrow functions!"
    })()
);
// Complex looking, but easy logically
// More simpler code will be
() => "Namaskaram, daily drops!" // This code will return the string
// Here we cant call this function, since it has no name
// To call the function we can wrap the code around braces '()' to make it a self calling function 
(() => "Namaskaram, daily drops!, Attempt 2")()
// Since this is a return statement we cannot print the string.
// We can assign this to a variable, or log it directly
let a = (() => "Namaskaram, daily drops!, Attempt 3")()
console.log(a);
// This is similar to what we did earlier to print "Namaskaram Arrow functions!"


// ---------- This keyword is now allowed ----------
console.log();
const user ={
    fName : "Mandar",
    lName : "Parte",
    sayHello : () => {
        console.log("Namaskaram " + this.fName);
    },
    sayNamaskaram : function () {
        console.log("Namaskaram " + this.fName);
    }
}
user.sayHello()
// this.fName is said to be undefined here
user.sayNamaskaram()
// Here in normal function, it works