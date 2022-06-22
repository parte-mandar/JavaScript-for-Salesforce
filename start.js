// JavaScript Tutorial for Salesforce LWC and Aura.

// Variables
var a = "Namaskaram!"
let b = "Hello There!"
const constantVar = "Constant"

console.log(a + ", " + b + ", " + constantVar);

// Scope of Variables
var c = 10
function fn(){
    c = 20 // Here there is no error as var allows variables to be scope independent
}
fn();

console.log("c: " + c);

let d = 10
function fn2(){
    //d = 20 // Error: d is not declared in function scope
    let d = 20 
    console.log("d: " + d) // This will print 20
}
fn2();

console.log("d: " + d);